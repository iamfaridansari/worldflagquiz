import React from "react";
import img1 from "../images/select_flag_number.jpg";
import img2 from "../images/click_on.jpg";
import img3 from "../images/score.jpg";
import img4 from "../images/result.jpg";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const Prerequisite = () => {
  return (
    <div className="container p-2 mt-sm-4">
      <h2 className="mb-4">Follow the steps below to understand the game.</h2>
      <ul className="ms-sm-0 ms-4">
        <li className="mb-4">
          Select the number of flags you want to answer, as shown in the figure
          below and click on "Start game" to start the game.
          <div className="w-100">
            <img src={img1} alt="" />
          </div>
        </li>
        {/*  */}
        <li className="mb-4">
          Once you start the game, you will be asked to click on the flag who's
          name is written beside "Click on" text.
          <div className="w-100">
            <img src={img2} alt="" />
          </div>
        </li>
        <li className="mb-4">
          if you click on the correct flag, your score will increase.
          <div className="w-100">
            <img src={img3} alt="" />
          </div>
        </li>
        <li className="mb-4">
          The number of times you click on flags are tracked. Once you
          successfully answered all the flags, you will be redirected on result
          page. Your score, total attempts, accuracy and time taken to complete
          the game will be shown.
          <div className="w-100">
            <img src={img4} alt="" />
          </div>
        </li>
        <li>
          ⚠️ Do not refresh the page. If you do so, the game will restart and
          your progress will be lost.
        </li>
        <li>Click on "Restart game" to play again.</li>
      </ul>
      <div className="mt-4">
        <Link to="/" className="btn btn-primary bg-gradient">
          <FaArrowLeft /> Home <FaHome />
        </Link>
      </div>
    </div>
  );
};

export default Prerequisite;
