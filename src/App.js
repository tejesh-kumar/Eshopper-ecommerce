import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Layout from './containers/Layout';
// import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    color: theme.palette.text.primary,
  }
}))


function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Layout />
    </div>
  );
}

export default App;
