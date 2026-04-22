import { Link, useLocation } from 'react-router-dom';

const CHAPTERS = [
  { path: '/', label: 'Home' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/map', label: 'Our Map' },
  { path: '/love', label: 'Love Notes' },
  { path: '/album', label: 'Album' },
  { path: '/letter', label: 'Letter' },
  { path: '/finale', label: 'Finale' },
];

export default function NavDots() {
  const location = useLocation();

  // Hide on home page
  if (location.pathname === '/') return null;

  return (
    <nav
      id="nav-dots"
      className="fixed top-0 left-0 right-0 z-[90] flex items-center justify-center gap-3 py-3 px-4 backdrop-blur-md"
      style={{
        background: 'rgba(253, 246, 240, 0.8)',
        borderBottom: '1px solid rgba(244, 143, 177, 0.15)',
      }}
    >
      {CHAPTERS.map((ch) => {
        const isActive = location.pathname === ch.path;
        return (
          <Link
            key={ch.path}
            to={ch.path}
            className="group relative flex items-center justify-center"
            aria-label={ch.label}
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? '12px' : '8px',
                height: isActive ? '12px' : '8px',
                background: isActive
                  ? 'linear-gradient(135deg, #f48fb1, #ce93d8)'
                  : 'transparent',
                border: isActive ? 'none' : '2px solid #f48fb1',
                boxShadow: isActive ? '0 0 12px rgba(244, 143, 177, 0.4)' : 'none',
              }}
            />
            {/* Tooltip */}
            <span
              className="absolute top-full mt-2 px-2 py-1 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
              style={{
                background: 'rgba(74, 51, 51, 0.85)',
                color: '#fdf6f0',
              }}
            >
              {ch.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
