import React from "react";
import { NavLink } from "react-router-dom";

export const ItemNavbar = ({ route, content }) => (
  <li className="ml-2">
    <NavLink className="w-40 p-2 text-sm text-white bg-blue-800 shadow-2xl hover:bg-sky-400" to={route}>
      {content}
    </NavLink>
  </li>
);
