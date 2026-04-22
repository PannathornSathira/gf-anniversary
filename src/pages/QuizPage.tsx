import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';
import PageTransition from '../components/PageTransition';
import QuizIntro from '../components/QuizIntro';
import QuizQuestion from '../components/QuizQuestion';
import QuizResult from '../components/QuizResult';

type Phase = 'intro' | 'quiz' | 'result';

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setPhase('quiz');
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(prev => prev + 1);

    if (currentQuestionIdx < CONFIG.QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setPhase('result');
    }
  };

  const handlePlayAgain = () => {
    setPhase('intro');
    setCurrentQuestionIdx(0);
    setScore(0);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 pb-8 px-4 flex flex-col items-center overflow-hidden" style={{ background: 'var(--color-cream)' }}>
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <QuizIntro key="intro" onStart={handleStart} />
          )}

          {phase === 'quiz' && (
            <QuizQuestion 
              key="question"
              question={CONFIG.QUIZ_QUESTIONS[currentQuestionIdx]}
              index={currentQuestionIdx}
              total={CONFIG.QUIZ_QUESTIONS.length}
              onAnswer={handleAnswer}
            />
          )}

          {phase === 'result' && (
            <QuizResult 
              key="result"
              score={score} 
              total={CONFIG.QUIZ_QUESTIONS.length} 
              onPlayAgain={handlePlayAgain}
            />
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
