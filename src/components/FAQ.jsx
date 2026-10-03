import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Is CHIP a memecoin?',
    a: 'Yes, and we say so plainly. CHIP is a Solana memecoin that pays its holders in TSMx, and that is the whole pitch: it has no product and no team claiming it is anything else. What it has is one mechanism: a 4% fee on every trade that is converted to TSMC xStock and paid to holders every time the pool reaches $200. The coin is a meme; the payouts are real tokens you can verify on-chain.',
  },
  {
    q: 'When will I earn back what I put in?',
    a: 'We don’t know, and neither does anyone else, so we won’t publish a payback target. Payouts depend entirely on trading volume, which varies unpredictably and can fall to zero. The token’s market price also moves independently of rewards, so your position can lose value faster than rewards add up. Treat CHIP as a speculative asset whose rewards are a variable bonus, not as an income product with a schedule.',
  },
  {
    q: 'Where exactly does the TSMx come from?',
    a: 'From the 4% fee charged on each completed trade of CHIP. Fees accumulate in a public pool and are swapped for TSMx, the tokenized TSMC share issued by xStocks on Solana, through the public TSMx / USDC liquidity pool on Meteora. Every time the pool reaches $200, it is paid to holders in proportion to how much they hold. No part of any payout comes from new buyers’ principal, token emissions, or lending out pooled funds; the pool’s inflows and outflows are public Solana transactions you can audit.',
  },
  {
    q: 'What happens when trading volume falls?',
    a: 'Payouts slow down with it. The $200 trigger never changes, so a quiet hour simply takes longer to fill the pool, and a day with no trading produces no payout at all. This is the honest cost of a mechanism funded by real activity rather than by inflation or new deposits: the rewards are genuine precisely because they are not guaranteed.',
  },
  {
    q: 'Do I need to stake, lock, or claim anything?',
    a: 'No. Hold CHIP in a self-custodied Solana wallet and payouts arrive automatically. There is no staking contract, no claim interface, and no lockup period. If you sell, you simply stop receiving future payouts; nothing you have already received is affected.',
  },
  {
    q: 'What is TSMx, exactly?',
    a: 'TSMx is a tokenized representation of TSMC’s NYSE-listed shares, issued by xStocks on Solana and designed to track the share price. It is not a brokerage holding, it carries no voting rights, and it is issued by a third party under its own terms, which restrict who may hold it in some jurisdictions, including the United States. CHIP does not issue TSMx and has no relationship with TSMC.',
  },
  {
    q: 'What are the risks?',
    a: 'The principal ones: the token’s price can fall, including to near zero; trading volume, and therefore payouts, can dry up; the TSMx you receive tracks TSMC’s share price and can lose value after it reaches you; smart-contract and operational failures are possible despite public auditability; and regulatory treatment of fee-redistribution tokens and tokenized stocks is unsettled in most jurisdictions, which could affect exchange listings or your local ability to hold either asset. Only commit funds you can afford to lose entirely. Nothing on this site is financial advice.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <p className="eyebrow mb-5">Frequently Asked</p>
        <h2 className="font-serif text-4xl font-medium tracking-[-0.01em] sm:text-5xl">
          Asked directly, answered directly.
        </h2>
      </motion.div>

      <div className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className={`font-medium tracking-tight transition-colors ${isOpen ? 'text-mist' : 'text-mist-dim'}`}>
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex-none font-mono text-lg ${isOpen ? 'text-brass' : 'text-mist-faint'}`}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-7 text-sm leading-relaxed text-mist-dim">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
