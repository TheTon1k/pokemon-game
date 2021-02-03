import cn from 'classnames'
import s from './style.module.css'

const Navbar = ({isActive, setActiveInactive}) => {
    let setActive = () => {
        setActiveInactive && setActiveInactive()
    }
    return (
        <nav id={s['navbar']} className={s.bgActive}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: isActive})} onClick={setActive}>
                    <span/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;