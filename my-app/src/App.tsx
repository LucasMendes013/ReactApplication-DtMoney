import { GlobalStyle } from "./styles/global";
import { Header } from './Components/Header/index'
import { Dashboard } from "./Components/Dashboard";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransectionModal } from "./Components/NewTransectionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransectionModalOpen, setIsNewTransectionModalOpen] = useState(false)

  function handleOpenNewTransectionModal(){
    setIsNewTransectionModalOpen(true)
  }

  function handleCloseNewTransectionModal(){
  setIsNewTransectionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransectionModal={handleOpenNewTransectionModal} />

      <Dashboard />

      <NewTransectionModal isOpen={isNewTransectionModalOpen} onRequestClose={handleCloseNewTransectionModal}/>

      <GlobalStyle />

    </>
  );
}


