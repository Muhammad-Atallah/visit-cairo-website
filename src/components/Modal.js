import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ modalState, setModalState, setLanguage }) => {
  const toggleModal = () => {
    setModalState(!modalState);
  };

  return (
    <div className="w-[100vw] h-[500vh] bg-slate-400 bg-opacity-50 z-20 flex justify-center justify-items-center fixed top-0">
      <div className="w-[30rem] h-[15rem] bg-white flex flex-col rounded shadow-xl justify-center self-center items-center m-10 fixed bottom-[20%]">
        <div className="absolute  sm:translate-x-40 translate-x-16 -translate-y-20">
          <IoIosCloseCircleOutline
            size={30}
            className="cursor-pointer"
            onClick={toggleModal}
          />
        </div>
        <div className="flex flex-col sm:flex-row p-4 gap-3 sm:gap-8 justify-center self-center items-center">
          <div
            onClick={() => {
              setLanguage("Arabic");
              toggleModal();
            }}
            className="cursor-pointer flex justify-center justify-items-center w-[5rem] h-[3rem] bg-[#FFACAC] rounded text-white  text-center hover:-translate-y-2 transition duration-500 text-xs sm:text-sm hover:bg-[#ffa0a0]"
          >
            <h1 className="self-center">Arabic</h1>
          </div>
          <div
            onClick={() => {
              setLanguage("English");
              toggleModal();
            }}
            className="cursor-pointer flex justify-center justify-items-center w-[5rem] h-[3rem] bg-[#FFACAC] rounded text-white hover:-translate-y-2 transition duration-500 text-xs sm:text-sm hover:bg-[#ffa0a0]"
          >
            <h1 className="self-center">English</h1>
          </div>
          <div
            onClick={() => {
              setLanguage("Spanish");
              toggleModal();
            }}
            className="cursor-pointer flex justify-center justify-items-center w-[5rem] h-[3rem] bg-[#FFACAC] rounded text-white hover:-translate-y-2 transition duration-500 text-xs sm:text-sm hover:bg-[#ffa0a0]"
          >
            <h1 className="self-center">Spanish</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
