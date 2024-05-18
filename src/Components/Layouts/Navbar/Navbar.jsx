import { ItemNavbar } from "../../ItemNavbar/ItemNavbar";

export const Navbar = () => {
  return (
    <nav className="flex w-3/4 h-full">
      <ul className="flex items-center justify-center w-full">
        <ItemNavbar route="/" content="Inicio" />
        <ItemNavbar route="/aboutme" content="Acerca de Mi" />
        <ItemNavbar route="/portfolio" content="Mi Portafolio" />
        <ItemNavbar route="contactme" content="Contáctame" />
        <ItemNavbar route="*" content="fakes Routes" />
      </ul>
    </nav>
  );
};
