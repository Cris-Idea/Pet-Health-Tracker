import { BrowserRouter as Router, Redirect, Switch, Route, } from "react-router-dom";
import Login from './components/user/Login';
import Main from './components/Main';
import React, { useState, useMemo } from 'react';
import Register from './components/user/Register';
import { UserContext } from "./components/user/UserContext";

function App() {
  const [user, setLoginUser] = useState(false);

  const providerValue = useMemo(() => ({ user, setLoginUser }), [user, setLoginUser]);

  return (
    <>
      <Router>
        <Switch>
          <UserContext.Provider value={providerValue}>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/register">
              {user ? <Redirect to="/main" /> : <Register />}
            </Route>
            <Route exact path="/login">
              {user ? <Redirect to="/main" /> : <Login />}
            </Route>
            <Route exact path="/main">
              {user ? <Main /> : <Redirect to="/login" />}
            </Route>
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
