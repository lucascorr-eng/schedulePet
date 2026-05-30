import close from "../assets/close.svg";


function Modal({isOpen, onClose, children}) {
  if(!isOpen) return null;
  return (
    <div  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 shadow-2xl rounded-2xl bg-background-tertiary">

        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-content-brand transition-colors flex items-center">
          <img src={close} alt="ícone de fechar" className="w-6 h-6" />
        </button>

        {children}
      </div>
    </div>
  );
}
export default Modal;
 