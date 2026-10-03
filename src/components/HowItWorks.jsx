import { motion } from 'framer-motion'

const steps = [
  {
    num: 'I',
    title: 'Trade',
    tag: 'fee collected at execution',
    body: 'Every buy and sell of CHIP carries a 4% fee, collected automatically at execution. This fee is the sole source of holder rewards: there are no token emissions, no inflation, and no yield generated from anyone’s principal.',
    spec: '4% per trade · Collected on-chain · Sole reward source',
  },
  {
    num: 'II',
    title: 'Pool',
    tag: 'fees swapped to TSMx',
    body: 'Collected fees accumulate in a public pool and are swapped for TSMx, the tokenized TSMC share issued by xStocks on Solana, through the TSMx / USDC liquidity pool we created and funded on Meteora. All of it belongs to holders; nothing is skimmed for marketing or the team. Both addresses are published, and every swap is verifiable by anyone at any time.',
    spec: '100% to holders · Swapped via our Meteora pool · Public',
  },
  {
    num: 'III',
    title: 'Pay out',
    tag: 'triggered at $200, split by holdings',
    body: 'The moment the pool reaches $200, it is distributed to every wallet holding CHIP, in proportion to its share of supply. TSMx arrives directly in your wallet: no staking contract to enter, no claim button to press, no lockup to exit. Each payout is an ordinary Solana transaction you can inspect.',
    spec: 'Triggered at $200 · Split by holdings · Direct to wallet',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="mb-16 max-w-2xl"
      >
        <p className="eyebrow mb-5">How It Works</p>
        <h2 className="font-serif text-4xl font-medium tracking-[-0.01em] sm:text-5xl">
          Trade. Pool. Get paid.
        </h2>
        <p className="mt-5 leading-relaxed text-mist-dim">
          A Solana memecoin that pays TSMx rewards, and it has one
          job. Every trade pays a 4% fee, the fee buys
          TSMC stock, and the moment the pool hits $200 it is paid out to
          every holder by how much they hold. No staking, no claiming,
          nothing to do but hold. Three steps, all on a public ledger.
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-lg border border-black/[0.06] bg-black/[0.03] p-8 transition-colors duration-300 hover:border-azure/25"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-3xl text-brass">{s.num}</span>
              <span className="font-mono text-[10px] tracking-[0.05em] text-mist-faint">{s.tag}</span>
            </div>
            <h3 className="mb-3 mt-6 text-lg font-medium">{s.title}</h3>
            <p className="flex-1 text-sm leading-relaxed text-mist-dim">{s.body}</p>
            <p className="mt-6 border-t border-black/[0.07] pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-mist-faint">
              {s.spec}
            </p>
          </motion.div>
        ))}
      </div>

      {/* what the $200 trigger means at different volumes */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-16 overflow-x-auto rounded-md border border-black/[0.08]"
      >
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-black/[0.08] bg-ink-800/80">
              <th className="px-6 py-5 text-[13px] font-medium text-mist-faint">24h volume</th>
              <th className="px-6 py-5 text-[13px] font-medium text-mist-faint">Fees collected</th>
              <th className="px-6 py-5 text-[13px] font-medium text-mist-faint">Payouts per day</th>
              <th className="px-6 py-5 text-[13px] font-semibold text-mist">Time between payouts</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$100k', '$4,000', '20', 'about 72 minutes'],
              ['$1M', '$40,000', '200', 'about 7 minutes'],
              ['$10M', '$400,000', '2,000', 'about 43 seconds'],
              ['$0', '$0', '0', 'No volume, no fees, payouts pause'],
            ].map(([vol, fees, count, gap]) => (
              <tr key={vol} className="border-b border-black/[0.05] last:border-0">
                <td className="px-6 py-4 font-mono text-[13px] text-mist">{vol}</td>
                <td className="px-6 py-4 text-mist-dim">{fees}</td>
                <td className="px-6 py-4 text-mist-dim">{count}</td>
                <td className="border-l border-black/[0.06] bg-azure-deep/[0.10] px-6 py-4 font-medium text-mist">
                  {gap}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <p className="mt-5 max-w-3xl font-mono text-[11px] leading-relaxed text-mist-faint">
        $200 of fees is $5,000 of trading. The trigger never changes; how
        often it fires depends entirely on volume, which is unknowable in
        advance. The table is arithmetic, not a schedule.
      </p>
    </section>
  )
}
