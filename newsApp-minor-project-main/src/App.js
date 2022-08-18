import React, { useState } from "react";
import "./index.css";
import News from "./news";
import Nav from "./pages/nav";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import MainPage from "./pages/MainPage";
import Weather from "./pages/Weather";
// import Live from "./pages/Live/Live";
// import Corona from "./pages/Corona/Corona";
import Youtube from "./pages/Youtube/components/Youtube";
import Jobs from "./pages/Jobs/Jobs.js"
import './App.css'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { UserContext } from "./context/UserContext";

//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import firebaseConfig from "./config/firebaseConfig.js";
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
    const [user, setUser] = useState(null);


    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <Switch>
                <Route exact path="/main" component={MainPage} />
                    <Route path="/Weather" component={Weather} />
                    {/* <Route path="/Live" component={Live} /> */}
                    <Route exact path="/" component={Signin} />
                    <Route path="/home" component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/Jobs" component={Jobs} />
                    {/* <Route path="/Live" component={Live} /> */}
                    <Route path="/Youtube" component={Youtube} />
                    <Route path="/Apple"><News newsName="iphone" /></Route>
                    <Route path="/Tesla"><News newsName="tesla" /></Route>
                    <Route path="/Bitcoin"><News newsName="bitcoin" /></Route>
                    <Route path="/nasa"><News newsName="nasa" /></Route>
                    <Route path="/upsc"><News newsName="upsc" /></Route>
                    <Route path="/technology"><News newsName="technology" /></Route>
                    <Route path="/hollywood"><News newsName="hollywood" /></Route>
                    <Route path="/ott"><News newsName="ott" /></Route>
                    <Route path="/android"><News newsName="android" /></Route>
                    <Route path="/movies"><News newsName="movies" /></Route>
                    <Route path="/cars"><News newsName="cars" /></Route>
                    <Route path="/bikes"><News newsName="bike" /></Route>
                    
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default App