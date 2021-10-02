import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Splash from "./components/Splash"
import Test from "./components/Test"

function App() {
  return (
    <div>
      <Navbar />
      <HashRouter basename={process.env.PUBLIC_URL}>
    
          <Route exact path="/" component={Splash} />
          <Route path="/technologies" component={Test} />
         
      
      </HashRouter>
    </div>
  );
}

export default App;
