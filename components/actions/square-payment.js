"use server"

import { randomUUID } from "crypto"
import { Client } from "square"

BigInt.prototype.toJSON = function () {
  return this.toString()
}

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_TOKEN,
  environment: "sandbox",
})

export async function submitPayment(sourceId, amount) {
  try {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId,
      amountMoney: {
        currency: "CAD",
        amount: amount,
      },
    })
    return result
  } catch (error) {
    return JSON.parse(error.body)
  }
}
