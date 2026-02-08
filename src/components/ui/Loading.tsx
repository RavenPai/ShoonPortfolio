export default function Loading({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <img
        src="/Loading.gif"
        alt="Loading..."
        className="h-24 w-auto object-contain"
      />
    </div>
  )
}
