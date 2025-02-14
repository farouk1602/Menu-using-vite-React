import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import { SidebarData } from "./SidebarData";

import "./Navbar.css";

import { IconContext } from "react-icons";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <IconContext.Provider value={{ color: "black" }}>

      <div className="navbar">
        <Link to="#" className="menu-bars" onClick={showSidebar}>
          <FaAlignJustify  />
        </Link>
      </div>


      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" onClick={showSidebar}>
              <MdClose  />
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      </IconContext.Provider>
    </>
  );
}
