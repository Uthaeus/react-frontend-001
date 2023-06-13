function ResultA({ data }) {
  return (
    <div className="result-container">
      <div className="result-header">
        <h2 className="result-title">Result A</h2>
      </div>

      <div className="result-list-wrapper">
        <p className="result-a-list-item">
          First Name:{" "}
          <span className="result-a-list-item-span">{data.firstName}</span>
        </p>
        <p className="result-a-list-item">
          Last Name:{" "}
          <span className="result-a-list-item-span">{data.lastName}</span>
        </p>
        <p className="result-a-list-item">
          Email: <span className="result-a-list-item-span">{data.email}</span>
        </p>
        <p className="result-a-list-item">
          Mobile Number:{" "}
          <span className="result-a-list-item-span">{data.mobileNumber}</span>
        </p>
      </div>
    </div>
  );
}

export default ResultA;
