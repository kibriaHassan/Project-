import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // TODO: Connect API endpoint or email service
  }

  
  return (
    <section id="contact" className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 px-4 py-16 text-slate-100 dark:text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold">
          Contact
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-3 text-slate-300 dark:text-slate-600">
          আপনি যে কোনও প্রজেক্ট বা কোলাবোরেশন আইডিয়া নিয়ে যোগাযোগ করতে পারেন।
        </motion.p>

        <form onSubmit={handleSubmit} className="glass-card mt-8 space-y-4 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200 dark:text-slate-700" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 dark:border-slate-300 bg-slate-950/80 dark:bg-white px-4 py-2 text-white dark:text-slate-900 outline-none transition focus:border-brand-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200 dark:text-slate-700" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 dark:border-slate-300 bg-slate-950/80 dark:bg-white px-4 py-2 text-white dark:text-slate-900 outline-none transition focus:border-brand-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200 dark:text-slate-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 dark:border-slate-300 bg-slate-950/80 dark:bg-white px-4 py-2 text-white dark:text-slate-900 outline-none transition focus:border-brand-400"
            />
          </div>

          <button type="submit" className="w-full rounded-xl bg-brand-500 px-4 py-2 text-white transition hover:bg-brand-400">
            Send Message
          </button>

          {submitted && <p className="rounded-md bg-emerald-500/20 p-3 text-sm text-emerald-200 dark:text-emerald-800">ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।</p>}
        </form>
      </div>
    </section>
  )
}
