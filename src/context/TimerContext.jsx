import React, { createContext, useEffect, useState } from "react";
const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [started, setStarted] = useState(false);
  let timer;
  //
  const startTimer = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      setSecond(second + 1);
      if (second === 59) {
        setMinute(minute + 1);
        setSecond(0);
      }
    }, 1000);
  };
  //
  useEffect(() => {
    if (started) {
      startTimer();
    }
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <TimerContext.Provider
      value={{
        second,
        minute,
        timer,
        startTimer,
        started,
        setStarted,
        setSecond,
        setMinute,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerContextProvider };
