import { useState, useRef } from "react";
import ResultModal from "./ResultModal";


export default function TimerChallenge(props) {
  
  const timer = useRef();
  
  const [timerStarted,setTimerStarted] = useState(false);
  const [timerExpired,setTimerExpired] = useState(false);

  const timerStart =()=>{
    timer.current =setTimeout((props)=>{setTimerExpired(true)},props.targetTime*1000);
    setTimerStarted(true);
  }
  const stopTimer=()=>{
    clearTimeout(timer.current);
  }
  
  return (
    <>
    {timerExpired && <ResultModal result="lost" targetTime={props.targetTime}/>}
    
    <section className="challenge">
      <h2>{props.title}</h2>
      {timerExpired && 'You lost!'} 
      <p className="challenge-time">
        {props.targetTime } second{props.targetTime>1?'s':''}
      </p>
      <p>
        <button onClick={timerStarted?stopTimer:timerStart}>{timerStarted?'Stop':'Start'}  </button>
      </p>
      <p className={timerStarted?'active':undefined}>
       {timerStarted ?'Timer is running...':'Timer is inactive'}
        
      </p>
    </section>
    </>
  );
}
