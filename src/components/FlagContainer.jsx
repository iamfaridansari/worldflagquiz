import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FlagContext } from "../context/FlagContext";
import { FaTimes } from "react-icons/fa";
import { TimerContext } from "../context/TimerContext";

const FlagContainer = () => {
  const {
    flags,
    setFlags,
    currentFlag,
    score,
    setScore,
    generateFlag,
    attempt,
    setAttempt,
    quitGame,
  } = useContext(FlagContext);
  const { started } = useContext(TimerContext);
  //
  const navigate = useNavigate();
  //
  useEffect(() => {
    if (!started) {
      navigate("/", { replace: true });
    }
  }, []);
  //
  const verify = (e, item) => {
    if (item.name.toLowerCase() === currentFlag.name.toLowerCase()) {
      setScore(score + 1);
      generateFlag();
      //
      const updatedFlags = flags.map((flag) => {
        if (flag.name.toLowerCase() === item.name.toLowerCase()) {
          return {
            ...flag,
            answered: true,
          };
        }
        return flag;
      });
      setFlags(updatedFlags);
    }
    setAttempt(attempt + 1);
  };
  return (
    <>
      <div className="w-100 mt-4 py-4 flag-container top-border">
        {flags.map((item, index) => {
          return (
            <div
              className={`flag rounded ${item.answered ? "answered" : ""}`}
              key={index}
              onClick={(e) => verify(e, item)}
            >
              <img src={item.file_url} alt={item.code} />
            </div>
          );
        })}
      </div>
      <div className="text-center top-border pt-4 pb-3">
        <Link to="/" className="button rounded" onClick={quitGame}>
          Quit game <FaTimes />
        </Link>
      </div>
    </>
  );
};

export default FlagContainer;
