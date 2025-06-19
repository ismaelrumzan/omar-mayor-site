import Script from "next/script"
import { PageBlocksEmbedForm } from "@/tina/__generated__/types"

export function EmbedForm(props: PageBlocksEmbedForm) {
  return (
    <section className={`w-full`}>
      <div className="container py-4 px-4">
        {props.form_type === "Qomon" && (
          <>
            <div className="prose">
              <h2>{props.form_title}</h2>
            </div>
            <div className="qomon-form" data-base_id={props.form_id}></div>
            <Script
              src="https://scripts.qomon.org/forms/v1/setup.js"
              strategy="afterInteractive"
              defer
            />
          </>
        )}
      </div>
    </section>
  )
}
