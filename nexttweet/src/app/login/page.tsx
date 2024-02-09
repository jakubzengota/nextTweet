'use client';
import { useState } from 'react';
import Image from 'next/image';
import FacebookIcon from '../../assets/icons/facebook.png';
import GoogleIcon from '../../assets/icons/google.png';

export default function Page() {
    // State variables for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Now, use state variables `username` and `password` directly
        const response = await fetch('/api/Auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Zalogowano pomyślnie: ' + data.message);
            // Redirect the user or perform another action here
        } else {
            alert('Błąd logowania: ' + data.message);
        }
    };

    // Update state variables on input change
    const handleInputChange = (event: any) => {
        const { id, value } = event.target;
        if (id === 'username') setUsername(value);
        if (id === 'password') setPassword(value);
    };

    return (
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
                <form onSubmit={handleSubmit}>
                    <h3>Login Here</h3>

                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Email or Phone"
                        id="username"
                        value={username}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={handleInputChange}
                    />

                    <button type="submit">Log In</button>
                    <div className="social">
                        <div className="go">
                            <Image src={GoogleIcon} alt="Google" width={40} height={40} /> Google
                        </div>
                        <div className="fb">
                            <Image src={FacebookIcon} alt="Facebook" width={40} height={40} /> Facebook
                        </div>
                    </div>
                </form>
            </div>
    );
};

