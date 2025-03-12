import React, { useState, useEffect } from "react";
import "./index.css";

function PomodoroTimer() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="pomodoro-container">
      <h1 className="pomodoro-title">Pomodoro Timer</h1>
      <div className="timer-display">{formatTime(time)}</div>
      <div className="timer-controls">
        <button onClick={() => setIsRunning(!isRunning)} className="timer-button">
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={() => setTime(25 * 60)} className="timer-button reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
