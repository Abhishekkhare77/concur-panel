import { Button, Column, Grid, Stack, TextInput ,Breadcrumb,BreadcrumbItem} from '@carbon/react';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const AddCredentials = () => {
    const navigate = useNavigate();
    const validateForm = () => {
        let isValid = true;
        const credentialName = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const logolink = document.getElementById('logo').value;
    
        // Validation for Notice Name
        if (credentialName.trim() === '') {
            isValid = false;
            // Display an error message for the Notice Name field
            document.getElementById('name-error').innerText = 'Please enter a valid Notice Name';
        } else {
            document.getElementById('name-error').innerText = ''; // Clear the error message
        }
        // Validation for Description
        if (description.trim() === '') {
            isValid = false;
            // Display an error message for the Description field
            document.getElementById('description-error').innerText = 'Please enter a valid Description';
        } else {
            document.getElementById('description-error').innerText = ''; // Clear the error message
        }
        if (logolink.trim() === '') {
            isValid = false;
            // Display an error message for the Description field
            document.getElementById('logo-error').innerText = 'Please enter a valid logo link';
        } else {
            document.getElementById('logo-error').innerText = ''; // Clear the error message
        }
    
        return isValid;
    };
    
    const handleAddCredentials = () => {
    
        if (validateForm()) {
            const credentialName = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const logolink = document.getElementById('logo').value;
            // Create an object with the data to send in the POST request
            const postData = {
                credentialName: credentialName,
                credentialDescription: description,
                credentialLogo:logolink,
            };
    
            // send the POST request
            const url = 'http://216.48.189.160:1114/credentials'; // API endpoint
    
            // Make the POST request
            axios
                .post(url, postData)
                .then((response) => {
                    // Handle the successful response here
                    console.log('Response:', response.data);
                    navigate('/credentials')
                })
                .catch((error) => {
                    // Handle any errors that occurred during the request
                    console.error('Error:', error);
                });
        } else {
            // Form validation failed; do not submit the form
        }
    }

    return (
        <div>
            <div>
                <Grid fullWidth>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <Breadcrumb noTrailingSlash>
                            <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
                            <BreadcrumbItem href="/datadiscovery">Data Discovery</BreadcrumbItem>
                            <BreadcrumbItem href="/credentials">Credentials</BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage href="/addcredentials">
                                Add Credentials
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <h1 className="landing-page__heading">Add Credentials</h1>
                    </Column>
                </Grid>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{ marginTop: '5rem', width: '50vw' }}>
                    <Stack gap={5}>
                        <div>
                            <TextInput id="name" type="text" labelText="Name *" required />
                            <p id="name-error" style={{ color: 'red' }}></p>
                        </div>
                        <div>
                            <TextInput id="description" type="text" labelText="Description *" required />
                            <p id="description-error" style={{ color: 'red' }}></p>
                        </div>
                        <div>
                            <TextInput id="logo" type="text" labelText="Logo link *" required />
                            <p id="logo-error" style={{ color: 'red' }}></p>
                        </div>
                    </Stack>
                </div>
            </div>
            <div style={{ position: 'absolute', right: '1rem', bottom: '1rem' }}>
                <Button onClick={handleAddCredentials}>Add Credential</Button>
            </div>
        </div>
    )
}

export default AddCredentials
