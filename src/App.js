import React from 'react';

import './App.css';

import home from './pages/home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={home}/>
      <Route exact path="/Rooms" component={Rooms}/>
      <Route exact path="/Rooms/:slug" component={SingleRoom}/>
      <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
