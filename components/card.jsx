// components/Card.js
export default function Card({ title, img, description, isActive }) {
  return (
    <div
      className={`relative w-[300px] h-[600px] rounded-lg shadow-lg transition-transform duration-500 ${
        isActive ? 'opacity-100 scale-115' : 'opacity-50 scale-75'
      }`}
      style={{
        pointerEvents: isActive ? 'auto' : 'none', // Only the active card is clickable
        transformStyle: 'preserve-3d', // Ensure 3D effect is preserved
        backfaceVisibility: 'hidden', // Hide the back of the card to prevent leakage
        overflow: 'hidden', // Ensures no content spills out
      }}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
