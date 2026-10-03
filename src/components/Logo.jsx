import { ChipMark } from './Hero.jsx'

// brand lockup: C-chip mark on a green tile + CHIP wordmark
export default function Logo({ size = 'md' }) {
  const lg = size === 'lg'
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="CHIP">
      <span
        className={`relative flex flex-none items-center justify-center overflow-hidden shadow-md shadow-azure/30 ${
          lg ? 'h-11 w-11 rounded-[12px]' : 'h-9 w-9 rounded-[10px]'
        }`}
        style={{
          background:
            'radial-gradient(130% 105% at 50% 0%, rgba(110,231,170,0.95) 0%, #0A8754 48%, #065432 100%)',
        }}
      >
        <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.18] to-transparent" />
        <ChipMark className={`relative text-white ${lg ? 'h-6 w-6' : 'h-5 w-5'}`} strokeWidth={5} />
      </span>
      <span
        className={`font-display font-bold tracking-[-0.04em] text-mist ${lg ? 'text-[28px]' : 'text-[23px]'}`}
      >
        CHIP
      </span>
    </span>
  )
}
