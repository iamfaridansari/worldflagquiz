import React, { useContext } from "react";
import { FlagContext } from "../context/FlagContext";
import { HiChevronDoubleRight } from "react-icons/hi";
import { TimerContext } from "../context/TimerContext";

const Navbar = () => {
  const { currentFlag, score, limit, generateFlag, attempt } =
    useContext(FlagContext);
  const { second, minute } = useContext(TimerContext);
  return (
    <div className="w-100 p-2">
      <div className="d-flex align-items-start justify-content-between flex-sm-row flex-column gap-sm-0 gap-2 mb-2">
        <h1 className="text-capitalize">World flag quiz</h1>
        <div>
          <p>
            Score : {score}/{limit}
          </p>
          <p>Attemp : {attempt}</p>
          <p>
            Timer : {minute < 10 ? "0" + minute : minute}:
            {second < 10 ? "0" + second : second}s
          </p>
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-start gap-2 column-flex">
        <p>
          Click on :{" "}
          <strong className="fs-5">{currentFlag && currentFlag.name}</strong>
        </p>
        <button className="button rounded" onClick={generateFlag}>
          Skip <HiChevronDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
