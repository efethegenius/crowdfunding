import React, { useState } from "react";
import { pledges } from "./data";

// const spacesOnly = pledges.map((pledge) => pledge.spaces);
// console.log(spacesOnly);

export const Reward = ({ openModal }) => {
  const [activeItem, setActiveItem] = useState();
  // const [spacesLeft, setSpacesLeft] = useState(spacesOnly);
  return (
    <section>
      <div className="all-reward">
        {pledges.map((pledge) => {
          const { id, title, subtitle, text, spaces } = pledge;
          return (
            <div
              key={id}
              className={`${spaces < 1 ? "empty" : "reward"}  ${
                activeItem === pledge.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveItem(activeItem === pledge.id ? "" : pledge.id);
              }}
            >
              <div className="reward-header">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
              </div>
              <p>{text}</p>
              <div className="reward-footer">
                <h1 id="reward-left">
                  {`${
                    spaces > 100
                      ? "100+ "
                      : spaces < 1
                      ? "0 "
                      : "less than 100 "
                  }`}
                  <span>left</span>
                </h1>
                <button
                  type="button"
                  id="btn-reward"
                  onClick={() => {
                    openModal();
                  }}
                >
                  {`${spaces > 0 ? "Get Started" : "Out Of Stock"}`}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
