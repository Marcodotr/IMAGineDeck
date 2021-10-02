<<<<<<< HEAD
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return( 
    <ApolloProvider client={client}>
      <Navbar />
      <Home />
    </ApolloProvider>
=======
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
>>>>>>> isack
  );
}

export default App;
