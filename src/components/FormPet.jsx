import user from "../assets/user.svg";
import dog from "../assets/dog.svg";
import phone from "../assets/phone.svg";
import clock from "../assets/clock.svg";
import calendar from "../assets/calendar.svg";

function FormPet({ onClose }) {
  const saveSchedule = (e) => {
    e.preventDefault();
    alert("Agendamento salvo com sucesso!");
    onClose();
  };

  return (
    <div className="font-inter-tight text-content-primary">
      <h1 className="text-title font-inter-tight">Agende um atendimento</h1>
      <p className="text-content-secondary text-paragraph-medium">
        Preencha os dados do cliente para realizar o agendamento:
      </p>

      <form action="" onSubmit={saveSchedule} className="mt-6">
        <div>
          <label htmlFor="" className="text-label-medium">
            Nome do tutor
          </label>
          <div className="flex gap-2 border rounded-md p-2 mt-2">
            <img src={user} alt="" />
            <input type="text" placeholder="Caio Rodrigues" className="" />
          </div>
        </div>

        <div>
          <label htmlFor="">Nome do pet</label>
          <div>
            <img src={dog} alt="" />
            <input type="text" placeholder="Rex" />
          </div>
        </div>

        <div>
          <label htmlFor="">Telefone</label>
          <div>
            <img src={phone} alt="" />
            <input type="tel" placeholder="(00) 00000-0000" />
          </div>
        </div>

        <div>
          <label htmlFor=""> Descrição do serviço</label>
          <div>
            <input type="text" />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="">Data</label>
            <div>
              <img src={calendar} alt="" />
              <input type="date" />
            </div>
          </div>

          <div>
            <label htmlFor="">Hora</label>
            <div>
              <img src={clock} alt="" />
              <input type="time" />
            </div>
          </div>
        </div>

        <div>
          <button type="submit">AGENDAR</button>
        </div>
      </form>
    </div>
  );
}

export default FormPet;
