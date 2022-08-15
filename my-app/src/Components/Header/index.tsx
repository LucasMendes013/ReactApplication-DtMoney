import React from 'react'
import logoImg from '../../assets/logo.svg'

import { Container } from './styles'
import { Content } from './styles'

export function Header() {
  return (
      <Container>
        <Content>
          <img src={logoImg} alt="dt Money" title="Logo DT Money" />
          <button type="button">
            Nova Transação
          </button>
        </Content>
      </Container>
  )
}

