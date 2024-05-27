import { NavBar } from "../Layouts/Navbar/Navbar"
import { ItemNavBar } from "../../UI/ItemNavbar/ItemNavbar"


export const Header = () => {
  let styleItem = 'text-lg' 
  let styleButton = 'bg-blue-300 p-2 hover:text-white rounded font-bold hover:bg-teal-500'
  return (
    <header className='flex flex-wrap items-center justify-center w-full h-24 bg-blue-900'>
        <div className='m-4 text-2xl font-bold text-center text-white w-180 h8 hover:text-teal-200'><a href="/">Practicando Hooks</a></div>
        <NavBar style_n='container mx-auto flex items-center justify-between space-x-5'>
            <ItemNavBar style_i={styleItem} style_b={styleButton} links_a={"/"} content={"Inicio"}/>
            <ItemNavBar style_i={styleItem} style_b={styleButton} links_a={"/calc"} content={"UseState - Calculator"}/>
            <ItemNavBar style_i={styleItem} style_b={styleButton} links_a={"/randombg"} content={"UseState - Random Background"}/>
            <ItemNavBar style_i={styleItem} style_b={styleButton} links_a={"/register"} content={"UseState - Register"}/>
            <ItemNavBar style_i={styleItem} style_b={styleButton} links_a={"/manager"} content={"UseState - Task List"}/>
        </NavBar>
    </header>
  )
}