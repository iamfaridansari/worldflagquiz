import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const FlagContext = createContext();

const FlagContextProvider = ({ children }) => {
  const [flags, setFlags] = useState([]);
  const [question, setQuestion] = useState([]);
  const [started, setStarted] = useState(false);
  const [limit, setLimit] = useState(10);
  const [currentFlag, setCurrentFlag] = useState({});
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  //
  const navigate = useNavigate();
  //
  const getFlags = async () => {
    setStarted(true);
    try {
      const res = await fetch(
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json"
      );
      const data = await res.json();
      if (res.status === 200) {
        const temp = data.map((item) => {
          return { ...item, answered: false };
        });
        setFlags(rearrangeFlags(temp).splice(0, limit));
      }
    } catch (error) {
      console.log(error);
    }
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
  const restartGame = () => {
    setFlags([]);
    setQuestion([]);
    setStarted(false);
    setLimit(10);
    setCurrentFlag({});
    setScore(0);
    setAttempt(0);
    setAccuracy(0);
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
        started,
        setStarted,
        question,
        setQuestion,
        attempt,
        setAttempt,
        restartGame,
      }}
    >
      {children}
    </FlagContext.Provider>
  );
};

export { FlagContext, FlagContextProvider };
