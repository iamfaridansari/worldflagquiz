import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FlagContext } from "../context/FlagContext";

const Result = () => {
  const { started, score, attempt, limit, restartGame } =
    useContext(FlagContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!started) {
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
            Timestamp : <strong className="fs-5">2:47s</strong>
          </p>
        </div>
      </div>
      <Link to="/" onClick={restartGame} className="button rounded">
        Restart game
      </Link>
    </div>
  );
};

export default Result;
