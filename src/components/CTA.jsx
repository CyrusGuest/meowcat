import { motion } from 'framer-motion'
import ContractAddress, { BUY_URL } from './ContractAddress.jsx'
import { XIcon, X_HANDLE, X_URL } from './Social.jsx'

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-black/[0.07]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azure-deep/[0.12] blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl px-6 py-32 text-center"
      >
        <p className="eyebrow mb-6">Built on Solana · The Next Payout Is Coming</p>
        <h2 className="font-serif text-4xl font-medium tracking-[-0.01em] sm:text-6xl">
          Payouts fire every $200.
          <br />
          Be holding when they do.
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-mist-dim">
          Verify the pool, run your own numbers, read the risks. Then take
          your seat in the Solana memecoin that pays holders in TSMx. Every $200 of fees is paid to every holder, by how much
          they hold, and every payout is on the public ledger.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={BUY_URL} target="_blank" rel="noreferrer" className="btn-primary">
            Buy $CHIP
          </a>
          <a href="#faq" className="btn-secondary">Read the Risks</a>
          {X_HANDLE && (
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary inline-flex items-center gap-2.5"
            >
              <XIcon className="h-[14px] w-[14px]" />
              Follow @{X_HANDLE}
            </a>
          )}
        </div>
        <div className="mt-7 flex justify-center">
          <ContractAddress />
        </div>
        <p className="mx-auto mt-10 max-w-lg border-t border-black/[0.08] pt-6 text-xs leading-relaxed text-mist-faint">
          CHIP is a memecoin and a speculative digital asset. Payouts vary
          with trading volume, may be zero, and are not income guarantees.
          The token’s price can decline regardless of rewards. Nothing on
          this site constitutes financial, investment, or tax advice.
        </p>
      </motion.div>
    </section>
  )
}
