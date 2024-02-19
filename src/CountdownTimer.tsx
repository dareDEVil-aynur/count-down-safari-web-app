import React, { useEffect, useState } from "react";
import "./App.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => time.toString().padStart(2, "0");

  return (
    <div className="countdown">
      <div className="image-container">
        <img src="/yougotthis.png" alt="Countdown" />
      </div>
      {Object.keys(timeLeft).length ? (
        <div className="timer-display">
          {Object.keys(timeLeft).map((interval) => (
            <div key={interval} className="time-section">
              <span className="time-number">
                {formatTime(timeLeft[interval])}
              </span>
              <span className="time-label">{interval.toUpperCase()}</span>
            </div>
          ))}
        </div>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
