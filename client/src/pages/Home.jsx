import React from "react";
import SearchBar from "../components/SearchBar"; // Assuming SearchBar component defined elsewhere

export default function Home() {
  return (
    <div className="relative mt-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Let Your Adventure Begin Here.</h1>
        <h3 className="text-2xl font-bold mt-10">
          Book your family vacation in our scenic Eastern Sierra resort.
        </h3>
      </div>
      <div className="relative flex flex-col items-center mt-20">
        <div className="absolute top-0 w-full flex justify-center z-10">
          <div className="w-3/4">
            <SearchBar />
          </div>
        </div>
        <img
          className="w-5/6 rounded-lg object-cover object-center h-96 mt-12"
          src="src/assets/MonoVillageLake.webp"
          alt="Kids in Rafts On Lake"
        />
      </div>
      <div>
        <img className="w-1/3 rounded-lg flex justify-center" src="src/assets/monoBoats.jpeg" alt="Long line of boats on a dock" />
      </div>
    </div>
  );
}
