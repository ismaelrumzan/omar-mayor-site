export function VideoPlayer({ url }: { url: string }): JSX.Element {
  return (
    <iframe
      src={url}
      className="my-2 sm:h-[315px] sm:w-[560px]"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
      allowFullScreen
      title="video player"
    />
  )
}
