import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransectionTypeContainer, RadioBox } from './styles';
import { api } from '../../services/api';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose:() => void ;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransection(event: FormEvent){
    event.preventDefault()
    const data = {
      title,
      value,
      category,
      type,
    }
    api.post('/transactions', data)
  }

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

      <Container onSubmit={handleCreateNewTransection}>
        <h2>Cadastrar Transação</h2>
        <input 
        placeholder='Título' 
        value={title}
        onChange={event => setTitle(event.target.value)}
        />

        <input 
        placeholder='Valor' 
        type='number'
        value={value}
        onChange={event => setValue(Number(event.target.value))}
        />

        <TransectionTypeContainer>
          <RadioBox type='button'
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt='Entrada' ></img>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type='button'
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt='Saída'></img>
            <span>Saída</span>
          </RadioBox>
        </TransectionTypeContainer>
        
      
        <input 
        placeholder='Categoria'
        value={category}
        onChange={event => setCategory(event.target.value)}
        />
        <button type='submit'>
          Cadastrar
        </button>
      </Container>
      
    </Modal>
  )
}

