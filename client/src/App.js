import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Splash from "./components/Splash"
import Test from "./components/Test"

function App() {
  return (
    <div>
      
      <HashRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
          <Route exact path="/" component={Splash} />
          <Route exact path="/Test" component={Test} />
         
      
      </HashRouter>
    </div>
  );
}

export default App;
