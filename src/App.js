import {useState} from 'react'
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";


const App = () => {
    let [page,setPage] = useState('app')
    const handleChangePage =(selectPage) => {
        console.log ('<App/')
        setPage(selectPage)
        console.log(page)
    }
    switch (page){
        case 'app':
            return <HomePage onPageChange ={handleChangePage}/>
        case 'game':
            return <GamePage onpageChange={handleChangePage}/>
        default:
            return <GamePage/>
    }
}

export default App;