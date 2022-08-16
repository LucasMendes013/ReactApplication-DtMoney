import React, { useState } from 'react'

import Modal from 'react-modal'
import { Container, TransectionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'


interface NewTransectionModalProps {
  isOpen: boolean;
  onRequestClose:() => void ;
}

export function NewTransectionModal({isOpen, onRequestClose}: NewTransectionModalProps){
  const [type, setType] = useState('deposit')

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className='react-modal-content'
    >

        <button type='button' onClick={onRequestClose} className='react-modal-close'>
          <img src={closeImg} alt='fechar'></img>
        </button>

      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder='Título'></input>

        <TransectionTypeContainer>
          <RadioBox type='button'
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
          >
            <img src={incomeImg} alt='Entrada' ></img>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type='button'
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt='Saída'></img>
            <span>Saída</span>
          </RadioBox>
        </TransectionTypeContainer>
        
        <input placeholder='Valor' type='number'></input>
          <input placeholder='Categoria'></input>
        <button type='submit'>
          Cadastrar
        </button>
      </Container>
      
    </Modal>
  )
}

