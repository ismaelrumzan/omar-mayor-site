"use server"

import Airtable from "airtable"

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.AIRTABE_BASE as string
)

const paymentsTable = base("Donations")

export async function createPaymentRecord(
  customerData: {
    fullName: string
    emailAddress: string
    phone: string
    address: {
      addressLine: string
      city: string
      province: string
      postalCode: string
    }
  },
  paymentData: {
    PaymentID: string
    Amount: number
    orderId: string
    receiptUrl: string
    createdAt: string
  }
) {
  try {
    const response = await paymentsTable.create([
      {
        fields: {
          PaymentID: paymentData.PaymentID,
          "Full Name": customerData.fullName,
          Email: customerData.emailAddress,
          Phone: customerData.phone,
          Amount: paymentData.Amount,
          Submitted: paymentData.createdAt.split("T")[0],
          OrderID: paymentData.orderId,
          ReceiptURL: paymentData.receiptUrl,
          Address: customerData.address.addressLine,
          City: customerData.address.city,
          Province: customerData.address.province,
          PostalCode: customerData.address.postalCode,
        },
      },
    ])
    if (response && response.length > 0) {
      return { success: true }
    }
  } catch (error) {
    return { success: false, error: "Failed to save record" }
  }
}
