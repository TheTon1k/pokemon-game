import cn from 'classnames'
import s from './style.module.css'

const Navbar = ({isOpen, setActiveInactive,bgActive=false}) => {
    let setActive = () => {
        setActiveInactive && setActiveInactive()
    }
    return (
        <nav id={s['navbar']} className={cn({
            [s.bgActive]:bgActive
        })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={cn(s.menuButton, {[s.active]: isOpen})} onClick={setActive}>
                    <span/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;