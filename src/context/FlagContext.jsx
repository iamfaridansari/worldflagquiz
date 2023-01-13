import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.js";
import { TimerContext } from "./TimerContext.jsx";
const FlagContext = createContext();

const FlagContextProvider = ({ children }) => {
  const [flags, setFlags] = useState([]);
  const [question, setQuestion] = useState([]);
  const [limit, setLimit] = useState(10);
  const [currentFlag, setCurrentFlag] = useState({});
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  //
  const { setStarted, timer, setSecond, setMinute } = useContext(TimerContext);
  //
  const navigate = useNavigate();
  //
  const getFlags = async () => {
    setStarted(true);
    const temp = data.map((item) => {
      return { ...item, answered: false };
    });
    setFlags(rearrangeFlags(temp).splice(0, limit));
  };
  //
  const rearrangeFlags = (temp) => {
    let currentIndex = temp.length;
    let randomIndex = "";

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [temp[currentIndex], temp[randomIndex]] = [
        temp[randomIndex],
        temp[currentIndex],
      ];
    }
    return temp;
  };
  //
  const generateFlag = () => {
    if (score === limit) {
      setAccuracy((score / attempt) * 100);
      setStarted(false);
      clearInterval(timer);
      navigate("/result", { replace: true });
    } else {
      let random = question[Math.floor(Math.random() * question.length)];
      setCurrentFlag(random);
    }
  };
  useEffect(() => {
    const everyFalse = flags.every((item) => {
      return item.answered === false;
    });
    if (everyFalse) {
      setQuestion(flags);
    } else {
      const updatedQuestion = flags.filter((flag) => {
        return flag.answered === false;
      });
      setQuestion(updatedQuestion);
    }
  }, [flags]);
  useEffect(() => {
    generateFlag();
  }, [question]);
  //
  const quitGame = () => {
    setFlags([]);
    setQuestion([]);
    setLimit(10);
    setCurrentFlag({});
    setScore(0);
    setAttempt(0);
    setAccuracy(0);
    setStarted(false);
    //
    setSecond(0);
    setMinute(0);
    clearInterval(timer);
  };
  //
  return (
    <FlagContext.Provider
      value={{
        flags,
        setFlags,
        limit,
        setLimit,
        currentFlag,
        generateFlag,
        score,
        setScore,
        getFlags,
        question,
        setQuestion,
        attempt,
        setAttempt,
        quitGame,
      }}
    >
      {children}
    </FlagContext.Provider>
  );
};

export { FlagContext, FlagContextProvider };
