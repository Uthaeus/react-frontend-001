import { useState } from "react";

import ExampleFormA from "./example-form-a";
import ExampleFormB from "./example-form-b";
import ExampleFormC from "./example-form-c";
import ExampleFormD from "./example-form-d";

function  FormExample() {
    const [form, setForm] = useState("A");

    const formSubmitHandler = (data) => {
        console.log(data);
    };

    return (
        <div className="form-example-container">
            <h1 className="form-example-title">Form Example</h1>

            <div className="form-example-selector-wrapper">
                <button onClick={() => setForm('A')} className={`form-example-selector ${form === 'A' && 'selector-active'}`}>Form A</button>
                <button onClick={() => setForm('B')} className={`form-example-selector ${form === 'B' && 'selector-active'}`}>Form B</button>
                <button onClick={() => setForm('C')} className={`form-example-selector ${form === 'C' && 'selector-active'}`}>Form C</button>
                <button onClick={() => setForm('D')} className={`form-example-selector ${form === 'D' && 'selector-active'}`}>Form D</button>
            </div>

            <div className="form-example-form-wrapper">
                {form === 'A' && <ExampleFormA submitHandler={formSubmitHandler} />}
                {form === 'B' && <ExampleFormB submitHandler={formSubmitHandler} />}
                {form === 'C' && <ExampleFormC submitHandler={formSubmitHandler} />}
                {form === 'D' && <ExampleFormD submitHandler={formSubmitHandler} />}
            </div>
        </div>
    );
}

export default FormExample;