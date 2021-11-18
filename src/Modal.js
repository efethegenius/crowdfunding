import React, { useState } from "react";
import { pledges, pledgesModal } from "./data";
import CloseModal from "./svgs/icon-close-modal.svg";
import "animate.css";

export const Modal = ({
  modalOpen,
  openModal,
  openSuccess,
  amount,
  backers,
  setAmount,
  setBackers,
  number,
  setNumber,
}) => {
  const [data, setData] = useState(pledgesModal);
  const [activeItem, setActiveItem] = useState();
  const [isError, setIsError] = useState(false);

  const handleContinue = (e) => {
    e.preventDefault();
    if (number && number > 0) {
      setAmount(parseInt(number) + parseInt(amount));
      setBackers(backers + 1);
      setNumber("");
    } else {
      setIsError(true);
      setTimeout(function () {
        setIsError(false);
      }, 3000);
    }
  };
  return (
    <section>
      <div className={`${modalOpen ? "all-modal  show-modal" : "all-modal"}`}>
        <div className="modal-header">
          <h1>Back this project</h1>
          <img src={CloseModal} alt="close modal" onClick={openModal} />
        </div>
        <p id="modal-paragraph">
          Want to support us in bringing Marvelous Monitor Riser out in the
          world?
        </p>
        <div
          className={`${
            isError
              ? "show-error error animate__animated animate__shakeX"
              : "error"
          }`}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="exclamation-circle"
            className="svg-inline--fa fa-exclamation-circle fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
            ></path>
          </svg>
          <p id="error-msg">
            {number == 0
              ? "Please enter an amount to pledge"
              : number < 0
              ? "Please enter a valid amount"
              : " "}
          </p>
        </div>
        {data.map((pledgeModal) => {
          const { id, title, subtitle, text, spaces, isEmpty, type } =
            pledgeModal;
          return (
            <div
              key={id}
              className={`${spaces < 1 ? "empty" : "reward"}  ${
                activeItem === pledgeModal.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveItem(
                  activeItem === pledgeModal.id ? "" : pledgeModal.id
                );
              }}
            >
              <div className="modal-head">
                {/* <input type="radio" name="pledge" id="pledge" /> */}
                <div>
                  <h1>{title}</h1>
                  <h3>{subtitle}</h3>
                </div>
              </div>
              <p id="modal-text">{text}</p>
              <h1>
                {`${
                  spaces > 100
                    ? "100+"
                    : spaces < 1
                    ? "0"
                    : type === "free"
                    ? "infinite"
                    : "less than 100"
                }`}{" "}
                <span>left</span>
              </h1>
              <div
                className={`${
                  isEmpty === false
                    ? "modal-footer show-modal-footer"
                    : "modal-footer"
                }`}
              >
                <p>Enter your pledge</p>
                <div>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    // value={number}
                    placeholder={`${id === 2 ? "$25" : id === 3 ? "$75" : ""}`}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <button
                    id="btn-continue"
                    type="submit"
                    onClick={(e) => {
                      if (number && number > 0) {
                        openSuccess();
                      }
                      handleContinue(e);
                      console.log(id);
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
