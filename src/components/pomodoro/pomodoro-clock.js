import { useState, useEffect, useContext } from 'react';

import { UserContext } from '../../store/user-context';
import Display from './display';
import Settings from './settings';

function PomodoroClock() {
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [displayTime, setDisplayTime] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('session');
    const { user } = useContext(UserContext);

    function resetHandler() {
        setSessionLength(25);
        setBreakLength(5);
        setDisplayTime(25 * 60);
        setMode('session');
        setIsRunning(false);
    }

    function startStopHandler() {
        console.log('startStopHandler');
        let now = Date.now();
                let then = now + displayTime * 1000;
        let countdown;

        if (isRunning) {
            clearInterval(countdown);
        } else {
            countdown = setInterval(() => {
                console.log('tick');
                
                let secondsLeft = Math.round((then - Date.now()) / 1000);
                if (secondsLeft < 0) {
                    clearInterval(countdown);
                    if (mode === 'session') {
                        setMode('break');
                        setDisplayTime(breakLength * 60);
                    } else if (mode === 'break') {
                        setMode('session');
                        setDisplayTime(sessionLength * 60);
                    }
                    return;
                }
                setDisplayTime(secondsLeft);
            }, 400);
        }

        setIsRunning(prevState => !prevState);
    }

    function timeChangeHandler(type, action) {
        
        if (type === 'session') {
            if (action === 'inc') {
                setSessionLength(prevLength => prevLength + 1);
                if (mode === 'session') setDisplayTime(prevLength => prevLength + 60);
            } else if (action === 'dec') {
                setSessionLength(prevLength => prevLength - 1);
                if (mode === 'session') setDisplayTime(prevLength => prevLength - 60);
            }
        } else if (type === 'break') {
            if (action === 'inc') {
                setBreakLength(prevLength => prevLength + 1);
                if (mode === 'break') setDisplayTime(prevLength => prevLength + 60);
            } else if (action === 'dec') {
                setBreakLength(prevLength => prevLength - 1);
                if (mode === 'break') setDisplayTime(prevLength => prevLength - 60);
            }
        }
    } 
    
    function modeChangeHandler(m) {
        setMode(m);
        if (m === 'session') {
            setDisplayTime(sessionLength * 60);
        } else if (m === 'break') {
            setDisplayTime(breakLength * 60);
        }
    }

    return (
        <div className="pomodoro-clock-container">
            <h1 className='pomodoro-clock-title'>Pomodoro Clock</h1>

            <div className="pomodoro-clock">
                <div className="pomodoro-clock__settings">
                    <Settings 
                        user={user}
                        sessionLength={sessionLength}
                        breakLength={breakLength}
                        mode={mode}
                        timeChangeHandler={timeChangeHandler}
                        modeChangeHandler={modeChangeHandler}
                        isRunning={isRunning}
                        resetHandler={resetHandler}
                        startStopHandler={startStopHandler}
                    />
                </div>

                <div className="pomodoro-clock__display">
                    <Display time={displayTime} />
                </div>
            </div>
        </div>
    );
}

export default PomodoroClock;
