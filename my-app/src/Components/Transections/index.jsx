import React, { useEffect } from 'react'
import { api } from '../../services/api';
import { Container } from './styles'

export function Transection() {
  useEffect(() => { //Toda variável que estiver em meio ao array, assim que mudar o seu valor, vai executar o parâmetro de trás também.
    api.get('transection')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1100,00</td>
            <td>Casa</td>
            <td>17/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

