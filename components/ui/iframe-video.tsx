export function VideoPlayer({ url }: { url: string }): JSX.Element {
  return (
    <div className="relative w-full aspect-video my-4">
      <iframe
        src={url}
        className="absolute inset-0 w-full h-full rounded-lg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        title="Video player"
      />
    </div>
  )
}
