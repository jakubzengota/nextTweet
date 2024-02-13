'use client';
import { useState } from 'react';
import Image from 'next/image';
import FacebookIcon from '../../assets/icons/facebook.png';
import GoogleIcon from '../../assets/icons/google.png';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/Auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Rejestracja udana: ' + data.message);
        } else {
            alert('Błąd rejestracji: ' + data.message);
        }
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        if (id === 'username') setUsername(value);
        if (id === 'password') setPassword(value);
        if (id === 'email') setEmail(value);
    };

    return (
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>

            <form onSubmit={handleSubmit}>
                <h3>REGISTER HERE</h3>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
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

                <button type="submit">Register</button>
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
}

