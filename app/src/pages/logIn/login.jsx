
import "./login.css";
import { Link } from 'react-router-dom'

import React from 'react'

function Login() {
    return (
        <div class="login">
            <h1>Login</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" />
                <input type="password" name="p" placeholder="Password" required="required" />
                <button type="submit" class="btn btn-primary btn-block btn-large" component={Link} to="/home/">Let me in.</button>
            </form>
        </div>
    )
}

export default Login