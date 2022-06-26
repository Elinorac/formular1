import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
        
          <div>
          
                <div class="navbar navbar-expand-lg" >
                    <ul className="nav navbar-nav ml-auto">
                        <Link to='/DriverList' >Drivers</Link>
                        <Link to='/RacesList' >Races</Link>
                        <Link to='/ResultsList' >Results</Link>
                    </ul>
                </div>
                <div className="jumbotron">
            
                     <h1> FORMULA 1 </h1>  
              
                </div>
            </div>
        
    );
  }
}

export default Header;