import Image from "next/image"
import { PageBlocksGallery } from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"

export function ImageGallery(props: PageBlocksGallery): JSX.Element {
  const { galleryImages } = props
  return (
    <>
      {galleryImages && galleryImages?.length > 0 && (
        <div className="container mx-auto grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, i) => {
            const galleryImage = item?.galleryImage
              ? `${item?.galleryImage}`
              : "none"
            return (
              <>
                {galleryImage !== "none" && (
                  <div key={item?.caption || i}>
                    <div className="relative h-80">
                      <Image
                        src={galleryImage}
                        data-tina-field={tinaField(item, "galleryImage")}
                        fill
                        alt={item?.caption || "Gallery Image"}
                        className="object-contain"
                      />
                    </div>
                    {item?.caption && (
                      <div className="prose flex items-center justify-center gap-2 py-2">
                        {item.caption}
                      </div>
                    )}
                  </div>
                )}
              </>
            )
          })}
        </div>
      )}
    </>
  )
}
