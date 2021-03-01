import React, { useRef, useState } from 'react'

import { useDispatch } from 'react-redux'
import { loginRequest } from '../../store/ducks/login/actions'
import { Redirect } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import useStyles from './Style'
import Copyright from './Copyright'


const FormLogin = () => {
  const classes = useStyles()

  const [cadastro, setCadastro] = useState(false)

  const dispatch = useDispatch();

  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const aa = email.current?.value
  console.log(aa)

  const login = () => {

    const requisicao = {
      email: email.current?.value,
      password: password.current?.value,
    }

    dispatch(loginRequest(requisicao))
  }
  
  return (
    <div>

    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          inputRef={email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          inputRef={password}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={login}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link variant="body2" >
              <span onClick={() => setCadastro(true)}>{"Don't have an account? Sign Up"}</span> 
            </Link>
          </Grid>
        </Grid>
    </div>
    <Box mt={8}>
        <Copyright />
      </Box>
  </Container>

      {
        cadastro ?
        <Redirect to="/cadastro" />
      :
        null
      }
    </div>
      
  )
  
}

export default FormLogin