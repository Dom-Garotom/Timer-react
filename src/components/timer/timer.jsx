import { useEffect, useState } from "react";
import "./style.css";
import ButtonDefault from "../buttonDefault/button";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHours] = useState(0);
  const [controle, setControle] = useState(false);

  useEffect(() => {
    let timer;
    if (controle) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds == 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
        if (minutes == 59) {
          setMinutes(0);
          setHours(hour + 1);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  });

  var start = () => {
    setControle(true);
  };

  var stop = () => {
    setControle(false);
  };

  var reset = () => {
    setControle(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <section>
      <div className="timer">
        {(hour < 10 ? "0" + hour : hour) +
          " : " +
          (minutes < 10 ? "0" + minutes : minutes) +
          " : " +
          (seconds < 10 ? "0" + seconds : seconds)}
      </div>
      <div className="actions">
        <ButtonDefault content="Start" onClick={start} />
        <ButtonDefault content="Stop" modelo="break" onClick={stop} />
        <ButtonDefault content="Reset" modelo="reset" onClick={reset} />
      </div>
    </section>
  );
}

export default Timer;
