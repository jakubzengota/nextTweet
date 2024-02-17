"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; // import Router for navigation
import FacebookIcon from '../../assets/icons/facebook.png';
import GoogleIcon from '../../assets/icons/google.png';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter(); // initialize router

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

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
        if (id === 'confirmPassword') setConfirmPassword(value);
        if (id === 'email') setEmail(value);
    };

    const handleSignInClick = () => {
        router.push('/login'); // navigate to login page
    };

    const handleSignUpWithGoogle = () => {
        // handle sign up with Google action
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

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleInputChange}
                />

                <button type="submit">Register</button>

                <div className="social">
                    <button className="google-signup" onClick={handleSignUpWithGoogle}>
                        <Image src={GoogleIcon} alt="Google" width={20} height={20} />
                        Sign up with Google
                    </button>
                </div>
            </form>

            <div className="signin-message">
                Already have an account? <button onClick={handleSignInClick}>Sign in</button>
            </div>
        </div>
    );
}
