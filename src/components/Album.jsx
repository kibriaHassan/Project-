import { motion } from 'framer-motion'

const projects = [
  { name: 'E-commerce Portal', image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80', description: 'React + Stripe payments' },
  { name: 'Dashboard UI', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80', description: 'Analytics & responsive charts' },
  { name: 'Portfolio Site', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', description: 'Minimal, fast, SEO-friendly' },
  { name: 'Blog Platform', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80', description: 'Content editor + markdown preview' },
]

export default function Album() {
  return (
    <section id="album" className="bg-slate-900 dark:bg-slate-50 px-4 py-16 text-slate-100 dark:text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-3xl font-bold">
          Album
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mt-3 max-w-2xl text-slate-300 dark:text-slate-600">
          সাম্প্রতিক প্রকল্প ও UI ডেমো দেখুন।
        </motion.p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <motion.article key={project.name} whileHover={{ y: -4 }} className="glass-card overflow-hidden">
              <img src={project.image} alt={project.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white dark:text-slate-900">{project.name}</h3>
                <p className="mt-1 text-sm text-slate-300 dark:text-slate-600">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
