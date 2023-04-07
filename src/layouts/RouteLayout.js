import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { Outlet } from "react-router-dom";

const RouteLayout = () => {
  const [modalState, setModalState] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="bg-white z-10">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer
        modalState={modalState}
        setModalState={setModalState}
        language={language}
      />

      {modalState && (
        <Modal
          modalState={modalState}
          setModalState={setModalState}
          setLanguage={setLanguage}
        />
      )}
    </div>
  );
};

export default RouteLayout;
