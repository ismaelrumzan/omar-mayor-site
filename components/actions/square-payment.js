"use server"

import { randomUUID } from "crypto"
import { Client } from "square"

BigInt.prototype.toJSON = function () {
  return this.toString()
}

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_TOKEN,
  environment:
    process.env.VERCEL_ENV === "production" ? "production" : "sandbox",
})

export async function submitPayment(sourceId, amount) {
  try {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId,
      amountMoney: {
        currency: "CAD",
        amount: amount * 100,
      },
    })
    return result
  } catch (error) {
    return JSON.parse(error.body)
  }
}

/**
 * Return items to save in database connected to the user for a receipt
{
  payment: {
    id: 'demN9fWUMaqQV77WfwNjXap72hOZY',
    createdAt: '2025-01-19T00:17:40.759Z',
    updatedAt: '2025-01-19T00:17:41.024Z',
    amountMoney: { amount: 2500n, currency: 'CAD' },
    totalMoney: { amount: 2500n, currency: 'CAD' },
    approvedMoney: { amount: 2500n, currency: 'CAD' },
    status: 'COMPLETED',
    delayDuration: 'PT168H',
    delayAction: 'CANCEL',
    delayedUntil: '2025-01-26T00:17:40.759Z',
    sourceType: 'CARD',
    cardDetails: {
      status: 'CAPTURED',
      card: [Object],
      entryMethod: 'KEYED',
      cvvStatus: 'CVV_ACCEPTED',
      avsStatus: 'AVS_ACCEPTED',
      statementDescription: 'SQ *DEFAULT TEST ACCOUNT',
      cardPaymentTimeline: [Object]
    },
    locationId: 'LDN3HRFP1RE15',
    orderId: 'f3vyTwpgqOY9ChJUQIcNeciMRcWZY',
    riskEvaluation: { createdAt: '2025-01-19T00:17:40.915Z', riskLevel: 'NORMAL' },
    receiptNumber: 'demN',
    receiptUrl: 'https://squareupsandbox.com/receipt/preview/demN9fWUMaqQV77WfwNjXap72hOZY',
    applicationDetails: {
      squareProduct: 'ECOMMERCE_API',
      applicationId: 'sandbox-sq0idb-S0JvIZqFV2wcVFalDtMDXQ'
    },
    versionToken: 'aPbxvDczWdvdUo9nAaQXilzUR5kTjdR0yyOMXdcxRz25o'

 *
 */
