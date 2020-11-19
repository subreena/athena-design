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

const App = () => {
  return (
  <>
  <Router>
  <Switch>
    <Route path="#home">
      <Banner></Banner>
    </Route>
    <Route exact path="/">
  <Home></Home>
    </Route>
  </Switch>
  </Router>
  </>
  );
};

export default App;
