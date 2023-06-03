import { useState, useEffect, useContext } from 'react';

import { UserContext } from '../../store/user-context';
import Display from './display';
import Settings from './settings';

function PomodoroClock() {
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timer, setTimer] = useState(25 * 60);
    const [timerLabel, setTimerLabel] = useState('Session');
    const [timerRunning, setTimerRunning] = useState(false);
    const [mode, setMode] = useState('session');
    const { user } = useContext(UserContext);


    return (
        <div className="pomodoro-clock-container">
            <h1 className='pomodoro-clock-title'>Pomodoro Clock</h1>

            <div className="pomodoro-clock">
                <div className="pomodoro-clock__settings">
                    <Settings />
                </div>
                
                <div className="pomodoro-clock__display">
                    <Display time={timer} />
                </div>
            </div>
        </div>
    );
}

export default PomodoroClock;

// main display
// start/stop button
// reset button
// session length
// break length
// session label
// break label
// timer
// beep sound
// mode button
// mode label
// mode indicator