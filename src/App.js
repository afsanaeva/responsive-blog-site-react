import './App.css';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  return (
    <div className="App">
      <Button variant="contained" style={{backgroundColor:"red"}} size="large"  startIcon={<DeleteIcon />}> Material UI </Button>
    </div>
  );
}

export default App;
