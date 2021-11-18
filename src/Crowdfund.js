import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
// import { useState } from "react/cjs/react.development";

export const Crowdfund = ({ amount, backers }) => {
  return (
    <section className="crowdfunding">
      <div className="full-crowdfunding">
        <div className="crowdfund-details">
          <div className="amount">
            <section className="amount-details">
              <h1>${amount}</h1>
              <p>of $100,000 backed</p>
            </section>
            <div id="line"></div>
          </div>
          <div className="backers">
            <section className="backers-details">
              <h1>{backers}</h1>
              <p>total backers</p>
            </section>
            <div id="line"></div>
          </div>
          <div className="days-left">
            <h1>56</h1>
            <p>days left</p>
          </div>
        </div>
        <ProgressBar
          completed={amount}
          maxCompleted={100000}
          customLabel=" "
          bgColor="#3CB4AC"
          height="13px"
          width="80vw"
          margin="0 0 30px 0"
          className="progress-bar"
        />
        <ProgressBar
          completed={amount}
          maxCompleted={100000}
          customLabel=" "
          bgColor="#3CB4AC"
          height="13px"
          width="40vw"
          margin="0 0 30px 0"
          className="progress"
        />
      </div>
    </section>
  );
};
