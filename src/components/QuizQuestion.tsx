import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type QuizQuestion as QuizQuestionType } from '../config';

interface QuizQuestionProps {
  question: QuizQuestionType;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
}

export default function QuizQuestion({ question, index, total, onAnswer }: QuizQuestionProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedIdx(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (idx: number) => {
    if (isAnswered) return;
    
    setSelectedIdx(idx);
    setIsAnswered(true);
    
    const isCorrect = idx === question.correctIndex;
    
    // Delay advancing to next question
    setTimeout(() => {
      onAnswer(isCorrect);
    }, isCorrect ? 1200 : 1500);
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium" style={{ color: 'var(--color-text-light)' }}>
            Question {index + 1} of {total}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-rose)' }}>
            {Math.round(((index + 1) / total) * 100)}%
          </span>
        </div>
        <div className="quiz-progress-bar">
          <div 
            className="quiz-progress-fill" 
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="paper-texture p-8 rounded-3xl mb-8 relative overflow-hidden" style={{ border: '1px solid rgba(244, 143, 177, 0.1)' }}>
        <h3 
          className="text-2xl md:text-3xl font-semibold text-center mb-0"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}
        >
          {question.question}
        </h3>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option, idx) => {
          const isCorrect = idx === question.correctIndex;
          const isSelected = selectedIdx === idx;
          
          let statusClass = '';
          if (isAnswered) {
            if (isCorrect) statusClass = 'quiz-option--correct quiz-option--answered';
            else if (isSelected) statusClass = 'quiz-option--wrong quiz-option--answered';
            else statusClass = 'quiz-option--answered';
          }

          return (
            <motion.button
              key={idx}
              className={`quiz-option ${statusClass}`}
              onClick={() => handleOptionClick(idx)}
              whileHover={!isAnswered ? { scale: 1.02 } : {}}
              whileTap={!isAnswered ? { scale: 0.98 } : {}}
            >
              <span className="text-lg font-medium">{option}</span>
              {isAnswered && isCorrect && <span className="ml-2">✓</span>}
              {isAnswered && isSelected && !isCorrect && <span className="ml-2">✗</span>}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback Message */}
      <div className="h-24 mt-8 flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p 
                className="text-xl font-medium mb-2"
                style={{ color: selectedIdx === question.correctIndex ? '#4caf50' : '#f44336' }}
              >
                {selectedIdx === question.correctIndex ? "That's right! 🌸" : "Oops! Almost 😄"}
              </p>
              {question.hint && (
                <p className="text-sm italic" style={{ color: 'var(--color-text-light)' }}>
                  {question.hint}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
