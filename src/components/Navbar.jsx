import React, { useContext } from "react";
import { FlagContext } from "../context/FlagContext";
import { BsChevronDoubleRight } from "react-icons/bs";

const Navbar = () => {
  const { currentFlag, score, limit, generateFlag } = useContext(FlagContext);
  return (
    <div className="w-100 border rounded p-2">
      <div className="d-flex align-items-start justify-content-between flex-sm-row flex-column gap-sm-0 gap-2 mb-2">
        <h1 className="text-capitalize">World flag quiz</h1>
        <p>
          Score : {score}/{limit}
        </p>
      </div>
      <div className="d-flex align-items-end justify-content-start gap-2">
        <p>
          Click on :{" "}
          <strong className="fs-5">{currentFlag && currentFlag.name}</strong>
        </p>
        <button className="btn btn-primary bg-gradient" onClick={generateFlag}>
          Skip <BsChevronDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
