
function Controls() {

    return (
        <div className="controls-wrapper">
            <button className="control-mode-btn">session</button>

            <button id="start_stop" className="control-btn start-stop-btn">Start</button>
            <button id="reset" className="control-btn reset-btn">Reset</button>
            
            <button className="control-mode-btn">break</button>
        </div>
    );
}

export default Controls;