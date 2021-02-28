import React, { useRef } from 'react'

import { useDispatch } from 'react-redux'
import { loginRequest } from '../../store/ducks/login/actions'


const Login = () => {

  const dispatch = useDispatch();

  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const cadastro = () => {

    const requisicao = {
      email: email.current?.value,
      password: password.current?.value,
    }

    dispatch(loginRequest(requisicao))
  }
  
  return (
    <div>
      <label>email</label><br/>
      <input type="text" placeholder='digite aqui' ref={email} /><br/><br/>

      <label>senha</label><br/>
      <input type="text" placeholder='digite aqui' ref={password} /><br/><br/>

      <button onClick={cadastro}>Fazer Login</button>
    </div>
  )
}

export default Login