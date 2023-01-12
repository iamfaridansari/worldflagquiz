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
    <div className="container p-2">
      <div className="row align-items-center justify-content-center my-sm-4 mx-auto">
        <div className="col-lg-4 col-md-5 col-sm-6 text-center border rounded p-2 px-sm-4">
          <h1 className="text-capitalize">World flag quiz</h1>
          <div className="my-2">
            <p>
              Score :{" "}
              <strong className="fs-5">
                {score} / {limit}
              </strong>
            </p>
            <p>
              Accuracy :{" "}
              <strong className="fs-5">
                {Math.round((score / attempt) * 100)}%
              </strong>
            </p>
          </div>
          <Link
            to="/"
            onClick={restartGame}
            className="btn btn-primary bg-gradient"
          >
            Restart game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
