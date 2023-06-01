import { useState } from "react";

import CalButton from "./cal-button";

function Calculator() {
    const [display, setDisplay] = useState('0');

    let buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

    function buttonClickHandler(value, type) {
        console.log(value);
    }

    return (
        <div className="calculator-container">
            <h1 className="calculator-title">Calculator</h1>

            <div className="calculator-wrapper">
                <div className="calculator-display-wrapper">
                    <p className="calculator-display">{display}</p>
                </div>

                <div className="calculator-buttons-wrapper">
                    {buttons.map(button => {
                        return <CalButton key={button} value={button} onClick={buttonClickHandler} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Calculator;