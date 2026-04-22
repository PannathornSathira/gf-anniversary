import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';
import PageTransition from '../components/PageTransition';
import NextChapterButton from '../components/NextChapterButton';

export default function AlbumPage() {
  const photos = CONFIG.ALBUM_PHOTOS;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;

  const navigateLightbox = (dir: number) => {
    if (lightboxIndex === null || photos.length <= 1) return;
    setLightboxIndex((lightboxIndex + dir + photos.length) % photos.length);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 pb-8 px-4" style={{ background: 'var(--color-cream)' }}>
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-semibold mb-3" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}>
            Photo Album
          </h1>
          <p className="text-sm tracking-widest uppercase" style={{ color: 'var(--color-text-light)' }}>
            Our precious moments, frozen in time
          </p>
        </motion.div>

        {photos.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-5xl mb-4 block">📷</span>
            <p className="text-lg" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
              Add photos in src/config.ts → ALBUM_PHOTOS
            </p>
          </motion.div>
        ) : (
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="polaroid cursor-pointer"
                  style={{ transform: `rotate(${photo.rotation}deg)` }}
                  onClick={() => setLightboxIndex(i)}
                >
                  <div className="aspect-square w-full overflow-hidden">
                    <img src={photo.src} alt={photo.caption || 'Photo'} className="w-full h-full object-cover" />
                  </div>
                  {photo.caption && (
                    <p
                      className="mt-2 text-center text-sm"
                      style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-text-secondary)' }}
                    >
                      {photo.caption}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxPhoto && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
            >
              <motion.div
                className="relative max-w-3xl max-h-[85vh] mx-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={lightboxPhoto.src} alt={lightboxPhoto.caption} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
                {lightboxPhoto.caption && (
                  <p className="text-center text-white/80 mt-3 text-sm" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                    {lightboxPhoto.caption}
                  </p>
                )}

                {/* Nav arrows */}
                {photos.length > 1 && (
                  <>
                    <button onClick={() => navigateLightbox(-1)} className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl cursor-pointer">←</button>
                    <button onClick={() => navigateLightbox(1)} className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl cursor-pointer">→</button>
                  </>
                )}

                <button onClick={() => setLightboxIndex(null)} className="absolute top-[-40px] right-0 text-white/70 hover:text-white text-xl cursor-pointer">✕</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <NextChapterButton to="/letter" />
      </div>
    </PageTransition>
  );
}
