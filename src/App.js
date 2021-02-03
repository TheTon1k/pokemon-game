import {Route, Switch, useRouteMatch, Redirect} from "react-router-dom"

import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import MenuNavbar from "./components/MenuNavbar";
import Footer from "./components/Footer";

import cn from "classnames"
import s from "./style.module.css"
import NotFound from "./routes/NotFound";


const App = () => {
    const isHomeUrl = useRouteMatch('/')

    return (
        <Switch>
            <Route path='/404' component={NotFound}/>

            <Route>
                <>
                    <MenuNavbar bgActive={!isHomeUrl.isExact}/>
                    <div className={cn(s.wrap, {[s.isHome]: isHomeUrl.isExact})}>
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
    )
}
export default App;