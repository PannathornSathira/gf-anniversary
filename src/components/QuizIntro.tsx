import { motion } from 'framer-motion';

interface QuizIntroProps {
  onStart: () => void;
}

export default function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="paper-texture p-8 md:p-12 rounded-3xl max-w-lg w-full relative overflow-hidden"
        style={{ 
          boxShadow: '0 20px 50px rgba(244, 143, 177, 0.15)',
          border: '1px solid rgba(244, 143, 177, 0.2)'
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose to-mauve" />
        
        <h2 
          className="text-4xl md:text-5xl font-semibold mb-6"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}
        >
          How well do you know us? 💌
        </h2>
        
        <p 
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary)' }}
        >
          Answer these questions about our story... <br />
          Let's see how much you remember! 💕
        </p>
        
        <motion.button
          onClick={onStart}
          className="animate-glow px-10 py-4 rounded-full text-white font-medium text-lg transition-all duration-300"
          style={{ 
            background: 'linear-gradient(135deg, var(--color-rose), var(--color-mauve))',
            boxShadow: '0 10px 25px rgba(244, 143, 177, 0.3)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Quiz 💕
        </motion.button>
      </div>
    </motion.div>
  );
}
