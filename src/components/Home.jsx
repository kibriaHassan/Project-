import { motion } from 'framer-motion'

export default function Home() {
  return (

    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 px-4 py-16 text-slate-100 dark:text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="inline-flex items-center rounded-full bg-brand-500/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
            সৃজনশীল ডিজাইনার & ডেভেলপার
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white dark:text-slate-900 sm:text-5xl">
            আমি ...
          </h1>
          <p className="mt-5 text-lg text-slate-300 dark:text-slate-600">
            React + Tailwindর্ই ব্যবহার করে একটি উচ্চমানের, দ্রুত ও রেসপন্সিভ পোর্টফোলিও তৈরি করি।
            উন্নত UI/UX ফোকাস, ফ্রেমওয়ার্ক সমন্বয় ও ডেটা ড্রিভেন ডিজাইন আমি পছন্দ করি।
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-lg bg-brand-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-brand-400">
              Contact Me
            </a>
            <a href="#album" className="rounded-lg border border-white/20 dark:border-slate-300 px-5 py-3 font-semibold text-white/90 dark:text-slate-900 transition hover:bg-white/10 dark:hover:bg-slate-200">
              View Work
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 dark:border-slate-300 bg-white/5 dark:bg-slate-100 p-5 shadow-soft backdrop-blur-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Developer workspace"
            className="h-72 w-full rounded-2xl object-cover sm:h-80 lg:h-96"
          />
        </motion.div>
      </div>
    </section>
  )
}
