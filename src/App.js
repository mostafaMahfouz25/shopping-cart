import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';

// components 
import Navbar       from './components/Navbar';
import Productlist  from './components/Productlist';
import Details      from './components/Details';
import Cart         from './components/Cart/Cart';
import Default      from './components/Default';
import Modal      from './components/Modal';

function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Switch>
            <Route path="/" exact   component={Productlist} />
            <Route path="/cart"     component={Cart} />
            <Route path="/details"  component={Details} />
            <Route component={Default} />
        </Switch>
        <Modal />
     
    </React.Fragment>
  );
}

export default App;
