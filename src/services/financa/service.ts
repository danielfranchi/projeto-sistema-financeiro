import axios from 'axios'

const token = localStorage.getItem("token");

const gastos = {
  despesasGastos: (despesa: any) => {
    return axios.post('http://localhost:4000/finance', despesa, {
      headers: {
        'Authorization': `Bearer ${token}`
      }

    })
  },

  getDespesas: () => {
    return axios.get('http://localhost:4000/finance', {
      headers: {
        'Authorization': `Bearer ${token}`
      }

    })
  }
}

export default gastos;
