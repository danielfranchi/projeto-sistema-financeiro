import React from 'react'
import FormLogin from '../../components/FormLogin/FormLogin'

import { useSelector } from 'react-redux'

import { LoginUser } from '../../store/ducks/login/types'

import { Redirect } from 'react-router-dom'


const Login = () => {


  let logado = false

  const dadosLogin = useSelector((state: LoginUser) => state.cadastroUser.dataLogin.status)
  console.log(dadosLogin)

  if(dadosLogin === 200){
    logado = true
  }

  return (

    <div>
      <FormLogin />
      
      {
        logado ?
        <Redirect to="/home" />
      :
      <Redirect to="/" />
      }
      
    </div>
  )
}

export default Login
