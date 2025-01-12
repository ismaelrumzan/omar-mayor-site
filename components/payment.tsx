"use client"

import { CreditCard, PaymentForm } from "react-square-web-payments-sdk"

import { submitPayment } from "@/components/actions/square-payment"

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

  return (
    <PaymentForm
      applicationId={appId as string}
      locationId={locationId as string}
      cardTokenizeResponseReceived={async (token) => {
        const result = await submitPayment(token.token, amount)
        if (result.errors) {
          let errorMessage = "Failed to process payment"
          if (Array.isArray(result.errors) && result.errors.length > 0) {
            errorMessage = `Payment failed with error code ${result.errors[0].code}: ${result.errors[0].detail}`
          }
          onError(errorMessage)
        } else {
          onSuccess()
        }
      }}
    >
      <CreditCard />
    </PaymentForm>
  )
}
