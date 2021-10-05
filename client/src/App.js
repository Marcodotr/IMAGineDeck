import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Splash from "./components/Splash"
import HeroSelect from './components/HeroSelect'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (  
      <ApolloProvider client={client}>
        <Router>
          <Navbar  /> 
              <Route
                path='/'
                exact
                render={() =>
                <Splash />}
              />
              <Route 
                path="/heroselect"
                exact
                render={() => 
                <HeroSelect/>}
              />
            
        </Router>
      </ApolloProvider>
    
  );

  }
}

export default App;
