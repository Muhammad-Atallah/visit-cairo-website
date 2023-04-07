import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ modalState, setModalState, setLanguage }) => {
  const toggleModal = () => {
    setModalState(!modalState);
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-slate-400 bg-opacity-50 absolute z-20 -translate-y-[100%] flex justify-center overflow-y-hidden">
      <div className="w-[30rem] h-[15rem] m-auto bg-white flex flex-col rounded shadow-xl justify-center self-center items-center">
        <div className="relative -top-12 left-48">
          <IoIosCloseCircleOutline
            size={30}
            className="cursor-pointer"
            onClick={toggleModal}
          />
        </div>
        <div className="flex p-4 gap-8 justify-center self-center items-center">
          <div
            onClick={() => {
              setLanguage("Arabic");
              toggleModal();
            }}
            className="cursor-pointer bg-[#FFACAC] rounded text-white p-4 hover:-translate-y-2 transition duration-500 text-sm hover:bg-[#ffa0a0]"
          >
            Arabic
          </div>
          <div
            onClick={() => {
              setLanguage("English");
              toggleModal();
            }}
            className="cursor-pointer bg-[#FFACAC] rounded text-white p-4 hover:-translate-y-2 transition duration-500 text-sm hover:bg-[#ffa0a0]"
          >
            English
          </div>
          <div
            onClick={() => {
              setLanguage("Spanish");
              toggleModal();
            }}
            className="cursor-pointer bg-[#FFACAC] rounded text-white p-4 hover:-translate-y-2 transition duration-500 text-sm hover:bg-[#ffa0a0]"
          >
            Spanish
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
