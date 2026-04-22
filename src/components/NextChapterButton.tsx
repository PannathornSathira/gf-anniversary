import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NextChapterButtonProps {
  to: string;
  label?: string;
}

export default function NextChapterButton({
  to,
  label = 'Next Chapter →',
}: NextChapterButtonProps) {
  return (
    <motion.div
      className="flex justify-center py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Link
        to={to}
        className="animate-glow inline-block px-8 py-3 rounded-full text-white font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #f48fb1, #ce93d8)',
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          textDecoration: 'none',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </Link>
    </motion.div>
  );
}
