import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
 import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import HeroSelect from './components/HeroSelect'

// import SingleThought from './pages/SingleThought';
//  import Header from './components/Header';
// import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Navbar />
        <div className="flex-column justify-flex-start min-100-vh">
          {/* <Header /> */}
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/heroselect">
              <HeroSelect />
            </Route>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;


// import React from "react";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Splash from "./components/Splash"
// import HeroSelect from './components/HeroSelect'
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// import Signup from './pages/Signup';
// import Login from './pages/Login';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

// class App extends React.Component {
//   render() {
//     return (  
//       <ApolloProvider client={client}>
//         <Router>
//           <Navbar  /> 
//               <Route
//                 path='/'
//                 exact
//                 render={() =>
//                 <Splash />}
//               />
//               <Route 
//                 path="/heroselect"
//                 exact
//                 render={() =>
//                 <HeroSelect/>}
//               />
//               <Route exact path="/login">
//               <Login />
//             </Route>
//             <Route exact path="/signup">
//               <Signup />
//             </Route>
            
//         </Router>
//       </ApolloProvider>
    
//   );

//   }
// }

// export default App;