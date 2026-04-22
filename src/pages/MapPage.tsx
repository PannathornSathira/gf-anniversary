import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import PageTransition from '../components/PageTransition';
import NextChapterButton from '../components/NextChapterButton';

// Custom pink marker icon
const pinkIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="#f48fb1"/>
      <circle cx="12" cy="12" r="5" fill="white" opacity="0.9"/>
    </svg>
  `),
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -36],
});

export default function MapPage() {
  const pins = CONFIG.MAP_PINS;

  // Center map on first pin
  const center: [number, number] = pins.length
    ? [pins[0].lat, pins[0].lng]
    : [13.7563, 100.5018];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 pb-8 px-4" style={{ background: 'var(--color-cream)' }}>
        {/* Page title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-4xl md:text-5xl font-semibold mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}
          >
            Our Map
          </h1>
          <p className="text-sm tracking-widest uppercase" style={{ color: 'var(--color-text-light)' }}>
            Places written in our hearts
          </p>
        </motion.div>

        {/* Map container */}
        <motion.div
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            border: '2px solid rgba(244, 143, 177, 0.15)',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MapContainer
            center={center}
            zoom={6}
            style={{ height: '550px', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {pins.map((pin, i) => (
              <Marker key={i} position={[pin.lat, pin.lng]} icon={pinkIcon}>
                <Popup>
                  <div className="text-center p-1" style={{ minWidth: '240px' }}>
                    {'photo' in pin && pin.photo && (
                      <img
                        src={pin.photo as string}
                        alt={pin.title}
                        className="w-full h-48 object-cover rounded-lg mb-2"
                      />
                    )}
                    <span className="text-2xl block mb-1">{pin.emoji}</span>
                    <strong
                      className="text-base block mb-1"
                      style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}
                    >
                      {pin.title}
                    </strong>
                    <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                      {pin.note}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        <NextChapterButton to="/love" />
      </div>
    </PageTransition>
  );
}
