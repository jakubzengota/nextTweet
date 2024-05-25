import Link from "next/link";
import { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event: any) => {
        alert('Only an administrator can create new accounts');

        // event.preventDefault();

        // if (password !== confirmPassword) {
        //     alert('Passwords do not match');
        //     return;
        // }

        // const response = await fetch('/api/Auth/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ username, email, password, confirmPassword }),
        // });

        // const data = await response.json();

        // if (response.ok) {
        //     alert('Rejestracja udana: ' + data.message);
        // } else {
        //     alert('Błąd rejestracji: ' + data.message);
        // }
    };

    const handleInputChange = (event: any) => {
        console.log(event)
        const { id, value } = event.target;
        if (id === 'username') setUsername(value);
        if (id === 'password') setPassword(value);
        if (id === 'confirmPassword') setConfirmPassword(value);
        if (id === 'email') setEmail(value);
    };




    return (
        <section className="register">
            <div className="loginExample">
                <span style={{color: "white"}}>Only an administrator can create new accounts</span>
            </div>
            <form className="form" onSubmit={handleSubmit}>
            <span className="loginspan">REGISTER HERE</span>
                <label htmlFor="username">Username</label>
                <input
                    className='inputImportant'
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

                <div>
                    Already have an account? <Link
                        style={{ color: "black" }}
                        href="/login"
                    >
                        <span>Sign in</span>
                    </Link>
                </div>

                <button className='button' type="submit">Register</button>
            </form>
        </section>
    )
}
export default Register;