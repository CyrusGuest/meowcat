const metrics = [
  ['Transaction fee', '4%'],
  ['To holders', '100% of the fee'],
  ['Paid in', 'TSMx (TSMC stock)'],
  ['Payout trigger', 'Every $200 in fees'],
  ['Split', 'By holdings'],
  ['Claiming required', 'None'],
]

export default function Ticker() {
  return (
    <div className="border-y border-black/[0.07] bg-ink-850/70">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-black/[0.06] px-6 sm:grid-cols-3 lg:grid-cols-6">
        {metrics.map(([label, value]) => (
          <div key={label} className="px-5 py-5 first:pl-0">
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-mist-faint">
              {label}
            </span>
            <span className="mt-1 block text-sm font-medium text-mist">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
