"use client"

import Form from "next/form"
import { FormAndNavQuery } from "@/tina/__generated__/types"
import { useFormState, useFormStatus } from "react-dom"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitForm } from "@/components/actions/submit-form"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

function SubmitButton({ text = "Submit" }: { text?: string }) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-primary text-secondary rounded px-4 py-2 disabled:bg-gray-300"
    >
      {pending ? "Submitting..." : `${text}`}
    </button>
  )
}

export function FormComponent(props: {
  data: FormAndNavQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)
  const [state, formAction] = useFormState(submitForm, null)
  return (
    <>
      <SiteHeader nav={data.nav} header={data.header} />
      <div className="flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-90px)]">
        <div className="grow">
          <section className={`w-full px-4 py-8`}>
            <div className="container mx-auto">
              <div
                className="prose mb-2 max-w-none py-2"
                data-tina-field={tinaField(data.form, "title")}
              >
                <h2>{data.form.title}</h2>
              </div>
              {data?.form.description && (
                <div
                  className="prose max-w-none py-2"
                  data-tina-field={tinaField(data?.form, "description")}
                >
                  <TinaMarkdown content={data?.form.description} />
                </div>
              )}
              <Form action={formAction} className="space-y-4">
                <input
                  value={data.form.title || "Form request"}
                  name="Form title"
                  type="hidden"
                />
                <div
                  className="mb-3 grid w-full max-w-sm items-center gap-1.5"
                  id="useremail"
                >
                  <Label htmlFor="email">E-mail address*</Label>
                  <Input
                    type="email"
                    required
                    id="useremail"
                    name="Email"
                    placeholder="Please enter your e-mail address"
                  />
                </div>
                <>
                  {data.form.fieldblocks?.map((block, i) => (
                    <>
                      {block?.__typename === "FormFieldblocksTextField" ? (
                        <div
                          className="mb-3 grid w-full max-w-sm items-center gap-1.5"
                          id={block.label || i.toString()}
                        >
                          <Label htmlFor={block.label || `input` + i}>
                            {block.label}
                            {block.required ? `*` : ``}
                          </Label>
                          <Input
                            type="text"
                            data-tina-field={tinaField(block, "label")}
                            required={block.required || false}
                            id={block.label || `input` + i}
                            name={block.label || `input` + i}
                            placeholder="Please enter the information here."
                          />
                        </div>
                      ) : null}
                      {block?.__typename === "FormFieldblocksLargeTextField" ? (
                        <div
                          className="mb-3 grid w-full items-center gap-1.5"
                          id={block.label || i.toString()}
                        >
                          <Label htmlFor={block.label || `input` + i}>
                            {block.label}
                            {block.required ? `*` : ``}
                          </Label>
                          <Textarea
                            required={block.required || false}
                            rows={4}
                            placeholder="Please enter the information here."
                            id={block.label || `input` + i}
                            name={block.label || `input` + i}
                            data-tina-field={tinaField(block, "label")}
                          />
                        </div>
                      ) : null}
                      {block?.__typename === "FormFieldblocksSelectField" ? (
                        <div
                          className="mb-3 grid w-full items-center gap-1.5"
                          id={block.label || i.toString()}
                        >
                          <label className="text-sm">
                            {block.label}
                            {block.required ? `*` : ``}
                            <select
                              required={block.required || false}
                              name={block.label || `input` + i}
                              className="ml-2 rounded-sm border border-gray-400 p-2"
                            >
                              <option value="" disabled selected>
                                Please select a value
                              </option>
                              {block.options?.map((item, j) => (
                                <option value={item?.optionText || `${j * 2}`}>
                                  {item?.optionText}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>
                      ) : null}
                    </>
                  ))}
                </>
                <SubmitButton text={data.form.buttonText || "Submit"} />
                {state && (
                  <div
                    className={`mt-4 rounded p-2 ${
                      state.type === "error"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {state.message}
                  </div>
                )}
              </Form>
            </div>
          </section>
        </div>
        <Footer footer={data.footer} />
      </div>
    </>
  )
}
