import Link from "next/link";
import { useState } from "react";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: any) => {
        event.preventDefault(); // Zapobiegaj domyślnej akcji formularza

        const response = await fetch("/api/Auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // alert('Zalogowano pomyślnie: ' + data.message);
            window.location.href = "/dashboard";
            // Przekieruj użytkownika do /dashboard
        } else {
            alert("Błąd logowania: " + data.message);
        }
    };

    const handleInputChange = (event: any) => {
        const { id, value } = event.target;
        if (id === "username") setUsername(value);
        if (id === "password") setPassword(value);
    };
    return (
        <section className="login">
            <form className="form" onSubmit={handleSubmit}>
                <h3>LOGIN HERE</h3>
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
                <div>
                    Don't have an account?{" "}
                    <Link style={{ color: "black" }} href="/register">
                        <span>Sign up</span>
                    </Link>
                </div>

                <button className="button" type="submit">Log In</button>
            </form>
        </section>
    )
}
export default Login;