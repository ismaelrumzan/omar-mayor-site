export function Loading({ color = "text-green" }: { color?: string }) {
  return (
    <span
      className={`inline-block size-4 animate-spin border-[3px] border-current border-t-transparent ${color} rounded-full`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </span>
  )
}
