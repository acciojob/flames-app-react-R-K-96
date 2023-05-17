import React, {Component, useState} from "react";
import '../styles/App.css';
import RelationshipCalculator from "./RelationshipCal";

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <RelationshipCalculator/>

               
            </div>
        )
    }
}


export default App;
