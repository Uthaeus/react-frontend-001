import { useState } from "react";

import DrumPad from "./drum-pad";

const drums = [
    {
        keyTrigger: 'Q',
        id: 'heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyTrigger: 'W',
        id: 'heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keyTrigger: 'E',
        id: 'heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        keyTrigger: 'A',
        id: 'heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        keyTrigger: 'S',
        id: 'clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        keyTrigger: 'D',
        id: 'open-hh',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        keyTrigger: 'Z',
        id: 'kick-n-hat',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        keyTrigger: 'X',
        id: 'kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        keyTrigger: 'C',
        id: 'closed-hh',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
]

function DrumMachine() {
    const [display, setDisplay] = useState('');

    return (
        <div className="drum-machine-container">
            <h1>Drum Machine</h1>

            <div className="pads-wrapper">
                {drums.map(drum => (
                    <DrumPad key={drum.id} {...drum} updateDisplay={setDisplay} />
                ))}
            </div>

            <div className="drum-display-wrapper">
                <p className="display">{display}</p>

                <div className="drum-controls">
                    <button className="control-btn playback-btn">Playback</button>
                    <button className="control-btn reset-btn">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default DrumMachine;