import { useState } from "react"

import Logo from "../assets/images/home-page/Group 193.png"
import Search from "../assets/images/home-page/search.png"
import Star from "../assets/images/home-page/star.png"

import "./Nav.css"
function Nav() {
    const [dark, setDark] = useState("light") 
    const [drk, setDrk] = useState(false) 
    console.log(dark);

    function setDarkFunc(e) {
        setDark("dark")
    }
    return(
        <nav className={`nav ${dark}`}>
            <div className="nav-logo">
                <img src={Logo} alt="logo" className="nav-logo__img" />
            </div>
            <div className="nav-search">
                <img src={Search} alt="search" className="nav-search__img" />
                <label htmlFor="nav-search__input">
                    <input type="text" name="search" id="nav-search__input" className="nav-search__input" />
                </label>
            </div>
            <div className="nav-logout">
                <img onClick={() => setDarkFunc()} src={Star} alt="star" className="nav-logout__img" />
                <button type="submit" className="nav-logout__btn">LOGOUT</button>
            </div>
        </nav>
)
}

export default Nav