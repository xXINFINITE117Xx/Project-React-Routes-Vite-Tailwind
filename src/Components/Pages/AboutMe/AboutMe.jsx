import React from "react";
import aboutme from "../../../assets/Images/AboutMe.png";

export const AboutMe = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="mt-4 text-4xl text-sky-600">I'm AboutMe</h2>
      <img src={aboutme} alt="About Me" />
    </div>
  );
};
