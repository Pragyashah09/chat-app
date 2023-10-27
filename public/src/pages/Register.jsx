import React from "react";
import {Link} from "react-router-dom"; 
import styled from "styled-components";

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("form");
    };

    const handleChange = (event) => {};

    return (
        <>
            <FormContainer>
                <form onSubmit={(event) => handleSubmit (event)}>

                    <div className="brand">
                        <img src="" alt="" />
                        <h1>snappy</h1>
                    </div>
                    <input type="text" placeholder="Username" name="username" onChange={(e) > handleChange(e)}/>

                    <input type="email" placeholder="Email" name="email" onChange={(e) => handleChange(e)}/>

                    <input type="password" placeholder= "Password" name="password" onChange={(e) => handleChange(e)}/>

                    <input type="password" placeholder="Confirm Passsword" name="confirmPassword" onChange={(e) => handleChange(e)}/>

                    <button type="submit">Create User</button>

                    <span>
                        already have an account? <Link to="/login">Logins</Link>

                    </span>
                </form>
            </FormContainer>
        </>
    );
};