import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Tooltip } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 200,
    maxWidth: 400,
    marginLeft: 450
  },
  text:{
    marginRight: 200,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'

  }
}));

const Teste = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs className={classes.text}>
                <Typography gutterBottom variant="subtitle1" >
                  Login
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Criar conta
                </Typography>
              </Grid>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="standard-basic"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="password"
                name="password"
                autoComplete="password"
                autoFocus

              />
            </Grid>
            
          </Grid>
          
        </Grid>
      </Paper>
    </div>
  );
}

export default Teste