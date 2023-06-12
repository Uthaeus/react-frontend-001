
import ResultA from "./result-a";
import ResultB from "./result-b";
import ResultC from "./result-c";
import ResultD from "./result-d";

function FormSubmit({ data, type }) {

    return (
        <div className="form-submit-container">
            <h1 className="form-submit-title">Form Submit</h1>
            <hr />

            {type === 'A' && <ResultA data={data} />}
            {type === 'B' && <ResultB data={data} />}
            {type === 'C' && <ResultC data={data} />}
            {type === 'D' && <ResultD data={data} />}

            <hr />
            
        </div>
    );
}

export default FormSubmit;