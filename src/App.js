import React from 'react';
import Home from "./component/pages/Home";
import View from './component/pages/View';
import Edit from "./component/pages/Edit";
import {Routes,Route } from "react-router-dom";

import './index.css';


function App() {

  return (

    <Routes>
    <Route exact path="/" element={ <Home /> }/>
    <Route exact path="/view/:id" element={ <View /> }/>
    <Route exact path="/edit/:id" element={ <Edit /> }/>

    </Routes>
  );
}

export default App;
