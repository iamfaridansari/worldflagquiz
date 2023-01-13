import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Prerequisite = () => {
  return (
    <div className="container p-2 mt-sm-4">
      <h2 className="mb-4">Follow the steps below to understand the game.</h2>
      <ul className="ms-sm-0 ms-4">
        <li className="mb-2">
          Select the number of flags you want to answerand click on "Start game"
          to start the game.
        </li>
        <li className="mb-2">
          Once you start the game, you will be asked to click on the flag who's
          name is written beside "Click on" text on top left corner.
        </li>
        <li className="mb-2">
          if you click on the correct flag, your score will increase.
        </li>
        <li className="mb-2">
          The number of times you click on flags will be tracked.
        </li>
        <li>
          Once you successfully answer all the flags, you will be redirected on
          result page.
        </li>
        <li className="mb-2">
          Your score, total attempts, accuracy and time taken to complete the
          game will be shown.
        </li>
        <li className="mb-2">
          Do not refresh the page. If you do so, the game will restart and your
          progress will be lost.
        </li>
        <li>Click on "Restart game" if you want to play again.</li>
      </ul>
      <div className="mt-4">
        <Link to="/" className="button rounded">
          <FaHome /> Home
        </Link>
      </div>
    </div>
  );
};

export default Prerequisite;
