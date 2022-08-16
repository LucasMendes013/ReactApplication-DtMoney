import React from 'react'
import { Container } from './styles'


import { Susu } from '../Susu/index'
import { Transection } from '../Transections'

export function Dashboard() {
  return (
    <Container>
      <Susu />
      <Transection />
    </Container>
  )
}

