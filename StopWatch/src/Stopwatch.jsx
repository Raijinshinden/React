import React, {useState, useEffect, useRef} from 'react'
import StopWatch from "./Stopwatch.jsx"
import { useRef } from "react";
import { useEffect } from "react";

function StopWatch(){
    const [isRunning, setisRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const starTimeRef = useRef(0);
  
    useEffect(() => {
  
    }, [isRunning]);
  
    function start(){
  
    }
  
    function stop(){
      
    }
  
    function reset(){
      
    }
  
    function formatTime(){
      
    }
  
    return(
          <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
              <button className="start=button" onClick={start}>Start</button>
              <button className="stop=button" onClick={stop}>Stop</button>
              <button className="reset" onClick={start}>Reset</button>
            </div>
          </div>);
}
export default StopWatch