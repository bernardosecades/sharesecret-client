import React from "react";

import {
    Route,
    HashRouter
} from "react-router-dom";

import './App.css';

import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import SecretView from "./components/SecretView";
import SecretLink from "./components/SecretLink";

function App() {
  return (
      <HashRouter>
          <div>
              <Logo/>
              <Menu/>

              <div className="content">
                  <Route exact path="/" component={Home}/>
                  <Route path="/stuff" component={Stuff}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/secret/:id" component={SecretView}/>
              </div>

              <Footer/>
          </div>
      </HashRouter>
  );
}

export default App;
