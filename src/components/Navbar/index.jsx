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
         <House className="icon-image" size={32} />
        </NavLink>
        <NavLink className="icon">
        <User className="icon-image" size={32} />
        </NavLink>
        <NavLink className="icon">
        <GearSix className="icon-image" size={32} />
        </NavLink>
        <NavLink className="icon" to="/management">
          <Wrench className="icon-image" size={32} />
        </NavLink>
      </div>  
    </div>
  )
}