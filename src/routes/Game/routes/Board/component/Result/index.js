import {useState, useEffect} from 'react';
import s from './style.module.css';
import YouWin from './assets/you-win.png';
import YouLose from './assets/you-lose.png';
import Draw from './assets/draw.png';

const Result = ({ type,changeLocation }) => {
   const [url, setUrl] = useState(null);

   useEffect(() => {
       switch (type) {
           case 'p1':
               setUrl(YouWin);
               break;
           case 'p2':
               setUrl(YouLose);
               break;
           case 'draw':
               setUrl(Draw);
               break;
           default:
               setUrl(YouWin);
       }
   }, [type]);

    return (
        <div className={s.result} onClick={()=>{changeLocation()}}>
            <img src={url} alt="result" />
        </div>
    );
};

export default Result;
