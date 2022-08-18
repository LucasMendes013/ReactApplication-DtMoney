import React, {useContext} from "react"
import { Container } from './styles'

import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext"

export function Susu(){
  const transactions = useContext(TransactionsContext)

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas"></img>
        </header>
        <strong>RS 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saída  "></img>
        </header>
        <strong>-RS 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={total} alt="Total"></img>
        </header>
        <strong>RS 500,00</strong>
      </div>
    </Container>
  )
}