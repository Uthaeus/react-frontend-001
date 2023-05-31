import { useNavigate } from "react-router";

function HomePage() {
    const nav = useNavigate();

    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Demo Website</h1>

            <p className="homepage-subtitle">These are a collection of projects, challenges, and examples I've created while completing courses. Registering/signing in will provide more interactivity, but certainly is not necessary. No actual data gets sent anywhere and is entirely for demonstration purposes :)</p>

            <div className="homepage-actions-wrapper">
                <button onClick={() => nav('/about')} className="homepage-button about">About Me</button>
                <button className="homepage-button portfolio">Visit My Portfolio</button>
            </div>
        </div>
    );
}

export default HomePage;