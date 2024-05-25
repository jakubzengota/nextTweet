import Link from "next/link";
import { useState } from "react";
import Loading from "../../assets/ZKZg.gif";
import Image from "next/image";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault(); // Zapobiegaj domyślnej akcji formularza
        setIsLoading(true)
        const response = await fetch("/api/Auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        

        if (response.ok) {
            
            setUserId(data?.user_id)
            
            window.location.href = "/dashboard";
            setIsLoading(false)
        } else {
            setIsLoading(false)
            setError(data.message || "Nieprawidłowe dane lub błąd logowania.");
        }
    };

    const handleInputChange = (event: any) => {
        const { id, value } = event.target;
        if (id === "username") setUsername(value);
        if (id === "password") setPassword(value);
    };
    return (
        <section className="login">
             {error && <div className="error-message">{error}</div>}
            <div className="loginExample">
                <span style={{color: "white"}}>Login: emilyjones@example.com</span>
                <span style={{color: "white"}}>Password: Passw0rd$A</span>
            </div>

            {isLoading ? 
           <div className="loading">
            <Image src={Loading} alt="" width={30} height={30}/>
           </div>
           
           :
           
           <form className="form" onSubmit={handleSubmit}>
                <span className="loginspan">LOGIN HERE</span>
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
                <div className="dontHaveAcc">
                    <span>Dont have an account?</span>
                    <Link style={{ color: "black" }} href="/register">
                        <span>Sign up</span>
                    </Link>
                </div>

                <button className="button" type="submit">Log In</button>
            </form>}
            
           
        </section>
    )
}
export default Login;