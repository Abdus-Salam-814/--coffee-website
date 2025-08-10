import { NavLink } from "react-router-dom";

import '../../src/Components/css/style.css'
import { useState } from "react";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";

const NavBar = () => {
 
  const link = <>
      <NavLink to={'/'}>Home</NavLink>
       <NavLink to={'/coffees'}>Coffee</NavLink>
       <NavLink to={'/Dashboard'}>Dashboard</NavLink>
       <NavLink to={'/about'}>About</NavLink>
  </>

    const [open, setOpen] = useState(false);

    return (
        <div className="navbar bg-base-100 mb-10 shadow-sm fixed left-0 right-0 max-w-7xl mx-auto z-50">
          
        
  <div className="navbar-start">
    <div className="dropdown">
      <div onClick={() => setOpen(!open)}   tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      {
        open === true ? <AiOutlineMenuFold/>
         :  <AiOutlineMenu/>
       }
      </div>

<div className="text-3xl"  onClick={() => setOpen(!open)} >
      {
        open === true ? <AiOutlineMenuFold/>
         :  <AiOutlineMenu/>
       }
      </div>

      
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-6">
       

        {link}
      
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
      
    {link}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default NavBar;