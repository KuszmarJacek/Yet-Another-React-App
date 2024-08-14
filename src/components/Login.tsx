import { useState } from "react"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import axios from "axios"
import Carlist from "./Carlist"
import Snackbar from '@mui/material/Snackbar'

type User = {
    username: string;
    password: string;
}

// This is dogwater.
// Should probably use HttpOnly cookie instead of sessionStorage due to potential XSS attacks. Use PKCE flow or BFF design for the best solution.
function Login() {
    const [user, setUser] = useState<User>({
        username: "",
        password: ""
    });

    const [open, setOpen] = useState(false)

    const [isAuthenticated, setAuth] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const handleLogin = () => {
        axios.post(import.meta.env.VITE_API_URL + "/login", user, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            const jwtToken = res.headers.authorization
            if (jwtToken != null) {
                //THIS IS AWFUL DON'T DO THIS IN PRODUCTION
                sessionStorage.setItem("jwt", jwtToken)
                setAuth(true)
            }
        })
        .catch(() => setOpen(true))
    }

    const handleLogout = () => {
        setAuth(false)
        sessionStorage.setItem("jwt", "")
    }

    if (isAuthenticated) {
        return <Carlist logOut={handleLogout} />
    } else {
        return (
            <>
                <Stack spacing={2} alignItems="center" mt={2}>
                    <TextField
                        name="username"
                        label="Username"
                        onChange={handleChange} />
                    <TextField
                        type="password"
                        name="password"
                        label="Password"
                        onChange={handleChange} />
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleLogin}>
                            Login
                    </Button>
                    <Snackbar 
                        open={open}
                        autoHideDuration={3000}
                        onClose={() => setOpen(false)}
                        message="Login failed: Check your username and password"/>
                </Stack>
            </>
        )
    }

}

export default Login