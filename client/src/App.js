import React ,{Component} from 'react';
import './App.css';
import Launches from './components/launches';
import logo from './logo.png';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter , Route} from 'react-router-dom';
import Launch from './components/launch';

const client = new ApolloClient({
  uri : 'http://localhost:8080/graphql'
});

class App extends Component {
  render(){
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
    <div className="container">
      <img 
         src={logo} 
         alt='SpaceX'
         style={{width : 300 , display : 'block' , margin : 'auto'}} 
      />
      <Route exact path='/' component={Launches} />
      <Route path='/launch/:flight_number' component={Launch} />
    </div>
    </BrowserRouter>
    </ApolloProvider>
  );
}
}

export default App;
