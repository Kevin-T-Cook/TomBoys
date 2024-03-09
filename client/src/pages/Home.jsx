import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-44">
      <div className="w-screen overflow-hidden">
        <img src="src/assets/burger.avif" alt="burger and fries on wooden platter" className="w-full h-auto max-h-[75vh] object-cover" />
      </div>
      <div className="flex justify-center gap-4 mt-8 px-8 w-full h-64"> 
        <div className="menu group w-1/3 h-full"> 
          <img src="src/assets/egg breakfast.webp" alt="breakfast platter" className="h-full w-full object-cover transition-all duration-500 group-hover:brightness-75" />
        </div>
        <div className="menu group w-1/3 h-full">
          <img src="src/assets/dinnerTB.jpeg" alt="chicken wrap" className="h-full w-full object-cover transition-all duration-500 group-hover:brightness-75" />
        </div>
        <div className="menu group w-1/3 h-full">
          <img src="src/assets/lunchTB.jpeg" alt="chili burger and fries" className="h-full w-full object-cover transition-all duration-500 group-hover:brightness-75" />
        </div>
      </div>
    </div>
  )
}
