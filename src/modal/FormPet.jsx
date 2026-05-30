function FormPet({onClose}) {
  const saveSchedule = (e) => {
    e.preventDefault();
    alert("Agendamento salvo com sucesso!");
    onClose();
  }

  return (
    <div>
      <h1>Agende um atendimento</h1>
      <p>Preencha os dados do cliente para realizar o agendamento:</p>

      <form action="" onSubmit={saveSchedule}>

        <div>
         <label htmlFor="">Nome do tutor</label>
           <div>
            <img src="" alt="" />
            <input type="text" placeholder="Caio Rodrigues" /> 
          </div> 
        </div>

         <div>
         <label htmlFor="">Nome do pet</label>
           <div>
            <img src="" alt="" />
            <input type="text" placeholder="Rex" /> 
          </div> 
        </div>

        <div>
          <label htmlFor="">Telefone</label>
          <div>
            <img src="" alt="" />
            <input type="tel" placeholder="(00) 00000-0000" /> 
          </div>
        </div>

         <div>
          <label htmlFor=""> Descrição do serviço</label>
          <div>
            <img src="" alt="" />
            <input type="text" /> 
          </div>
        </div>

       

        <div>
          <button type="submit">AGENDAR</button>
        </div>
        
      </form>

    </div>


  )

}

export default FormPet;