import React from 'react'
import { Button, Stack, TextInput } from '@carbon/react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
            <div style={{ border: '1px solid gray', padding: '2rem 3rem' }}>
                <Stack gap={4}>
                    <h3 style={{ textAlign: 'center' }}>Login</h3>
                    <TextInput
                        type='email'
                        id="login_email"
                        invalidText="Invalid Email"
                        labelText="Email"
                    />
                    <TextInput
                        type='password'
                        id="login_password"
                        invalidText="Invalid Password"
                        labelText="Password"
                    />
                    <Link to={'/terms'}><Button>Login</Button></Link>
                    <Link to={'/register'} style={{ textAlign: 'center', textDecoration: 'none' }}>Not Registered Yet?</Link>
                </Stack>
            </div>
            <Link to={'/forgot-password'} style={{ textAlign: 'center', textDecoration: 'none', marginTop: '1rem' }}>Forgot Password?</Link>
        </>
    )
}

export default LoginPage
