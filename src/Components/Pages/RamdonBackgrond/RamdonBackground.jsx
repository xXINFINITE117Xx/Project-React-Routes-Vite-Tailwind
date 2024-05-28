import { useState } from "react";

export const RandomBackground = () => {
  const [bgColor, setBgColor] = useState('white');

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor: bgColor }}>
      <h1 className="p-4 mb-8 text-5xl font-bold text-center" style={{ color: bgColor }}>
        Random Background
      </h1>
      <button 
        onClick={generateRandomColor} 
        className="p-4 text-2xl font-bold text-white transition duration-300 bg-blue-700 rounded-xl hover:bg-red-700"
      >
        Generate Random Colour
      </button>
    </div>
  );
};