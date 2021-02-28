import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { MoedaRequest, infRequest } from '../../store/ducks/moeda/actions'

import { MoedasMundo, DataMoeda, Inf } from '../../store/ducks/moeda/types'

const Home = () => {

  const dispatch = useDispatch()
  const moedas = useSelector((state: MoedasMundo) => state.moedasMundo.moedas)

  const information = useSelector((state: MoedasMundo) => state.moedasMundo.inf)

  const inf = (inf: any) => {
    dispatch(infRequest(inf))
  }

  useEffect(() => {
    dispatch(MoedaRequest())
  }, [dispatch])

  return (
    <div>
      {moedas !== null && moedas.map((item:DataMoeda, i: any) => (
        <div key={i}>
            <p>{item.country_name}</p>
            <p>{item.currency_code}</p>
            <p>{item.name}</p>
            <button onClick={ () => inf(item.currency_code)}> information </button> 

            {information !== null && information.map((n: Inf, i:any) => (
              <div key={i}>
                <p>{item.currency_code === n.currency_code && n.name}</p>
                <p>{item.currency_code === n.currency_code && n.symbol}</p>
              </div>
            ))}
            <hr/>
        </div>  
      ))}
    </div>
  )
}

export default Home
