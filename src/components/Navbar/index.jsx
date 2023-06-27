import { GearSix, House, User, Wrench } from "phosphor-react";
import './style.scss'
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar-container">
      <div>
        <b>Royaume</b>
      </div>
      <div className="paths">
        <NavLink className="icon" to="/">
         <House className="icon-image" size={24} />
        </NavLink>
        <NavLink className="icon"  to="/s">
        <User className="icon-image" size={24} />
        </NavLink>
        <NavLink className="icon"  to="/d">
        <GearSix className="icon-image" size={24} />
        </NavLink>
        <NavLink className="icon" to="/management">
          <Wrench className="icon-image" size={24} />
        </NavLink>
      </div>  
    </div>
  )
}