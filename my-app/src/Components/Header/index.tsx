import React, { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import Modal from 'react-modal'

import { Container } from './styles'
import { Content } from './styles'

interface HeaderProps {
  onOpenNewTransectionModal: () => void
}

export function Header({ onOpenNewTransectionModal }: HeaderProps) {

  return (
      <Container>
        <Content>
          <img src={logoImg} alt="dt Money" title="Logo DT Money" />
          <button type="button" onClick={onOpenNewTransectionModal}>
            Nova Transação
          </button>

      
        </Content>
      </Container>
  )
}

