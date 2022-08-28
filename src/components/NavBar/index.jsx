// style
import './index.css'

// dependencies
import { Link } from 'react-router-dom'
import { useState } from 'react'

// images
import logo from './logo.png'
import icon from './theme-icon.svg'
import menu from './menu.png'
import menuclose from './menuclose.png'

export default function NavBar() {

    const [sMenu, setsMenu] = useState(0)
    const cMenu = () => setsMenu(sMenu => !sMenu)

    const [sTheme, setsTheme] = useState(0)
    const cTheme = () => setsTheme(sTheme => !sTheme)

    return (
        <header>
            <img src={logo} alt="Dystovia Logo" width="48px" height="48px" />

            <div className="menu-desktop">
                <ul className="links">
                    <li className="link-item">
                        <Link className="link-item" to="/DystoviaRPG">Wiki</Link>
                    </li>
                    <li className="link-item">
                        <Link className="link-item" to="/DystoviaRPG">Termos</Link>
                    </li>
                    <li className="link-item">
                        <Link className="link-item" to="/DystoviaRPG">Comandos</Link>
                    </li>
                </ul>

            </div> 
            <div className="icons">
                <img src={icon} alt="Theme Icon" width="40px" onClick={cTheme}/>
            </div> 

            <div className="menu-mobile">
                <img src={sMenu ? menuclose : menu} alt="Menu Icon" onClick={cMenu}  width="38px" />

                <ul className={sMenu ? "open" : ""}>
                <li className="link-item">
                        <Link className="link-item" to="/DystoviaRPG">Wiki</Link>
                    </li>
                    <li className="link-item">
                        <Link className="link-item" to="/DystoviaRPG">Termos</Link>
                    </li>
                    <li className="link-item">
                        <Link className="link-item" to="/DystoviaRPG">Comandos</Link>
                    </li>
                    <li className="link-item"><img src={icon} alt="Theme icon" width="30px"/></li>
                </ul>
            </div>
        </header>
    )
}