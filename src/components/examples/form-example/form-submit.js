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

      <button
        onClick={closeSubmitHandler}
        className="form-submit-btn form-submit-close"
      >
        Close
      </button>
      <button
        onClick={closeSubmitHandler}
        className="form-submit-btn form-submit"
      >
        Submit
      </button>
    </div>
  );
}

export default FormSubmit;
