import React, { useContext, useEffect, useRef } from "react";
import { FlagContext } from "../context/FlagContext";
import { HiChevronDoubleRight } from "react-icons/hi";
import { TimerContext } from "../context/TimerContext";

const Navbar = () => {
  const { currentFlag, score, limit, generateFlag, attempt } =
    useContext(FlagContext);
  const { second, minute, started } = useContext(TimerContext);
  //
  const stickyBar = useRef(null);
  useEffect(() => {
    if (started) {
      window.onscroll = () => {
        if (window.scrollY >= 100) {
          stickyBar.current.classList.add("active");
          stickyBar.current.classList.add("rounded");
        } else if (window.scrollY <= 100) {
          stickyBar.current.classList.remove("active");
          stickyBar.current.classList.remove("rounded");
        }
      };
    }
  }, []);
  return (
    <>
      <div className="w-100 p-0">
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
      </div>
      <div
        className="d-flex align-items-end justify-content-start gap-5 column-flex sticky-bar p-2"
        ref={stickyBar}
      >
        <p>
          Click on :{" "}
          <strong className="fs-5">{currentFlag && currentFlag.name}</strong>
        </p>
        <button className="button rounded" onClick={generateFlag}>
          Skip <HiChevronDoubleRight />
        </button>
      </div>
    </>
  );
};

export default Navbar;
