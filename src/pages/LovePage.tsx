import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import PageTransition from '../components/PageTransition';
import NextChapterButton from '../components/NextChapterButton';

const PASTEL_BG = [
  '#fce4ec', '#f3e5f5', '#e8eaf6', '#e0f2f1',
  '#fff3e0', '#fce4ec', '#f1f8e9', '#fff8e1',
];

const getRotation = (i: number) => [-3, 2, -1.5, 3, -2.5, 1, -2, 2.5][i % 8];

export default function LovePage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 pb-8 px-4" style={{ background: 'var(--color-cream)' }}>
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-semibold mb-3" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}>
            Things I Love About You
          </h1>
          <p className="text-sm tracking-widest uppercase" style={{ color: 'var(--color-text-light)' }}>
            A collection of reasons why you're my favorite
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {CONFIG.LOVE_NOTES.map((note, i) => (
            <motion.div
              key={i}
              className="sticky-note"
              style={{ backgroundColor: PASTEL_BG[i % PASTEL_BG.length], transform: `rotate(${getRotation(i)}deg)` }}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, rotate: 0, boxShadow: '0 8px 25px rgba(244,143,177,0.2)' }}
            >
              <p className="text-lg md:text-xl" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-text-primary)' }}>{note}</p>
            </motion.div>
          ))}
        </div>

        <NextChapterButton to="/album" />
      </div>
    </PageTransition>
  );
}
