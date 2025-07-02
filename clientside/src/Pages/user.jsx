import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this for navigation
import Navbar from "../component/navbar";
import '../styles/registration.css';
import axios from "axios";

function Registration() {
    const [data, setData] = useState({
        name: "", address: "", cnumber: "", district: "", city: "",
        gender: "", email: "", dob: "", password: ""
    });

    const [error, setError] = useState({
        name: "", address: "", cnumber: "", district: "", city: "",
        gender: "", email: "", dob: "", password: ""
    });

    const navigate = useNavigate(); // For redirect after registration

    function change(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    async function submit(e) {
        e.preventDefault();

        let localerror = {};
        if (!data.name) localerror.name = "Name is required";
        if (!data.address) localerror.address = "Address is required";
        if (!data.cnumber) localerror.cnumber = "Contact number is required";
        else if (data.cnumber.length < 10) localerror.cnumber = "Contact number should be 10 digits";
        if (!data.district) localerror.district = "District is required";
        if (!data.city) localerror.city = "City is required";
        if (!data.gender) localerror.gender = "Gender is required";
        if (!data.email) localerror.email = "Email is required";
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) localerror.email = "Invalid format";
        if (!data.dob) localerror.dob = "DOB is required";
        if (!data.password) localerror.password = "Password is required";

        setError(localerror);

        if (Object.values(localerror).every(val => val === "")) {
            try {
                const response = await axios.post("http://localhost:8080/api/users/register", data); // sending raw JSON

                if (response.data.success) {
                    alert("User registered successfully!");
                    navigate("/login");
                } else {
                    alert(response.data.message || "Registration failed");
                }
            } catch (error) {
                console.error("Registration error:", error);
                alert("Something went wrong. Please try again.");
            }
        }
    }

    return (
        <>
            <Navbar />
            <div className="user-div">
                <div className="container">
                    <form className="user">
                        <label>Name :</label>
                        <input onChange={change} name="name" type="text" />
                        <p className="text-danger">{error.name}</p>

                        <label>Address :</label>
                        <input onChange={change} name="address" type="text" />
                        <p className="text-danger">{error.address}</p>

                        <label>Contact Number :</label>
                        <input onChange={change} name="cnumber" type="text" />
                        <p className="text-danger">{error.cnumber}</p>

                        <label>District :</label>
                        <input onChange={change} name="district" type="text" />
                        <p className="text-danger">{error.district}</p>

                        <label>City :</label>
                        <input onChange={change} name="city" type="text" />
                        <p className="text-danger">{error.city}</p>

                        <label htmlFor="gender">Gender: </label>
                        <div id="radio" className="d-flex gap-2">
                            <input onChange={change} type="radio" name="gender" value="male" />
                            <label>Male</label>
                            <input onChange={change} type="radio" name="gender" value="female" />
                            <label>Female</label>
                            <input onChange={change} type="radio" name="gender" value="other" />
                            <label>Other</label>
                        </div>
                        <p className="text-danger">{error.gender}</p>

                        <label>DOB :</label>
                        <input onChange={change} name="dob" type="date" />
                        <p className="text-danger">{error.dob}</p>

                        <label>Email :</label>
                        <input onChange={change} name="email" type="email" />
                        <p className="text-danger">{error.email}</p>

                        <label>Password :</label>
                        <input onChange={change} name="password" type="password" />
                        <p className="text-danger">{error.password}</p>

                        <button onClick={submit} className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Registration;
