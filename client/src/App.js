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
  );
}

export default App;
