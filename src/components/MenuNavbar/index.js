import Menu from "./Menu";
import Navbar from "./Navbar";
import {useState} from "react";

const MenuNavbar = () => {
    let [isActive, setActive] = useState(false)
    let [isMenuClicked, setMenuClicked] = useState(false)
    console.log(isMenuClicked)


    let handleClick = () => {
        setActive(!isActive)
         !isMenuClicked && setMenuClicked(true)
    }
    return (
        <div>
            {isMenuClicked && <Menu isActive={isActive}/>} {/*чтобы при открытии страницы не прогружалось меню*/}
            <Navbar isActive={isActive} setActiveInactive={handleClick}/>
        </div>
    )
}

export default MenuNavbar;