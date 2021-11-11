import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyle =makeStyles((theme) =>({
  
}))

const App = () => {
  const classes = useStyle()
  return (
    <div className="App">
     <Navbar/>
    </div>
  )
}

export default App
