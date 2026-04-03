import { motion } from 'framer-motion'

const skills = [
  { title: 'React', level: 95 },
  { title: 'Tailwind CSS', level: 94 },
  { title: 'JavaScript (ES6+)', level: 96 },
  { title: 'TypeScript', level: 88 },
  { title: 'Node.js', level: 85 },
  { title: 'API Design', level: 90 },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 px-4 py-16 text-slate-100 dark:text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold">
          Skills
        </motion.h2>
        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-3 max-w-2xl text-slate-300 dark:text-slate-600">
          ট্র্যাকযোগ্য দক্ষতা যেখানে বাস্তব প্রকল্পে প্রমাণিত ফলাফল রয়েছে।
        </motion.p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.title} className="glass-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white dark:text-slate-900">{skill.title}</h3>
                <span className="text-sm text-slate-300 dark:text-slate-600">{skill.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10 dark:bg-slate-200">
                <div className="h-full rounded-full bg-brand-400" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
