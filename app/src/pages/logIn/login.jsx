
import "./login.css";
import { Link } from 'react-router-dom'

import React from 'react'

function Login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" />
                <input type="password" name="p" placeholder="Password" required="required" />

                <Link to="/home" className="btn btn-primary btn-block btn-large">
                    Let me in.</Link>
            </form>

        </div>
    )
}

export default Login