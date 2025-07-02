import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'; // or axiosInstance if configured
import Navbar from "../component/navbar";

function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState({ email: "", password: "", general: "" });

    function change(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    async function show(e) {
        e.preventDefault();
        let lerror = { email: "", password: "", general: "" };

        // Frontend validation
        if (!data.email) {
            lerror.email = "Email is required";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
            lerror.email = "Invalid Email";
        }

        if (!data.password) {
            lerror.password = "Password is required";
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(data.password)) {
            lerror.password = "Password must include uppercase, lowercase, number, special character, and be 8+ chars";
        }

        setError(lerror);

        if (Object.values(lerror).every((item) => item === "")) {
            try {
                const response = await axios.post("http://localhost:8080/api/users/login", data);

                if (response.data.success) {
                    localStorage.setItem("userId", response.data.user.id);
                    alert("Login successful");
                    navigate("/");
                } else {
                    setError((prev) => ({ ...prev, general: response.data.message }));
                }
            } catch (error) {
                console.error("Login error:", error);
                setError((prev) => ({ ...prev, general: "Something went wrong. Please try again." }));
            }
        }
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <form className="form">
                    <h2>Login</h2>

                    <label htmlFor="email">Email:</label>
                    <input onChange={change} type="email" name="email" />
                    <p className="text-danger">{error.email}</p>

                    <label htmlFor="password">Password:</label>
                    <input onChange={change} type="password" name="password" />
                    <p className="text-danger">{error.password}</p>

                    {error.general && <p className="text-danger">{error.general}</p>}

                    <button onClick={show} name="login">LOGIN</button>
                </form>
            </div>
        </>
    );
}
export default Login;
