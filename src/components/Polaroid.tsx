import { useRef } from 'react';

interface PolaroidProps {
  src: string | null;
  caption: string;
  rotation: number;
  onUpload: (url: string) => void;
  onCaptionChange: (caption: string) => void;
  onClick?: () => void;
}

export default function Polaroid({
  src,
  caption,
  rotation,
  onUpload,
  onCaptionChange,
  onClick,
}: PolaroidProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  };

  const handleClick = () => {
    if (src && onClick) {
      onClick();
    } else {
      inputRef.current?.click();
    }
  };

  return (
    <div
      className="polaroid"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div
        className="aspect-square w-full overflow-hidden cursor-pointer flex items-center justify-center"
        style={{ background: src ? 'transparent' : '#fce4ec' }}
        onClick={handleClick}
      >
        {src ? (
          <img
            src={src}
            alt={caption || 'Photo'}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl text-rose opacity-60">+</span>
        )}
      </div>

      <input
        type="text"
        value={caption}
        onChange={(e) => onCaptionChange(e.target.value)}
        placeholder="Write a caption..."
        className="w-full mt-2 text-center text-sm border-none outline-none bg-transparent"
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          color: 'var(--color-text-secondary)',
        }}
      />
    </div>
  );
}
