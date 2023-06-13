import ResultA from "./result-a";
import ResultB from "./result-b";
import ResultC from "./result-c";
import ResultD from "./result-d";

function FormSubmit({ data, type, closeSubmitHandler }) {
  return (
    <div className="form-submit-container">
      <h1 className="form-submit-title">Form Submit</h1>
      <hr />

      {type === "A" && <ResultA data={data} />}
      {type === "B" && <ResultB data={data} />}
      {type === "C" && <ResultC data={data} />}
      {type === "D" && <ResultD data={data} />}

      <hr />

        <div className="form-submit-actions">
            <button onClick={closeSubmitHandler} className="form-submit-btn reset-btn">Reset</button>
            <button
                onClick={closeSubmitHandler}
                className="form-submit-btn edit-btn"
            >
                Edit
            </button>
            <button
                onClick={closeSubmitHandler}
                className="form-submit-btn submit-btn"
            >
                Submit
            </button>
        </div>
    </div>
  );
}

export default FormSubmit;
