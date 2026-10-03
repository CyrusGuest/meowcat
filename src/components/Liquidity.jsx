import { motion } from 'framer-motion'
import { ChipMark } from './Hero.jsx'

const EASE = [0.22, 1, 0.36, 1]
export const POOL_URL = 'https://www.meteora.ag/dammv2/BVmLd8oUGM7Tw6H5xB4fDazUxnrTpFb6nABNWGAFt46B'
const POOL_ADDRESS = 'BVmLd8oUGM7Tw6H5xB4fDazUxnrTpFb6nABNWGAFt46B'

function Float({ children, delay = 0, amt = 7, dur = 5, className = '' }) {
  return (
    <motion.div
      animate={{ y: [0, -amt, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const facts = [
  {
    title: 'The market is already there',
    body: 'A TSMx / USDC pool is live on Meteora’s DAMM v2, so the rewards engine has somewhere to buy TSMC stock from day one.',
  },
  {
    title: 'Every payout routes through it',
    body: 'Collected fees are swapped to TSMx against this pool. Deeper liquidity means tighter fills for the pool and for anyone else who wants TSMC exposure on Solana.',
  },
  {
    title: 'Open to everyone',
    body: 'It is a public Meteora pool, not a private venue. Anyone can trade it, add liquidity to it, or audit every swap the rewards engine has ever made through it.',
  },
]

export default function Liquidity() {
  return (
    <section id="liquidity" className="relative mx-auto max-w-7xl overflow-x-clip px-6 py-20 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* copy: lines slam in from the left */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: [0, 1.15, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-7"
          >
            On-Chain Liquidity
          </motion.p>
          <Float amt={6} dur={5.5}>
            <motion.h2
              initial={{ opacity: 0, x: -240 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: EASE }}
              className="text-4xl font-bold tracking-[-0.03em] sm:text-6xl"
            >
              Every fee is swapped through
            </motion.h2>
          </Float>
          <Float delay={0.4} amt={7} dur={5}>
            <motion.h2
              initial={{ opacity: 0, x: -240 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.15, duration: 0.55, ease: EASE }}
              className="text-4xl font-bold tracking-[-0.03em] sm:text-6xl"
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-azure to-azure-bright bg-clip-text text-transparent">
                  TSMx liquidity on Solana.
                </span>
                <span aria-hidden className="text-glint absolute inset-0">
                  TSMx liquidity on Solana.
                </span>
              </span>
            </motion.h2>
          </Float>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.5, duration: 0.55, ease: EASE }}
            className="mx-auto mt-7 max-w-xl leading-relaxed text-mist-dim lg:mx-0"
          >
            A memecoin that pays in TSMC stock needs a place to buy TSMC stock.
            CHIP uses the public TSMx / USDC liquidity pool on Meteora. Every
            fee the coin collects is swapped to TSMx through it, in the open.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href={POOL_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View the pool on Meteora →
            </a>
            <span className="rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 font-mono text-[11px] text-mist-dim">
              DAMM v2 · TSMx / USDC
            </span>
          </motion.div>
        </div>

        {/* pool card flies in from the right */}
        <Float delay={0.6} amt={8} dur={5.2}>
          <motion.a
            href={POOL_URL}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 260, rotate: 4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 190, damping: 21 }}
            className="relative block overflow-hidden rounded-[28px] p-7 ring-1 ring-azure/25 backdrop-blur-2xl shadow-[0_24px_60px_rgba(17,19,24,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors hover:ring-azure/50 sm:p-9"
            style={{
              background:
                'radial-gradient(130% 160% at 12% 0%, rgba(10,135,84,0.10) 0%, rgba(10,135,84,0.04) 45%, rgba(255,255,255,0.7) 100%)',
            }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-azure/[0.1] blur-[70px]" />

            <div className="relative flex items-center justify-between">
              <span className="flex items-center gap-2.5 text-[13px] font-medium text-mist">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-azure/10 text-azure">
                  <ChipMark className="h-3.5 w-3.5" strokeWidth={4.5} />
                </span>
                Meteora · DAMM v2
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-azure">
                <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-azure" />
                Live on Solana
              </span>
            </div>

            {/* the pair */}
            <div className="relative mt-8 flex items-center justify-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-azure font-display text-[15px] font-bold text-white shadow-[0_0_30px_-6px_rgba(10,135,84,0.7)]">
                TSMx
              </span>
              <span className="font-mono text-2xl text-mist-faint">/</span>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2775CA] font-display text-[15px] font-bold text-white shadow-[0_0_30px_-6px_rgba(39,117,202,0.6)]">
                USDC
              </span>
            </div>
            <p className="relative mt-5 text-center font-display text-xl font-semibold tracking-[-0.02em] text-mist">
              The TSMx / USDC pool on Solana
            </p>
            <p className="relative mt-1 text-center text-[13px] text-mist-dim">
              Where CHIP’s fees become TSMC stock
            </p>

            <div className="relative mt-7 rounded-2xl bg-white/70 p-4 ring-1 ring-black/[0.06]">
              <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-mist-faint">
                Pool address
              </span>
              <span className="mt-1 block truncate font-mono text-[12px] text-mist">{POOL_ADDRESS}</span>
            </div>
            <p className="relative mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-mist-dim">
              Open on Meteora →
            </p>
          </motion.a>
        </Float>
      </div>

      {/* facts fly in from alternating edges */}
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {facts.map((f, i) => (
          <Float key={f.title} delay={0.5 + i * 0.5} amt={5} dur={4.8 + i * 0.5}>
            <motion.div
              initial={{ opacity: 0, x: i % 2 ? 260 : -260, rotate: i % 2 ? 4 : -4 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 190, damping: 21 }}
              className="h-full rounded-lg border border-black/[0.06] bg-black/[0.03] p-7 transition-colors hover:border-azure/25"
            >
              <span className="font-mono text-[11px] text-azure">0{i + 1}</span>
              <h3 className="mb-2.5 mt-4 font-medium tracking-tight">{f.title}</h3>
              <p className="text-sm leading-relaxed text-mist-dim">{f.body}</p>
            </motion.div>
          </Float>
        ))}
      </div>
    </section>
  )
}
