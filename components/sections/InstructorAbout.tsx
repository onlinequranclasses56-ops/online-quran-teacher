'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { BadgeCheck, MessageCircle, BookOpen, Users, Clock, Star, GraduationCap } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/utils'

const expertise = [
  'Arabic Language (MA Level)',
  'Quran Recitation (Nazra)',
  'Tajweed Rules & Correction',
  'Hifz ul Quran (Memorisation)',
  'Noorani Qaida (Beginners)',
  'Quran for Kids',
  'Quran for Adults',
  'Islamic Studies',
  'One-to-One Classes',
  'Online Quran Teaching',
  'Flexible Scheduling',
  'Affordable Pricing',
]

const highlights = [
  { icon: GraduationCap, label: "Master's Degree in Arabic Language (MA Arabic)", color: 'text-gold' },
  { icon: BookOpen, label: 'Hafiz ul Quran — Full Quran Memorised', color: 'text-emerald-400' },
  { icon: BadgeCheck, label: 'Tajweed Certified Teacher', color: 'text-green-400' },
  { icon: Clock, label: '5 Years Teaching Experience', color: 'text-purple-400' },
]

export function InstructorAbout() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="section-padding bg-white dark:bg-dark"
      ref={ref}
      id="about-instructor"
      aria-label="About Hafiz Raza"
    >
      <div className="container-custom">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
            <span className="w-8 h-px bg-primary-600" />
            Meet Your Lead Instructor
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Learn from a{' '}
            <span className="gradient-text">MA Arabic Graduate & Hafiz ul Quran</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hafiz Raza holds a Master&apos;s degree in Arabic Language and is a certified Hafiz ul Quran — bringing
            academic excellence and 5 years of teaching experience to every class.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 items-start">

          {/* LEFT — Avatar + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Instructor photo card */}
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-1 bg-gold-gradient rounded-3xl blur opacity-20" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold/30">
                <div className="relative h-72 w-full">
                  <Image
                    src="/hafiz-raza-online-quran-teacher-manchester.webp"
                    alt="Hafiz Raza — MA Arabic graduate and certified Hafiz ul Quran, lead Quran teacher at Quran Center UK Manchester"
                    fill
                    sizes="320px"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark/90 to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center px-4">
                    <p className="text-white font-heading font-bold text-lg leading-tight">Hafiz Raza</p>
                    <p className="text-gold text-xs font-medium mt-0.5">MA Arabic · Hafiz ul Quran · Tajweed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating strip */}
            <div className="flex items-center gap-2 w-full max-w-xs px-4 py-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
              <div className="flex">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-gold fill-gold" />)}
              </div>
              <span className="text-dark dark:text-white font-bold text-sm">5.0</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs">· 50+ students taught</span>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 w-full max-w-xs">
              {highlights.map((h) => (
                <li key={h.label} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
                  <h.icon className={`w-4 h-4 shrink-0 mt-0.5 ${h.color}`} />
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-snug">{h.label}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex gap-3 w-full max-w-xs">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Assalamu%20Alaykum%2C%20I%20would%20like%20to%20book%20a%20FREE%20trial%20class%20with%20Hafiz%20Raza.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Book Trial
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Assalamu%20Alaykum%2C%20please%20share%20your%20course%20fees%20and%20schedule.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-md"
              >
                Ask Fees
              </a>
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500 text-center lg:text-left">
              📍 Manchester, UK · Online UK-wide · WhatsApp 24/7
            </p>
          </motion.div>

          {/* RIGHT — Bio + expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Hafiz Raza holds a <strong>Master&apos;s Degree in Arabic Language (MA Arabic)</strong> and is a
                certified <strong>Hafiz ul Quran</strong> — having memorised the complete Holy Quran. This combination
                of formal academic Arabic scholarship and full Quranic memorisation places him among
                the most qualified Quran teachers available in the UK.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                With <strong>5 years of dedicated teaching experience</strong>, he specialises in Tajweed, Hifz
                programmes, Noorani Qaida for beginners, and Arabic language instruction — teaching children
                from age 4 right through to adults. His MA in Arabic means he can explain Quranic grammar,
                vocabulary, and classical Arabic in a way few teachers can.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                His approach is <strong>patient, structured, and personalised</strong> — adapting to each
                student&apos;s pace and learning style. The centre also has qualified <strong>female teachers</strong> available
                for sisters who prefer a same-gender environment.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All courses are offered at <strong>affordable prices</strong> with flexible morning, afternoon,
                and evening slots — 7 days a week. The first trial class is completely free with no commitment.
              </p>
            </div>

            {/* Areas of Expertise */}
            <div>
              <h3 className="font-heading font-bold text-dark dark:text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-primary-600 inline-block" />
                What We Teach
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800 px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    <BadgeCheck className="w-3 h-3 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Affordable pricing note */}
            <div className="mt-8 p-5 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-2xl">
              <p className="text-primary-800 dark:text-primary-300 text-sm font-semibold mb-2">
                Affordable prices — contact us for a quote:
              </p>
              <p className="text-primary-700 dark:text-primary-400 text-sm leading-relaxed">
                Fees vary by course and number of sessions per week. We offer special rates for families
                enrolling multiple children. Message us on WhatsApp for a personalised, no-obligation quote.
              </p>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Assalamu%20Alaykum%2C%20I%20would%20like%20to%20know%20the%20fees%20for%20Quran%20classes.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-[#25D366] hover:bg-[#20b858] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                Ask About Fees on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
