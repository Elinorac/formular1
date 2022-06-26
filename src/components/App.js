import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import DriversList from "./DriversList";
import ResultsList from "./ResultsList";
import RacesList from "./RacesList";


class App extends Component {
    render(){
        return(
            <div className='App' >
            <Header/>
            <Route exact path='/DriverList' component={DriversList}/>
            <Route path='/ResultsList' component={ResultsList}/>
            <Route path='/RacesList' component={RacesList}/>
            </div>
        )
    }
}
export default App;