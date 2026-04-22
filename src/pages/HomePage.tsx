import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config';
import PageTransition from '../components/PageTransition';

export default function HomePage() {
  const letters = CONFIG.HER_NAME.split('');

  return (
    <PageTransition>
      <div
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
        style={{
          background: 'linear-gradient(135deg, #fce4ec 0%, #fdf6f0 40%, #f8bbd0 70%, #fdf6f0 100%)',
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #f48fb1, transparent)' }}
        />
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #ce93d8, transparent)' }}
        />

        {/* Her name — letter by letter */}
        <motion.div
          className="flex flex-wrap justify-center mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
          }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide"
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-rose-deep)',
                textShadow: '0 2px 20px rgba(233, 30, 99, 0.15)',
              }}
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-2xl md:text-4xl text-center mb-4 font-light"
          style={{
            fontFamily: 'var(--font-serif)',
            color: 'var(--color-text-primary)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          A year with you, <span className="font-semibold" style={{ color: 'var(--color-rose)' }}>{CONFIG.HER_NAME}</span>
        </motion.h1>

        {/* Anniversary date */}
        <motion.p
          className="text-lg md:text-xl mb-10 tracking-widest uppercase"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-text-light)',
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.8 }}
        >
          {CONFIG.ANNIVERSARY_DATE}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8, duration: 0.6, ease: 'easeOut' }}
        >
          <Link
            to="/timeline"
            className="animate-glow inline-block px-10 py-4 rounded-full text-white font-medium tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #f48fb1, #ce93d8)',
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              textDecoration: 'none',
              letterSpacing: '0.08em',
            }}
          >
            Enter Our World →
          </Link>
        </motion.div>

        {/* Small heart decoration */}
        <motion.div
          className="absolute bottom-8 animate-heart-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3.2, duration: 1 }}
        >
          <span className="text-3xl">💕</span>
        </motion.div>
      </div>
    </PageTransition>
  );
}
