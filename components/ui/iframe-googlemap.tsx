export function GoogleMap({ url }: { url: string }): JSX.Element {
  return (
    <div className="w-full">
      <iframe src={url} width="100%" height="350" loading="lazy"></iframe>
    </div>
  )
}
