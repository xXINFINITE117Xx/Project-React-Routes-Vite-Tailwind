import React from "react";
import Saludo from "./Saludo";

export const Home = () => {
  return (
    <div className="">
      <h1 className="m-2 text-5xl font-bold text-center text-blue-700">
        Inicio
      </h1>
      <div className="flex flex-col items-center justify-center p-8 m-4 w-120 h-240 bg-gradient-to-b from-violet-700 via-sky-600 to-red-700 rounded-xl">
        <Saludo />
      </div>
    </div>
  );
};
