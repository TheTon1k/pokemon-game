import cn from 'classnames'
import s from './style.module.css'
import {Link} from "react-router-dom";

const Menu = ({isOpen,setActiveInactive}) => {
    const handleClick = ()=>{
        setActiveInactive()
    }
    const MENU = [{
        title: 'HOME',
        to: '/'
    },
        {
            title: 'GAME',
            to: '/game'
        },
        {
            title: 'ABOUT',
            to: '/about'
        },
        {
            title: 'CONTACT',
            to: '/contact'
        }
    ]

    return (
        <div
            className={cn(s.menuContainer, {[s.active]: isOpen===true}, {[s.deactive]: isOpen===false})}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    {MENU.map(({title, to}, index) => (
                        <li key={index} onClick={handleClick}>
                            <Link to={to}>
                                {title}
                            </Link>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;