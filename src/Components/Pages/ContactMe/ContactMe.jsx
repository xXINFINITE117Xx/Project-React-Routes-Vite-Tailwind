import React from "react";
import contactMe from "../../../assets/Images/ContactMe.png";

export const ContactMe = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="mt-4 text-4xl text-sky-600">I'm Contact Me</h2>
      <img src={contactMe} alt="contact me" />
    </div>
  );
};
