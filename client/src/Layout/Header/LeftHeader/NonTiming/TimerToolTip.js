import React, { useEffect} from "react";
import { useHistory } from "react-router-dom";
import { ForwardArrowWhite } from "../../../../utils/Icons/Header/LeftHeader";

export default function TimerToolTip (props) {
    const { setIsTimerRunning,
            setSession,
            focusInterval, 
            setFocusInterval,
            breakInterval, 
            setBreakInterval,
          } = props

    const handleFocus = ({target}) => setFocusInterval(() => target.value)
    const handleBreak = ({target}) => setBreakInterval(() => target.value)    
    // useEffect (() => {
    //   window.localStorage.setItem('storedFocusInterval',JSON.stringify(focusInterval))
    //   window.localStorage.setItem('storedBreakInterval',JSON.stringify(breakInterval))
    // })
    
    const history = useHistory()
    const handleClick = () => {
      //Fix a pomodoro bug by storing focusInterval and breakInterval over here
      //Save focusInterval, breakInterval and session to the localstorage
      window.localStorage.setItem('storedFocusInterval',JSON.stringify(focusInterval))
      window.localStorage.setItem('storedBreakInterval',JSON.stringify(breakInterval))
        //Switch the "pause" state variable when the playPause button is clicked 
        setIsTimerRunning((prevState) => {
          // window.localStorage.setItem('Url',JSON.stringify("/Timer"))
          // history.push("/Timer")
          window.localStorage.setItem('setTimer',JSON.stringify(true))
          const nextState = !prevState;
          if (nextState) {            
            setSession((prevStateSession) => {
              // If the timer is starting and the previous session is null,
              // start a focusing session.
              if (prevStateSession === null) {
                const initialSession = {
                  label: "Focusing",
                  // timeRemaining: focusInterval * 60,
                  interval: focusInterval,
                  timeElapsed: 0,
                  process:0,
                  numSession: 1
                };
                window.localStorage.setItem('storedSession',JSON.stringify(initialSession))
                return initialSession
              }
              return prevStateSession;
            });        
          }
          return nextState;
        });
      }

    return (
      <div  className = "toolTip"
            id = "timerToolTip"
      >
        <div  
              className = "flex-nowrap d-flex toolTipBar timerToolTipBar"          
            >
          <form
                className ="d-flex justify-content-center align-items-center "
                onSubmit = {handleClick}
                >
            {/* <div  
                className ="d-flex justify-content-center align-items-center "></div> */}
            <input  id = "focusInterval"
                    type ="text"
                    name = "focusInterval"
                    className ="durationInput" 
                        // value = {focusInterval}
                    placeholder = "Focus"
                    onChange = {handleFocus}
            ></input>
            <input  id = "breakInterval"
                    type ="text"
                    name = "breakInterval"
                    className ="durationInput"
                    placeholder = "Break"
                    //   value = {breakInterval}
                    onChange = {handleBreak}
            ></input>  
            <button type = "submit"
                    id = "timerSubmitBtn"
                    className =" forwardBtn d-flex align-items-center justify-content-center"
                    onClick ={handleClick}    
                    >
            <ForwardArrowWhite />
            </button>
          </form>
          {/* </div> */}
        </div>        
      </div>
    )
}