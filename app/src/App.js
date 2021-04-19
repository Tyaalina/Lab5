import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%'
  },
  paper: {
    width: 'max-content',
    height: 'max-content',
    margin: 'auto',
    padding: theme.spacing(4)
  },
  text: {
    margin: 'auto'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
      <TextField id="standard-basic" label="Name" />
      </Paper>
    </div>
  );
}

export default App;
