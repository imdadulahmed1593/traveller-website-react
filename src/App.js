import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Destination from "./components/Destination/Destination";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Search from "./components/Search/Search";

export const userContext = createContext();
function App() {
  const [user, setUser] = useState({});
  return (
    <div className="app">
      <userContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/search">
              <Search />
            </PrivateRoute>
            <Route path="/destinations/:destination">
              <Destination />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;

//
// <Home/>
// <Booking/>
// <Search/>
