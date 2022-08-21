// style
import './index.css'

// dependencies
import { useState } from 'react'

// images
import logo from './logo.png'
import icon from './icon.png'
import menu from './menu.png'
import menuclose from './menuclose.png'

export default function NavBar() {

    const [sMenu, setsMenu] = useState(0);
    const cMenu = () => setsMenu(sMenu => !sMenu);
    
    return (
        <header>
            <img src={logo} alt="Dystovia Logo" width="48px" height="48px" />

            <div className="menu-desktop">
                <ul className="links">
                    <li className="link-item"><a href="/">Wiki</a></li>
                    <li className="link-item"><a href="/">Termos</a></li>
                    <li className="link-item"><a href="/">Comandos</a></li>
                </ul>

            </div> 
            <div className="icons">
                <img src={icon} alt="Moon Logo" width="34px"/>
            </div> 

            <div className="menu-mobile">
                <img src={sMenu ? menuclose : menu} alt="Menu Icon" onClick={cMenu}  width="32px" />

                <ul className={sMenu ? "open" : ""}>
                    <li className="link-item"><a href="/">Wiki</a></li>
                    <li className="link-item"><a href="/">Termos</a></li>
                    <li className="link-item"><a href="/">Comandos</a></li>
                    <li className="link-item"><img src={icon} alt="Moon Logo" width="30px"/></li>
                </ul>
            </div>
        </header>
    )
}