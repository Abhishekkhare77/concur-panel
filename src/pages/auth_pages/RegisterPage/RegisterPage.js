import React from 'react'
import { Button, Stack, TextInput } from '@carbon/react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <>
            <div style={{ border: '1px solid gray', padding: '2rem 3rem' }}>
                <Stack gap={4}>
                    <h3 style={{ textAlign: 'center' }}>Register</h3>
                    <TextInput
                        type='email'
                        id="register_email"
                        invalidText="Invalid Email"
                        labelText="Email"
                    />
                    <TextInput
                        type='password'
                        id="register_password"
                        invalidText="Invalid Password"
                        labelText="Password"
                    />
                    <TextInput
                        type='password'
                        id="register_cpassword"
                        invalidText="Invalid Password"
                        labelText="Confirm Password"
                    />
                    <Button>Register</Button>
                </Stack>
            </div>
            <Link to={'/login'} style={{ textAlign: 'center', textDecoration: 'none',marginTop:'1rem' }}>Already Registered?</Link>
        </>
    )
}

export default RegisterPage
