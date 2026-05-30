import { useState } from "react";

import Schedule from "./Schedule.jsx";
import Modal from "./components/Modal.jsx";
import FormPet from "./components/FormPet.jsx";

import logo from "./assets/logo.svg";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-background-primary min-h-screen w-full pb-24">
      <header className="bg-[#2E2C30] rounded-br-2xl overflow-hidden flex w-45 justify-center items-center gap-2 ">
        <img src={logo} alt="Logo do site" />
        <p className="p-3  uppercase font-inter-tight text-label-large font-bold text-content-brand">
          Mundo pet
        </p>
      </header>

      <Schedule />

      <footer className=" fixed bottom-0 left-0 right-0 flex items-center justify-center p-5 bg-background-tertiary">
        <button
          onClick={() => setModalOpen(true)}
          className="cursor-pointer w-54.5 py-2 px-5 rounded-lg bg-content-brand uppercase text-label-large font-inter hover:bg-background-highlights transition-colors duration-250 ease-in-out "
        >
          Novo Agendamento
        </button>
      </footer>

      <Modal isOpen={modalOpen} onClose={()=> setModalOpen(false)}>
        <FormPet onClose={()=> setModalOpen(false)}/>
      </Modal>
    </div>
  );
}

export default App;
