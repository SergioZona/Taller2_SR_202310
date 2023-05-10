
import "./login.css";
import { useNavigate } from 'react-router-dom'

import React, { useState } from 'react'

function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // eslint-disable-next-line eqeqeq
        if (username == password) {
            navigate(`/${username}/home`);
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form method="post" onSubmit={handleLogin}>
                {error && <div className="error">{error}</div>}
                <input type="number" name="user" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn btn-primary btn-block btn-large">
                    Let me in.</button>
            </form>

        </div>
    )
}

export default Login