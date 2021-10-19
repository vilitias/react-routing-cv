import React from "react";
import About from "./About";
import Filmography from "./Filmography";
import Contacts from "./Contacts";
import { Route, BrowserRouter, Link } from "react-router-dom";
import "../App.css";

class CV extends React.Component {
    render() { 
        return (
            <BrowserRouter>
                <div className="cv-navigation">
                    <ul className="cv-ul">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/filmography">Filmography</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </div>
                <div className="main-wrapper">
                    <Route path="/about" component={About}/>
                    <Route path="/filmography"><Filmography /></Route>
                    <Route path="/contacts"><Contacts/></Route>
                </div>
            </BrowserRouter>
        )
    }
}
 
export default CV;