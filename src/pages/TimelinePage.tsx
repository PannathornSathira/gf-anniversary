import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import PageTransition from '../components/PageTransition';
import NextChapterButton from '../components/NextChapterButton';

export default function TimelinePage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 pb-8 px-4" style={{ background: 'var(--color-cream)' }}>
        {/* Page title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-4xl md:text-5xl font-semibold mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}
          >
            Our Timeline
          </h1>
          <p className="text-sm tracking-widest uppercase" style={{ color: 'var(--color-text-light)' }}>
            Every moment tells a story
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line" />

          {CONFIG.MEMORIES.map((memory, index) => (
            <TimelineCard key={index} memory={memory} index={index} />
          ))}
        </div>

        <NextChapterButton to="/map" />
      </div>
    </PageTransition>
  );
}

/* ─── Timeline Card ─────────────────────────── */

function TimelineCard({
  memory,
  index,
}: {
  memory: { date: string; title: string; description: string; photo: string | null };
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center mb-12 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:flex-row`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Dot on timeline */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 hidden md:block"
        style={{
          background: 'linear-gradient(135deg, #f48fb1, #ce93d8)',
          boxShadow: '0 0 12px rgba(244, 143, 177, 0.4)',
        }}
      />

      {/* Mobile dot */}
      <div
        className="absolute left-[24px] -translate-x-1/2 w-4 h-4 rounded-full z-10 md:hidden"
        style={{
          background: 'linear-gradient(135deg, #f48fb1, #ce93d8)',
          boxShadow: '0 0 12px rgba(244, 143, 177, 0.4)',
        }}
      />

      {/* Card */}
      <div
        className={`w-full md:w-[calc(50%-2rem)] ${
          isLeft ? 'md:pr-8 md:ml-0' : 'md:pl-8 md:mr-0'
        } ml-10 md:ml-0`}
      >
        <div
          className="rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid rgba(244, 143, 177, 0.15)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          }}
        >
          {/* Photo — shows only if photo is set in config */}
          {memory.photo && (
            <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
              <img src={memory.photo} alt={memory.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Date badge */}
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
            style={{
              background: 'linear-gradient(135deg, rgba(244,143,177,0.15), rgba(206,147,216,0.15))',
              color: 'var(--color-rose)',
            }}
          >
            {memory.date}
          </span>

          <h3
            className="text-xl font-semibold mb-2"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}
          >
            {memory.title}
          </h3>

          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {memory.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
