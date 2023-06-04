
function Controls({ modeChangeHandler, isRunning }) {

    return (
        <div className="controls-wrapper">
            <button className="control-btn control-mode-btn" onClick={() => modeChangeHandler('session')}>session</button>

            <button id="start_stop" className="control-btn start-stop-btn">
                {isRunning ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
            </button>
            <button id="reset" className="control-btn reset-btn">
                <i className="bi bi-arrow-clockwise"></i>
            </button>

            <button className="control-btn control-mode-btn" onClick={() => modeChangeHandler('break')}>break</button>
        </div>
    );
}

export default Controls;
