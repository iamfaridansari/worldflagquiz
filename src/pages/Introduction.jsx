import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FlagContext } from "../context/FlagContext";
import { FaArrowRight } from "react-icons/fa";

const Introduction = () => {
  const { limit, setLimit, getFlags } = useContext(FlagContext);
  return (
    <div className="container p-2">
      <div className="row align-items-center justify-content-center my-sm-4 mx-auto mb-4">
        <div className="col-lg-4 col-md-5 col-sm-6 text-center p-2 px-sm-4 pb-0">
          <h1 className="text-capitalize mb-3">World flag quiz</h1>
          <label>Select the number of flags</label>
          <select
            className="input rounded"
            value={limit}
            onChange={(e) => setLimit(parseFloat(e.target.value))}
            autoComplete="off"
          >
            <option disabled>Please select</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="238">238</option>
          </select>
          <div className="mt-3">
            <Link to="/game" onClick={getFlags} className="button rounded">
              Start game <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-sm-row flex-column gap-2 pt-4 top-border">
        <h2>Don't know how to play?</h2>
        <Link to="/prerequisite" className="button rounded">
          Click here
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
