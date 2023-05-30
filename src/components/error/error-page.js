import { Link } from "react-router-dom";

function ErrorPage() {
    
        return (
            <div className="error-page-container">
                <h1>404</h1>
                <h2>Page not found</h2>
                <Link to="/" className="error-back-link">Go back to home</Link>
            </div>
        );
}

export default ErrorPage;