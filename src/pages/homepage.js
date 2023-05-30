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
        <div>
            <h1>Home Page</h1>
            <h2>{welcome}</h2>
            {userCtx.user && <h3>Welcome {userCtx.user.username}</h3>}
        </div>
    );
}

export default HomePage;