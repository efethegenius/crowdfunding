import React from "react";
import { Reward } from "./Reward";

export const About = ({ openModal }) => {
  return (
    <section className="all-about">
      <article className="about">
        <div className="about-text">
          <h1 id="about-header">About this project</h1>
          <p id="p1">
            The Marvelous Monitor Riser is a sturdy and stylish platform that
            elevates your screen to a more comfortable viewing height. Placing
            your monitor at eye level has the potential to improve your posture
            and make you more comfortable while at work, helping you stay
            focused on the task at hand.
          </p>
          <p id="p2">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <Reward openModal={openModal} />
      </article>
    </section>
  );
};
