import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
            <div className="header_logo">
                <div class="header_logo_img">
                    <img src="./image/icon-park-outline_paper-ship.svg" alt="" />
                </div>
                <div className="header_logo_span">
                    <span>Islamchik</span>
                </div>
            </div>
            <div className="burger_menu" onclick="toggleMenu()">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="header_nav">
                <Link to={"/home"}>Home</Link>
                <Link to={"/about"}>About Me</Link>
                <Link to={"/skills"}>Skill</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
