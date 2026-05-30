import { useRef } from "react";

import user from "../assets/user.svg";
import check from "../assets/check.svg";
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

  const inputDateRef = useRef(null);
  const inputHourRef = useRef(null);

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
          <div className="flex gap-2 border border-border-primary rounded-md p-2 mt-2">
            <img src={user} alt="" />
            <input
              type="text"
              required
              placeholder="Caio Rodrigues"
              className="font-inter font-normal text-[14px] outline-none border-none bg-transparent w-full  text-content-secondary"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-label-medium">
            Nome do pet
          </label>
          <div className="flex gap-2 border border-border-primary rounded-md p-2 mt-2">
            <img src={dog} alt="" />
            <input
              type="text"
              required
              className="font-inter font-normal text-[14px] outline-none border-none bg-transparent w-full  text-content-secondary"
              placeholder="Rex"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-label-medium">
            Telefone
          </label>
          <div className="flex gap-2 border border-border-primary rounded-md p-2 mt-2">
            <img src={phone} alt="" />
            <input
              type="tel"
              required
              className="font-inter font-normal text-[14px] outline-none border-none bg-transparent w-full  text-content-secondary"
              placeholder="(00) 00000-0000"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-label-medium">
            {" "}
            Descrição do serviço
          </label>
          <div className="flex gap-2 border border-border-primary rounded-md p-2 mt-2">
            <textarea
              type="text"
              rows="4"
              required
              className="font-inter font-normal text-[14px]
               outline-none resize-none border-none bg-transparent w-full text-content-secondary"
              placeholder="Banho e tosa"
            />
          </div>
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="" className="text-label-medium">
              Data
            </label>
            <div className="flex gap-3 border border-border-primary rounded-md p-2 mt-2 ">
              <img
                className="cursor-pointer"
                src={calendar}
                onClick={() => inputDateRef.current.showPicker()}
                alt=""
              />
              <input
                ref={inputDateRef}
                type="date"
                required
                className="cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden outline-none border-none bg-transparent w-full text-content-secondary text-[14px]"
              />
              <img
                onClick={() => inputDateRef.current.showPicker()}
                src={check}
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-label-medium">
              Hora
            </label>
            <div className="flex gap-3 border border-border-primary rounded-md p-2 mt-2">
              <img
                className="cursor-pointer"
                onClick={() => inputHourRef.current.showPicker()}
                src={clock}
                alt=""
              />
              <input
                type="time"
                ref={inputHourRef}
                required
                className="cursor-pointer outline-none border-none bg-transparent w-full text-content-secondary text-[14px] [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <img
                onClick={() => inputHourRef.current.showPicker()}
                src={check}
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end-safe">
          <button
            type="submit"
            className="bg-content-brand text-label-large text-black  py-2 px-5 rounded-lg cursor-pointer"
          >
            AGENDAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPet;
