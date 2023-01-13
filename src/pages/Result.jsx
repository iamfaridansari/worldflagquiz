import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FlagContext } from "../context/FlagContext";
import { TimerContext } from "../context/TimerContext";

const Result = () => {
  const { score, attempt, limit, quitGame } = useContext(FlagContext);
  const { started, second, minute } = useContext(TimerContext);
  //
  const navigate = useNavigate();
  useEffect(() => {
    if (!started && score !== limit) {
      navigate("/", { replace: true });
    }
  }, []);
  //
  return (
    <div className="container text-center p-2 py-sm-4">
      <h1 className="text-capitalize">World flag quiz</h1>
      <div className="row align-items-center justify-content-center my-4 gap-md-0 gap-2">
        <div className="col-md">
          <p>
            Score :{" "}
            <strong className="fs-5">
              {score} / {limit}
            </strong>
          </p>
        </div>
        <div className="col-md">
          <p>
            Attempts : <strong className="fs-5">{attempt}</strong>
          </p>
        </div>
        <div className="col-md">
          <p>
            Accuracy :{" "}
            <strong className="fs-5">
              {Math.round((score / attempt) * 100)}%
            </strong>
          </p>
        </div>
        <div className="col-md">
          <p>
            Timer :{" "}
            <strong className="fs-5">
              {minute < 10 ? "0" + minute : minute}:
              {second < 10 ? "0" + second : second}s
            </strong>
          </p>
        </div>
      </div>
      <Link to="/" onClick={quitGame} className="button rounded">
        Restart game
      </Link>
    </div>
  );
};

export default Result;
