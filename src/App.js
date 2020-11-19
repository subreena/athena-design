import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Components/Home/Banner/Banner";
import Home from "./Components/Home/Home/Home";
import './App.css'
import About from "./Components/Home/About/About";
import Pricing from "./Components/Home/Pricing/Pricing";
import Services from "./Components/Home/Services/Services";
import Contact from "./Components/Home/Contact/Contact";
import NavBar from "./Components/Home/NavBar/NavBar";

const App = () => {
  return (
  <>
  <Router>
  <NavBar></NavBar>
  <Switch>
    <Route exact path="/">
  <Home></Home>
    </Route>
  </Switch>
  </Router>
  </>
  );
};

export default App;
