import calendar from "./assets/calendar.svg";
import check from "./assets/check.svg";
import morning from "./assets/morning.svg";
import afternoon from "./assets/afternoon.svg";
import night from "./assets/night.svg";

function Schedule() {
  return (
    <div className=" w-87.5 mx-auto mt-5 mb-10 text-content-primary">
      <section className="mb-8">
        <h1 className="text-title font-inter-tight mb-1">Sua agenda</h1>
        <p className="text-paragraph-medium text-content-secondary mb-4">
          Aqui você pode ver todos os clientes e serviços agendados para hoje.
        </p>
        <div className=" w-fit flex border text-content-secondary border-border-primary rounded-lg p-3 ">
          <img src={calendar} alt="Ícone de calendário" className="mx-1" />
          <input
            type="date"
            className="cursor-pointer outline-none [&::-webkit-calendar-picker-indicator]:hidden"
          />
          <button className="cursor-pointer">
            <img src={check} alt="" />
          </button>
        </div>
      </section>

      <section className="grid gap-3">
        {/* manhã */}
        <div className="bg-background-tertiary p-5 rounded-[10px]">
          <div className="flex justify-between text-label-large ">
            <div className="flex gap-2">
              <img src={morning} alt="Ícone de um sol" />
              <span>Manhã</span>
            </div>
            <span className="text-content-secondary">09h-12h</span>
          </div>

          <div className="border border-border-primary mt-3 mb-6"></div>

          <div className="grid">
            <div className="flex gap-5">
              <span className="text-label-medium">09:00</span>
              <div className="flex gap-1 text-paragraph-medium text-content-secondary">
                <span className="text-label-medium text-content-primary">
                  Thor
                </span>
                / Fernanda Costa
              </div>
            </div>
            <p className="mt-1 text-paragraph-medium text-content-secondary">
              Vacinação
            </p>
          </div>
          <div className="flex w-full">
            <button className=" cursor-pointer ml-auto mt-1 text-paragraph-small text-content-secondary ">
              Remover agendamento
            </button>
          </div>
        </div>

        {/* tarde */}
        <div className="bg-background-tertiary p-5 rounded-[10px]">
          <div className="flex justify-between text-label-large ">
            <div className="flex gap-2">
              <img src={afternoon} alt="Ícone de um sol" />
              <span>Tarde</span>
            </div>
            <span className="text-content-secondary">13h-18h</span>
          </div>

          <div className="border border-border-primary mt-3 mb-6"></div>

          <div className="grid">
            <div className="flex gap-5">
              <span className="text-label-medium">09:00</span>
              <div className="flex gap-1 text-paragraph-medium text-content-secondary">
                <span className="text-label-medium text-content-primary">
                  Thor
                </span>
                / Fernanda Costa
              </div>
            </div>
            <p className="mt-1 text-paragraph-medium text-content-secondary">
              Vacinação
            </p>
          </div>
          <div className="flex w-full">
            <button className=" cursor-pointer ml-auto mt-1 text-paragraph-small text-content-secondary ">
              Remover agendamento
            </button>
          </div>
        </div>

        {/* noite */}
        <div className="bg-background-tertiary p-5 rounded-[10px]">
          <div className="flex justify-between text-label-large ">
            <div className="flex gap-2">
              <img src={night} alt="Ícone de um sol" />
              <span>Noite</span>
            </div>
            <span className="text-content-secondary">19h-21h</span>
          </div>

          <div className="border border-border-primary mt-3 mb-6"></div>

          <div className="grid">
            <div className="flex gap-5">
              <span className="text-label-medium">09:00</span>
              <div className="flex gap-1 text-paragraph-medium text-content-secondary">
                <span className="text-label-medium text-content-primary">
                  Thor
                </span>
                / Fernanda Costa
              </div>
            </div>
            <p className="mt-1 text-paragraph-medium text-content-secondary">
              Vacinação
            </p>
          </div>
          <div className="flex w-full">
            <button className="cursor-pointer ml-auto mt-1 text-paragraph-small text-content-secondary ">
              Remover agendamento
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
