import Menu from "./Menu";
import Navbar from "./Navbar";
import {useState} from "react";

const MenuNavbar = ({bgActive}) => {
    let [isOpen, setOpen] = useState(null)

    let handleClick = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <div>
            <Menu isOpen={isOpen} setActiveInactive={handleClick} />
            <Navbar isOpen={isOpen} bgActive ={bgActive} setActiveInactive={handleClick}/>
        </div>
    )
}

export default MenuNavbar;