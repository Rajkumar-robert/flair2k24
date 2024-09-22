// components/Carousel.js
import Card from './Card';

export default function Carousel({ cards, currentIndex }) {
  return (
    <div className="relative flex justify-center items-center w-2/3">
      {/* Card Carousel */}
      <div
        className="relative w-full h-[900px] flex justify-center items-center"
        style={{ perspective: '1000px' }} // Apply perspective for 3D effect
      >
        {cards.map((card, index) => {
          const isActive = index === currentIndex;
          const position =
            (index - currentIndex + cards.length) % cards.length; // Circular positioning

          // Position adjustments
          const translateX = isActive ? 0 : position === 1 ? '200px' : '-200px'; // Move side cards left or right
          const rotateY = isActive ? 0 : position === 1 ? 45 : -45; // Rotate outward
          const zIndex = isActive ? 10 : 5; // Ensure active card is on top
          
          // Use visibility instead of opacity to hide non-active cards without transparency leaks
          const visibility = isActive || position === 1 || position === cards.length - 1 ? 'visible' : 'hidden';

          return (
            <div
              key={index}
              className="absolute transition-transform duration-5000 ease-in-out"
              style={{
                transform: `translateX(${translateX}) rotateY(${rotateY}deg)`,
                zIndex: zIndex,
                visibility: visibility, // Control whether the card is visible or not
                backfaceVisibility: 'hidden', // Ensure nothing "leaks" from behind
                overflow: 'hidden', // Prevent overflow text/content
              }}
            >
              <Card {...card} isActive={isActive} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
