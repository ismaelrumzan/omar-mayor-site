import { ChangeEvent, useState } from "react"
import Image from "next/image"
import {
  PageBlocksDonationSection,
  PageBlocksWelcomeHero,
} from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Payment } from "@/components/payment"

import { Label } from "../ui/label"

export function DonationBlock(props: PageBlocksDonationSection) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [showPaymentDialog, setShowPaymentDialog] = useState(false)
  const { toast } = useToast()
  const handleSuccess = () => {
    setShowPaymentDialog(false)
    toast({
      title: "Thank you for your donation!",
      description: "Your support helps us build a better Edmonton.",
    })
  }

  const handleError = (error: string) => {
    toast({
      title: "Payment failed",
      description: error,
      variant: "destructive",
    })
  }
  const donationValues = props.donationValues
    ? props.donationValues.map((value) => value?.amount)
    : [25, 50, 100, 250, 1000, 2500]
  return (
    <>
      {props.showTopImage ? (
        <section className="w-full relative">
          <div className="container relative">
            <Image
              src="/images/edmonton-skyline.png"
              alt="Edmonton"
              width={2400}
              height={518}
              className="mx-auto overflow-hidden object-cover"
            />
          </div>
        </section>
      ) : null}
      <section
        id={props.id || "donation-block"}
        className="w-full py-12 md:py-24 lg:py-32 bg-[#13A14B]"
      >
        <div className="container px-4 md:px-6 text-center">
          <h2
            className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl"
            data-tina-field={tinaField(props, "title")}
          >
            {props.title}
          </h2>
          <div className="mx-auto mt-8 flex flex-wrap justify-center">
            <ToggleGroup
              type="single"
              data-tina-field={tinaField(props)}
              value={selectedAmount?.toString() || ""}
              onValueChange={(value) => {
                setSelectedAmount(value ? parseInt(value, 10) : null)
                setCustomAmount("")
              }}
              className="gap-3 grid grid-cols-4"
            >
              {donationValues.map((amount) => (
                <ToggleGroupItem
                  key={amount}
                  value={amount?.toString() as string}
                  variant="outline"
                  className="text-white hover:bg-white/90 rounded-none p-3 text-lg"
                  onClick={() => {
                    setSelectedAmount(Number(amount))
                  }}
                >
                  ${amount}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          {selectedAmount === null && customAmount === "" ? (
            <div className="mx-auto mt-3 flex flex-wrap justify-center text-gray-200">
              <Label>Please select an amount or type a value below</Label>
            </div>
          ) : null}
          <div className="mt-4 mx-auto max-w-sm flex items-center justify-center gap-2 text-white">
            $
            <Input
              type="number"
              value={customAmount}
              className="max-w-28 text-white text-lg"
              min="1"
              step="1"
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setSelectedAmount(null)
              }}
            />
            <Button
              className="bg-[#4B0082] hover:bg-[#4B0082]/90 flex-grow"
              data-tina-field={tinaField(props, "donationButton")}
              disabled={selectedAmount === null && customAmount === ""}
              onClick={() => {
                setShowPaymentDialog(true)
              }}
            >
              {props.donationButton}
            </Button>
          </div>
        </div>
      </section>
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Donation</DialogTitle>
            <DialogDescription>
              Your donation of{" "}
              <b>
                $
                {selectedAmount === null
                  ? Number(customAmount)
                  : selectedAmount}{" "}
                CAD
              </b>{" "}
              helps support our campaign for a better Edmonton.
            </DialogDescription>
          </DialogHeader>
          {selectedAmount !== null && (
            <Payment
              amount={selectedAmount}
              onError={handleError}
              onSuccess={handleSuccess}
            />
          )}
          {customAmount !== "" && (
            <Payment
              amount={
                selectedAmount === null ? Number(customAmount) : selectedAmount
              }
              onError={handleError}
              onSuccess={handleSuccess}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
