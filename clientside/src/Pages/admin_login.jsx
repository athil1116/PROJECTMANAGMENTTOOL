import { useState } from "react";
import Navbar from "../component/navbar";
import "../styles/login.css"
function Admin_login() {
    const [data, setData] = useState({ username: "", password: "" })
    const [error, setError] = useState({ username: "", password: "" })
    function change(e) {
        e.preventDefault()
        setData({ ...data, [e.target.name]: e.target.value })
    }
    function show(e) {
        e.preventDefault()
        let lerror = { username: "", password: "" }
        console.log(data)
        if (data.username == "") {
            lerror.username = "Username is required"
        }
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.username)) {
            lerror.username = "Invalid Username"
        }
        else {
            lerror.username = ""
        }
        if (data.password == "") {
            lerror.password = "Password is required"
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.password)) {
            lerror.password = "Atleast 8 characters including 1 uppercase, 1 lowercase, 1 number and 1 special character"
        }
        else {
            lerror.password = ""
        }
        setError({ ...lerror })
        if (Object.values(lerror).every(function (item) {
            return item === ""
        })) {
            alert("Logged in Successfully")
        }
        else {
            alert("Invalid Credentials")
        }
    }
    return (
        <>
        <Navbar/>
        <div className="container">
            <form action="" className="form">
                <h2>Login</h2>
                <label htmlFor="username">Username:</label>
                <input onChange={change} type="email" name="username" />
                <p className="text-danger">{error.username}</p>
                <label htmlFor="password">Password:</label>
                <input onChange={change} type="password" name="password" />
                <p className="text-danger">{error.password}</p>
                <button onClick={show} name="login">LOGIN</button>
            </form>
        </div>
        </>
    )
}

export default Admin_login;