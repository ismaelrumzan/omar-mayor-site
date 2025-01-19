"use client"

import { useState } from "react"
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createPaymentRecord } from "@/components/actions/airtable-record"
import { submitPayment } from "@/components/actions/square-payment"

import { Loading } from "./loading"

export function Payment({
  amount,
  onSuccess,
  onError,
}: {
  amount: number
  onSuccess: () => void
  onError: (error: string) => void
}) {
  const appId = process.env.NEXT_PUBLIC__SQUARE_APP_ID
  const locationId = process.env.NEXT_PUBLIC__SQUARE_LOCATION_ID
  const [fullName, setFullName] = useState("")
  const [showPersonalInfo, setShowPersonalInfo] = useState(true)
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [postal, setPostalCode] = useState("")
  const [customerId, setCustomerId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showReceipt, setShowReceipt] = useState(false)

  function checkInfo(): boolean {
    let isInfoComplete = false
    if (email !== "" && fullName !== "" && address !== "") {
      isInfoComplete = true
    } else {
      isInfoComplete = false
    }
    return isInfoComplete
  }

  const checkForm = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPersonalInfo(false)
  }

  return (
    <form className="space-y-4" onSubmit={checkForm}>
      {isLoading && <Loading />}
      {showPersonalInfo ? (
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="province">Province/State</Label>
              <Input
                id="province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="postal">Postal/ZIP Code</Label>
              <Input
                id="postal"
                value={postal}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>
          <Button type="submit" disabled={!checkInfo()}>
            Proceed to Payment
          </Button>
        </div>
      ) : !showReceipt ? (
        <PaymentForm
          applicationId={appId as string}
          locationId={locationId as string}
          cardTokenizeResponseReceived={async (token) => {
            setIsLoading(true)
            const result = await submitPayment(token.token, amount)
            setIsLoading(false)
            if (result.errors) {
              let errorMessage = "Failed to process payment"
              if (Array.isArray(result.errors) && result.errors.length > 0) {
                errorMessage = `Payment failed with error code ${result.errors[0].code}: ${result.errors[0].detail}`
              }
              onError(errorMessage)
            } else {
              const saveRecord = await createPaymentRecord(
                {
                  fullName,
                  emailAddress: email,
                  address: {
                    addressLine: address,
                    city,
                    province,
                    postalCode: postal,
                  },
                },
                {
                  PaymentID: result.payment.id,
                  Amount: amount,
                  orderId: result.payment.orderId,
                  receiptUrl: result.payment.receiptUrl,
                  createdAt: result.payment.createdAt,
                }
              )
              if (saveRecord?.success) {
                setShowReceipt(true)
              } else {
                onError("Failed to save payment record. Please contact support")
              }
            }
          }}
        >
          <CreditCard />
        </PaymentForm>
      ) : (
        <div className="flex flex-col gap-4">
          <h2>Thank you {fullName} for your Donation!</h2>
          <Button onClick={() => onSuccess()}>Close Payment Dialog</Button>
        </div>
      )}
    </form>
  )
}
