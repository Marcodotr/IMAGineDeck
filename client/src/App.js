import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Splash from "./components/Splash"
import Test from "./components/test"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {
  return (
    <div>
      
      <HashRouter basename={process.env.PUBLIC_URL}>

      <Navbar />
          <Route exact path="/" component={Splash} />
          <Route exact path="/Test" component={Test} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
      </HashRouter>
    </div>
  );
}

export default App;
