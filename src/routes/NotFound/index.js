import s from './style.module.css'
import {useHistory} from "react-router-dom";

const NotFound = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }

    return (
        <div className={s.notFound}>
            <p>404</p>
            <p>PAGE NOT FOUND</p>
            <p>Sorry! The page you're looking for is not here</p>
            <button onClick={handleClick}>
                Home Page
            </button>
        </div>
    )
}

export default NotFound;