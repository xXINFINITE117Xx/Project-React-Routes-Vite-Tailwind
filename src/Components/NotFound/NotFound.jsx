import React from "react";
import notFound from "../../assets/Images/Error-404.png";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="mt-4 text-4xl text-sky-600">I'm Contact Me</h2>
      <img src={notFound} alt="Page Not Found" />
    </div>
  );
};
