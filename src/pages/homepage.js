import { useState, useEffect, useContext } from "react";

import { UserContext } from "../store/user-context";

function HomePage() {
    const [welcome, setWelcome] = useState('');
    const userCtx = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/home')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(responseData => {
            setWelcome(responseData.message);
        })
        .catch(error => console.log('home page error: ', error));   
    }, []);

    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Demo Website</h1>

            <p className="homepage-subtitle">These are a collection of projects, challenges, and examples I've created while completing courses. Registering/signing in will provide more interactivity, but certainly is not necessary. No actual data gets sent anywhere and is entirely for demonstration purposes :)</p>

            <div className="homepage-actions-wrapper">
                <button className="homepage-button about">About Me</button>
                <button className="homepage-button portfolio">Visit My Portfolio</button>
            </div>
        </div>
    );
}

export default HomePage;