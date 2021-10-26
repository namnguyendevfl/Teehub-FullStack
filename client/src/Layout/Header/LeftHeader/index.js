import React from "react";
import { Switch, Route,useHistory } from "react-router-dom";
import { Home } from "../../../utils/Icons/Header/LeftHeader";
import NonTiming from "./NonTiming";
import Timing from "./Timing";
export default function LeftHeader (prop) {
    const { 
        isTimerRunning, 
        setIsTimerRunning,  
        session, 
        setSession,
        focusInterval, 
        setFocusInterval,
        setBreakInterval,
        breakInterval,  
    } = prop
    let setTimer = window.localStorage.getItem('setTimer')
    setTimer = JSON.parse(setTimer)
    
    return <>
            {setTimer
            ? <Timing
                isTimerRunning = {isTimerRunning} 
                setIsTimerRunning = {setIsTimerRunning}
                focusInterval = {focusInterval} 
                setFocusInterval={setFocusInterval}
                breakInterval = {breakInterval} 
                setBreakInterval={setBreakInterval}
                session = {session} 
                setSession = {setSession}  
            />
            :  <NonTiming 
                isTimerRunning = {isTimerRunning} 
                setIsTimerRunning = {setIsTimerRunning}
                focusInterval = {focusInterval} 
                setFocusInterval={setFocusInterval}
                breakInterval = {breakInterval} 
                setBreakInterval={setBreakInterval}
                session = {session} 
                setSession = {setSession}  
            />
            }
            {/* <Switch>
                <Route exact path = "/">
                    <NonTiming 
                             isTimerRunning = {isTimerRunning} 
                             setIsTimerRunning = {setIsTimerRunning}
                             focusInterval = {focusInterval} 
                             setFocusInterval={setFocusInterval}
                             breakInterval = {breakInterval} 
                             setBreakInterval={setBreakInterval}
                             session = {session} 
                             setSession = {setSession}  
                    />
                </Route> 
                <Route path = "/Timer">
                    <Timing
                             isTimerRunning = {isTimerRunning} 
                             setIsTimerRunning = {setIsTimerRunning}
                             focusInterval = {focusInterval} 
                             setFocusInterval={setFocusInterval}
                             breakInterval = {breakInterval} 
                             setBreakInterval={setBreakInterval}
                             session = {session} 
                             setSession = {setSession}  
                    />
                </Route>
            </Switch> */}
    </>
}