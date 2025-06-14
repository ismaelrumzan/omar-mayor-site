export function VideoPlayer({
  url,
  autoplay = false,
}: {
  url: string
  autoplay?: boolean
}): JSX.Element {
  return (
    <div className="relative w-full aspect-video my-4">
      <iframe
        src={autoplay ? `${url}?autoplay=1&mute=1` : `${url}`}
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
