import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8">
        <img src="src/assets/burger.avif" alt="burger and fries on wooden platter" className="w-full h-auto" />
      </div>
      <div className="flex justify-center gap-4">
        <div className="menu group">
          <img src="src/assets/egg breakfast.webp" alt="breakfast platter" className="w-full h-auto transition-all duration-500 group-hover:brightness-75" />
          <h1 className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded text-lg group-hover:opacity-100 transition-opacity duration-500">BREAKFAST</h1>
        </div>
        <div className="menu group">
          <img src="src/assets/dinnerTB.jpeg" alt="chicken wrap" className="w-full h-auto transition-all duration-500 group-hover:brightness-75" />
          <h1 className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded text-lg group-hover:opacity-100 transition-opacity duration-500">LUNCH</h1>
        </div>
        <div className="menu group">
          <img src="src/assets/lunchTB.jpeg" alt="chili burger and fries" className="w-full h-auto transition-all duration-500 group-hover:brightness-75" />
          <h1 className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-1 rounded text-lg group-hover:opacity-100 transition-opacity duration-500">DINNER</h1>
        </div>
      </div>
    </div>
  );
}
