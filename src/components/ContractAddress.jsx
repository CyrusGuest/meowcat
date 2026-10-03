import { useState } from 'react'

// set the mint address at launch; while empty the site shows "launching soon"
// and the buy / explorer links stay on the page
export const CONTRACT_ADDRESS = ''
export const BUY_URL = CONTRACT_ADDRESS ? `https://jup.ag/swap/SOL-${CONTRACT_ADDRESS}` : '#'
export const EXPLORER_URL = CONTRACT_ADDRESS ? `https://solscan.io/token/${CONTRACT_ADDRESS}` : '#'

// copyable contract-address pill: full address on larger screens, truncated on phones
export default function ContractAddress({ className = '' }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  if (!CONTRACT_ADDRESS)
    return (
      <div
        className={`inline-flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2.5 ${className}`}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-faint">CA</span>
        <span className="font-mono text-[12px] text-mist">Launching soon</span>
      </div>
    )

  return (
    <div
      className={`inline-flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-black/[0.04] py-1.5 pl-4 pr-1.5 ${className}`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-faint">CA</span>
      <span className="min-w-0 truncate font-mono text-[12px] text-mist">
        <span className="hidden sm:inline">{CONTRACT_ADDRESS}</span>
        <span className="sm:hidden">
          {CONTRACT_ADDRESS.slice(0, 6)}…{CONTRACT_ADDRESS.slice(-6)}
        </span>
      </span>
      <button
        type="button"
        onClick={copy}
        className={`flex-none rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${
          copied ? 'bg-[#30D158] text-ink-950' : 'bg-mist text-ink-950 hover:bg-mist-dim'
        }`}
      >
        {copied ? 'Copied ✓' : 'Copy'}
      </button>
    </div>
  )
}
