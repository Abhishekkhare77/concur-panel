import React from 'react'
import { Button, Stack, TextInput } from '@carbon/react'
import { Link } from 'react-router-dom'

const ResetPassPage = () => {
    return (
        <>
            <div style={{ border: '1px solid gray', padding: '2rem 3rem' }}>
                <Stack gap={4}>
                    <h3 style={{ textAlign: 'center' }}>Reset Password</h3>
                    <TextInput
                        type='password'
                        id="reset_password"
                        invalidText="Invalid Email"
                        labelText="New Password"
                    />
                    <TextInput
                        type='password'
                        id="reset_cpassword"
                        invalidText="Invalid Password"
                        labelText="Confirm Password"
                    />
                    <Link to={'/terms'}><Button>Reset</Button></Link>
                </Stack>
            </div>
            <Link to={'/login'} style={{ textAlign: 'center', textDecoration: 'none', marginTop: '1rem' }}>Already have an account?</Link>
        </>
    )
}

export default ResetPassPage
