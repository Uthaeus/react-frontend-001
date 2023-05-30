import { useState, useEffect } from "react";

function HomePage() {
    const [welcome, setWelcome] = useState('');

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
        </div>
    );
}

export default HomePage;