import React, { useState } from "react";
import Bookmark from "./svgs/icon-bookmark.svg";
import Mastercrafts from "./svgs/logo-mastercraft.svg";

export const Mastercraft = ({ openModal }) => {
  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <div className="mastercraft">
      <div className="full-mastercraft">
        <img src={Mastercrafts} alt="mastercraft logo" id="master-logo" />
        <div className="mastercraft-details">
          <h1>Marvelous Monitor Riser</h1>
          <p>
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="btn-mastercraft">
            <button type="button" id="btn-project" onClick={openModal}>
              Back this project
            </button>
            <div id="bookmark" onClick={handleBookmark}>
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle
                    onClick={handleBookmark}
                    id={`${bookmark ? "circle-active" : "book-svg"}`}
                    fill="#2F2F2F"
                    cx="28"
                    cy="28"
                    r="28"
                  />
                  <path
                    onClick={handleBookmark}
                    id={`${bookmark ? "path-active" : "book-svg"}`}
                    fill="#B1B1B1"
                    d="M23 19v18l5-5.058L33 37V19z"
                  />
                </g>
              </svg>
              <div id="bookmark-text">
                <p>{`${bookmark ? "Bookmarked" : "Bookmark"}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
