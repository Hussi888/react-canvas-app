import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import DragAndDropSidebar from './components/Canvas';
import { chartSimple } from './initialData/ConfigData';
import Navbar from './components/Navbar'


function App() {
 
  return (
   
    <Provider store={store} >
      <Navbar></Navbar>

      <DragAndDropSidebar configData={chartSimple}/> 
       
    </Provider>
  );
}

export default App;