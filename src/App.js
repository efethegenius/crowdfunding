import { About } from "./About";
import "./App.css";
import { Crowdfund } from "./Crowdfund";
import { Header } from "./Header";
import { Mastercraft } from "./Mastercraft";
import { Modal } from "./Modal";
import React, { useState } from "react";
import Check from "./svgs/icon-check.svg";
import { Footer } from "./Footer";
import "animate.css";
// import AnimatedCursor from "react-animated-cursor";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [amount, setAmount] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [number, setNumber] = useState("");

  const openModal = () => {
    setModalOpen(!modalOpen);
  };
  const openSuccess = () => {
    setSuccessOpen(!successOpen);
    setModalOpen(false);
  };
  return (
    <section className="full-app">
      <div className={`${successOpen ? "dtest  show-dtest" : "dtest"}`}>
        <div className={`${successOpen ? "success  show-success" : "success"}`}>
          <img src={Check} alt="" />
          <h1>Thanks for your support!</h1>
          <p>
            Your pledge brings us one step closer to sharing Marvelous Monitor
            Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button type="button" onClick={openSuccess}>
            Got it!
          </button>
        </div>
      </div>
      <Modal
        modalOpen={modalOpen}
        openModal={openModal}
        successOpen={successOpen}
        openSuccess={openSuccess}
        amount={amount}
        backers={backers}
        setAmount={setAmount}
        setBackers={setBackers}
        number={number}
        setNumber={setNumber}
      />
      <div className={`${modalOpen ? "all-app" : " "}`}>
        <div
          className={`${modalOpen ? "modal-scene  show-scene" : "modal-scene"}`}
          onClick={openModal}
        ></div>
        <Header />
        <Mastercraft modalOpen={modalOpen} openModal={openModal} />
        <Crowdfund
          amount={amount}
          backers={backers}
          setAmount={setAmount}
          setBackers={setBackers}
        />
        <About openModal={openModal} />
        <Footer />
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="0, 0, 2"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        /> */}
      </div>
    </section>
  );
}

export default App;
