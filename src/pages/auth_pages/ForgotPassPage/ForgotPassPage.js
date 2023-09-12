import React from 'react'
import { Button, Stack, TextInput } from '@carbon/react'
import { Link } from 'react-router-dom'

const ForgotPassPage = () => {
    return (
        <>
            <div style={{ border: '1px solid gray', padding: '2rem 3rem' }}>
                <Stack gap={4}>
                    <h3 style={{ textAlign: 'center' }}>Forgot Password</h3>
                    <TextInput
                        type='email'
                        id="login_email"
                        invalidText="Invalid Email"
                        labelText="Email"
                    />
                    <Link to={'/reset-password'}><Button>Reset Password</Button></Link>
                </Stack>
            </div>
            <Link to={'/register'} style={{ textAlign: 'center', textDecoration: 'none', marginTop:'1rem' }}>New Register?</Link>
        </>
    )
}

export default ForgotPassPage
