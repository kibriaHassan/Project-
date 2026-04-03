import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-slate-900 dark:bg-slate-50 px-4 py-16 text-slate-100 dark:text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-white dark:text-slate-900">About Me</h2>
          <p className="mt-3 max-w-3xl text-slate-300 dark:text-slate-600">
            আমি একজন ফুলস্ট্যাক ডেভেলপার যিনি গত ৩ বছর ধরে ওয়েব অ্যাপ্লিকেশন তৈরি করছি।
            ক্লিন কোড, টেস্টিং এবং উন্নত পারফরম্যান্স উপরে আমার ফোকাস।
          </p>
        </motion.div>


        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'React & Tailwind', description: 'কম্পোনেন্ট ভিত্তিক ডিজাইন ও কাস্টম UI সিস্টেম।' },
            { title: 'UI/UX Design', description: 'সুন্দর, ব্যবহারবান্ধব এবং ফোন-প্রথম ডিজাইন।' },
            { title: 'Performance', description: 'লাইটওয়েট লোড, স্মার্ট লোডিং ও অপ্টিমাইজড ইন্টারঅ্যাকশন।' },
            { title: 'Collaboration', description: 'টারউজেক্ট ম্যানেজমেন্ট ও কোড রিভিউ সংস্কৃতি।' },
            { title: 'Testing & Quality', description: 'Jest, React Testing Library ও E2E ভিত্তিক ব্রাউজারি পরীক্ষা।' },
            { title: 'Version Control', description: 'Git & GitHub-এ পরিষ্কার কমিট ইতিহাস ও CI পেপলাইন।' },
          ].map((item) => (
            <article key={item.title} className="glass-card p-5">
              <h3 className="text-xl font-semibold text-white dark:text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-300 dark:text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
