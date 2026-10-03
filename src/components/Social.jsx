// set the X handle (no @) once the account exists; while empty, X links are hidden
export const X_HANDLE = ''
export const X_URL = `https://x.com/${X_HANDLE}`

export function XIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.3 8.4L23 22h-6.7l-5.3-6.9L5 22H1.9l7.8-8.9L1 2h6.9l4.8 6.3L18.9 2zm-1.2 18h1.8L7 3.9H5.1L17.7 20z" />
    </svg>
  )
}

// round X button used in the navbar and footer
export default function XLink({ className = '', label = false }) {
  if (!X_HANDLE) return null
  return (
    <a
      href={X_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={`@${X_HANDLE} on X`}
      className={`inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] text-mist transition-colors hover:border-black/25 hover:bg-black/[0.08] ${
        label ? 'px-4 py-2 text-[13px] font-medium' : 'h-9 w-9 justify-center'
      } ${className}`}
    >
      <XIcon className="h-[15px] w-[15px]" />
      {label && <span>@{X_HANDLE}</span>}
    </a>
  )
}
