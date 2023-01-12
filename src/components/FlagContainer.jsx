import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FlagContext } from "../context/FlagContext";

const FlagContainer = () => {
  const {
    flags,
    setFlags,
    currentFlag,
    score,
    setScore,
    generateFlag,
    started,
    attempt,
    setAttempt,
  } = useContext(FlagContext);
  const navigate = useNavigate();
  //
  useEffect(() => {
    if (!started) {
      navigate("/", { replace: true });
    }
  }, []);
  //
  const verify = (item) => {
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
    <div className="w-100 p-2 border rounded mt-2 flag-container">
      {flags.map((item, index) => {
        return (
          <div
            className={`flag ${item.answered ? "answered" : ""}`}
            key={index}
            onClick={() => verify(item)}
          >
            <img src={item.image} alt={item.code} />
          </div>
        );
      })}
    </div>
  );
};

export default FlagContainer;
