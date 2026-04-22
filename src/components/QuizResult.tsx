import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import NextChapterButton from './NextChapterButton';

interface QuizResultProps {
  score: number;
  total: number;
  onPlayAgain: () => void;
}

export default function QuizResult({ score, total, onPlayAgain }: QuizResultProps) {
  const percentage = (score / total) * 100;
  
  let message = '';
  if (score === total) message = CONFIG.QUIZ_RESULT_MESSAGES.perfect;
  else if (score >= 6) message = CONFIG.QUIZ_RESULT_MESSAGES.great;
  else if (score >= 4) message = CONFIG.QUIZ_RESULT_MESSAGES.okay;
  else message = CONFIG.QUIZ_RESULT_MESSAGES.tryAgain;

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="paper-texture p-10 md:p-14 rounded-3xl max-w-xl w-full relative overflow-hidden"
        style={{ 
          boxShadow: '0 20px 50px rgba(244, 143, 177, 0.2)',
          border: '1px solid rgba(244, 143, 177, 0.2)'
        }}
      >
        <motion.div
          className="text-6xl mb-6 inline-block"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {score >= 6 ? '🏆' : '❤️'}
        </motion.div>

        <h2 
          className="text-4xl md:text-5xl font-semibold mb-2"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}
        >
          You got {score} out of {total}! 💕
        </h2>
        
        <p className="text-sm uppercase tracking-[0.2em] mb-8" style={{ color: 'var(--color-text-light)' }}>
          That's {Math.round(percentage)}% of our story
        </p>
        
        <p 
          className="text-xl md:text-2xl mb-12 italic"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-secondary)' }}
        >
          "{message}"
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={onPlayAgain}
            className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <span>Play Again 🔄</span>
          </button>
          
          <NextChapterButton to="/finale" label="Final Chapter →" />
        </div>

        {/* Floating background emojis */}
        <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center select-none overflow-hidden">
           <div className="text-9xl">✨💖🌸</div>
        </div>
      </div>
    </motion.div>
  );
}
