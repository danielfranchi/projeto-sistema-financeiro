import React from 'react'
import Cadastro from '../../components/Cadastro/Cadastro'
import Login from '../../components/Login/Login'

import { useSelector } from 'react-redux'

import { LoginUser } from '../../store/ducks/login/types'

import { Redirect } from 'react-router-dom'


const HomeLogin = () => {


  let logado = false

  const dadosLogin = useSelector((state: LoginUser) => state.cadastroUser.dataLogin.status)
  console.log(dadosLogin)

  if(dadosLogin === 200){
    logado = true
  }

  return (
    <div>
      <Cadastro />
      <Login />
      

      {
        logado ?
        <Redirect to="/home" />
      :
      <Redirect to="/" />
      }
      
    </div>
  )
}

export default HomeLogin
