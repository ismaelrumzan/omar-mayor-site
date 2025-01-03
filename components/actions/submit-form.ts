"use server"

export async function submitForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get("Email")

  if (
    !email ||
    email.toString().trim() === "" ||
    !email.toString().includes("@")
  ) {
    return { message: "Valid email is required", type: "error" }
  }

  const title = formData.get("Form title")

  const formEntries = Array.from(formData.entries())
  const emailBody = formEntries
    .filter(([key, value]) => !key.includes(`$ACTION`))
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n\n")
  const emailHTMLBody = formEntries
    .filter(([key, value]) => !key.includes(`$ACTION`))
    .map(([key, value]) => `<b>${key}</b>: ${value}<br>`)
    .join("\n")
  try {
    return {
      message: `Thank you for submitting a request. We will be in touch via email`,
      type: "success",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      type: "error",
      message: "Error submitting form. Please try again.",
    }
  }
}
