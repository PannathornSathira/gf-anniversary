import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import PageTransition from '../components/PageTransition';
import NextChapterButton from '../components/NextChapterButton';

export default function LetterPage() {
  const { greeting, body, closing, signature } = CONFIG.LOVE_LETTER;
  const fullText = `${greeting}\n\n${body}\n\n${closing}\n${signature}`;
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 pb-8 px-4 flex flex-col items-center" style={{ background: 'var(--color-cream)' }}>
        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-semibold mb-3" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}>
            A Letter For You
          </h1>
          <p className="text-sm tracking-widest uppercase" style={{ color: 'var(--color-text-light)' }}>
            Words from my heart to yours
          </p>
        </motion.div>

        <motion.div
          className="paper-texture w-full max-w-2xl rounded-xl p-8 md:p-12 relative"
          style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)', border: '1px solid rgba(244,143,177,0.1)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Decorative top */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ background: 'linear-gradient(90deg, #f48fb1, #ce93d8, #f48fb1)' }} />

          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', lineHeight: '2', color: 'var(--color-text-primary)', whiteSpace: 'pre-wrap' }}>
            {displayed}
            {!done && <span className="inline-block w-[2px] h-5 ml-1 animate-pulse" style={{ background: 'var(--color-rose)' }} />}
          </div>

          {done && (
            <motion.div className="text-center mt-6" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <span className="text-3xl">❤️</span>
            </motion.div>
          )}
        </motion.div>

        <NextChapterButton to="/quiz" />
      </div>
    </PageTransition>
  );
}
