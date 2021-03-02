import React, { useEffect, useRef, useState } from 'react';
import { requestDespesas, getDespesa } from '../../store/ducks/financa/actions'
import { useDispatch, useSelector} from 'react-redux'
import {Financa, itemDespesa} from '../../store/ducks/financa/types'


const Financas = () => {


  const despesas = useSelector((state: Financa) => state.despesasTotal.despesa)
  console.log(despesas)

  const dispatch = useDispatch()

  const [radio, setRadio] = useState("");

  const verifica = ({ target }: any) => {
    setRadio(target.value);
  };


  const valor = useRef<HTMLInputElement>(null)

  const cadastro = () => {
    const requisicao = {
      type: radio,
      amount: valor.current?.value
    }
    console.log(requisicao)

    dispatch(requestDespesas(requisicao));
  }

  React.useEffect(() => {
    dispatch(getDespesa())
  }, [])
  
  return (
    <div>
      <h1>{radio}</h1>
      <input
        type="radio"
        value="Recebimentos"
        name="despesas"
        checked={radio === "Recebimentos"}
        onChange={verifica}
      />{" "}
      Recebimentos
      <input
        type="radio"
        value="Despesas"
        name="despesas"
        checked={radio === "Despesas"}
        onChange={verifica}
      />{" "}
      Despesas <br />
      <br />
      <input type="text" placeholder="entre com a valor" ref={valor}/>
      <br />
      <br />
      <button onClick={cadastro}>Cadastrar</button>

      <br/><br/>
      <hr/>

      {despesas !== null && despesas.map((item: itemDespesa) => (
        <div key={item.id}>
            <p>R$: {item.amount}</p>
            <p>{item.type}</p>

        </div>
      ))}
    </div>
  );
};

export default Financas;
