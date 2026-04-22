import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';
import { parseThaiDate, calcDuration, calcTotalDays } from '../utils/dateUtils';
import PageTransition from '../components/PageTransition';

export default function FinalePage() {
  const [duration, setDuration] = useState({ years: 0, months: 0, days: 0 });
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    // Parse Thai Buddhist calendar date
    const start = parseThaiDate(CONFIG.ANNIVERSARY_DATE);
    const now = new Date();

    setDuration(calcDuration(start, now));
    setTotalDays(calcTotalDays(start, now));

    // Confetti bursts
    const fire = (opts: confetti.Options) => {
      confetti({ ...opts, disableForReducedMotion: true });
    };

    const timer1 = setTimeout(() => {
      fire({ particleCount: 80, spread: 70, origin: { y: 0.3, x: 0.3 }, colors: ['#f48fb1', '#ce93d8', '#fce4ec', '#e91e63', '#fff'] });
    }, 300);

    const timer2 = setTimeout(() => {
      fire({ particleCount: 80, spread: 70, origin: { y: 0.3, x: 0.7 }, colors: ['#f48fb1', '#ce93d8', '#fce4ec', '#e91e63', '#fff'] });
    }, 600);

    const timer3 = setTimeout(() => {
      fire({ particleCount: 120, spread: 100, origin: { y: 0.5, x: 0.5 }, colors: ['#f48fb1', '#ce93d8', '#fce4ec', '#e91e63', '#fff'] });
    }, 1000);

    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  return (
    <PageTransition>
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #fdf6f0 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #f48fb1, transparent)' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #ce93d8, transparent)' }} />

        {/* Pulsing heart */}
        <motion.div
          className="text-7xl md:text-8xl mb-6 animate-heart-pulse"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          💕
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-rose-deep)', textShadow: '0 2px 20px rgba(233,30,99,0.15)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Happy Anniversary! 🎂
        </motion.h1>

        {/* Duration counter — years · months · days */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-lg md:text-xl mb-4" style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary)' }}>
            We've been together for
          </p>

          <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
            {/* Years */}
            <div className="text-center">
              <span
                className="text-4xl md:text-6xl font-bold block"
                style={{ fontFamily: 'var(--font-serif)', background: 'linear-gradient(135deg, #f48fb1, #ce93d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {duration.years}
              </span>
              <span className="text-sm md:text-base tracking-widest uppercase" style={{ color: 'var(--color-text-light)' }}>
                {duration.years === 1 ? 'Year' : 'Years'}
              </span>
            </div>

            <span className="text-2xl md:text-3xl" style={{ color: 'var(--color-blush-dark)' }}>·</span>

            {/* Months */}
            <div className="text-center">
              <span
                className="text-4xl md:text-6xl font-bold block"
                style={{ fontFamily: 'var(--font-serif)', background: 'linear-gradient(135deg, #f48fb1, #ce93d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {duration.months}
              </span>
              <span className="text-sm md:text-base tracking-widest uppercase" style={{ color: 'var(--color-text-light)' }}>
                {duration.months === 1 ? 'Month' : 'Months'}
              </span>
            </div>

            <span className="text-2xl md:text-3xl" style={{ color: 'var(--color-blush-dark)' }}>·</span>

            {/* Days */}
            <div className="text-center">
              <span
                className="text-4xl md:text-6xl font-bold block"
                style={{ fontFamily: 'var(--font-serif)', background: 'linear-gradient(135deg, #f48fb1, #ce93d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {duration.days}
              </span>
              <span className="text-sm md:text-base tracking-widest uppercase" style={{ color: 'var(--color-text-light)' }}>
                {duration.days === 1 ? 'Day' : 'Days'}
              </span>
            </div>
          </div>

          <p className="text-sm mt-3" style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-light)' }}>
            That's {totalDays.toLocaleString()} beautiful days together 💕
          </p>
        </motion.div>

        {/* Personal message */}
        <motion.p
          className="max-w-xl text-center text-lg md:text-xl leading-relaxed mb-8"
          style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-text-primary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {CONFIG.FINALE_MESSAGE}
        </motion.p>

        {/* Signature */}
        <motion.p
          className="text-lg mb-10"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-rose)', fontStyle: 'italic' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          {CONFIG.FINALE_SIGNATURE}
        </motion.p>

        {/* Back to home button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.6)',
              color: 'var(--color-rose)',
              border: '1px solid rgba(244,143,177,0.3)',
              textDecoration: 'none',
              backdropFilter: 'blur(8px)',
            }}
          >
            ← Back to Our Story
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
