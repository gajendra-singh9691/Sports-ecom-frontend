import  { useEffect, useState } from 'react';

const slides = [
  'https://wallpaperaccess.com/full/3818798.jpg',
  'https://wallpaperbat.com/img/278673-messi-4k-wallpaper.jpg',
  'https://wallpapers.com/images/hd/4k-football-paulo-dybala-nw1d2fzoyn9l2uyo.jpg',
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prevCurr) => (prevCurr + 1) % slides.length);
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 700); // Match duration with CSS transition
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-120 overflow-hidden max-w-8xl">
      {prev !== null && isTransitioning && (
        <img
          src={slides[prev]}
          alt={`Slide ${prev + 1}`}
          className="absolute inset-0 w-full h-full object-cover z-10"
          style={{
            transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out',
            transform: `translateX(-100%)`,
            opacity: 0,
          }}
        />
      )}
      <img
        src={slides[current]}
        alt={`Slide ${current + 1}`}
        className="absolute inset-0 w-full h-full object-cover z-20"
        style={{
          transition: isTransitioning ? 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out' : '',
          transform: isTransitioning ? 'translateX(0%)' : '',
          opacity: 1,
        }}
      />
    </div>
  );
}
