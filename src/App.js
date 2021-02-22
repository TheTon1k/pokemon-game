import {Route, Switch, useLocation, Redirect} from "react-router-dom";

import HomePage from "./routes/HomePage";
import MenuNavbar from "./components/MenuNavbar";
import Footer from "./components/Footer";


import cn from "classnames"
import s from "./style.module.css"
import NotFound from "./routes/NotFound";
import GamePage from "./routes/Game";
import {FirebaseContext} from "./service/FirebaseContext";
import Firebase from "./service/firebase";


const App = () => {
    const location = useLocation()
    const isPadding =location.pathname ==='/' || location.pathname === '/game/board'

    return (
        <FirebaseContext.Provider value ={new Firebase()}>
        <Switch>
            <Route path='/404' component={NotFound}/>

            <Route>
                <>
                    <MenuNavbar bgActive={!isPadding}/>
                    <div className={cn(s.wrap, {[s.isHome]: isPadding})}>
                        <Switch>
                            <Route exact path='/' render={() => (
                                <HomePage />
                            )}/>
                            <Route path='/game' render={()=>(
                                <GamePage />
                            )}/>
                            <Route path='/about' render={() => (
                                <h1>This is page About</h1>
                            )}/>
                            <Route render={() => (
                                <Redirect to='/404'/>
                            )}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
        </Switch>
        </FirebaseContext.Provider>
    )
}
export default App;