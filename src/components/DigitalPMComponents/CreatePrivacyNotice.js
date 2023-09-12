import React, { useEffect, useState } from 'react';
import {
    Column,
    Grid,
    ProgressIndicator,
    ProgressStep,
    Breadcrumb,
    BreadcrumbItem,
    ClickableTile,
    TextInput,
    Stack,
    Button,
    Tag,
    Select,
    SelectItem,
} from '@carbon/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePrivacyNotice = () => {
    const [step, setStep] = useState(0);
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate();

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setTags([...tags, inputValue.trim()]);
            setInputValue(''); // Clear the input field after adding the tag
        }
    };

    const [allTemplateData, setAllTemplateData] = useState([]);
    useEffect(() => {
        const options = {
            method: "GET",
            url: "http://216.48.189.160:1114/privacyNoticeTemplate/get",
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setAllTemplateData(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);
    const [templateId, setTemplateId] = useState('');
    const [layout, setLayout] = useState('');


    const handleTemplateClick = (templateId) => {
        setTemplateId(templateId);
    };

    // Handle layout click
    const handleLayoutClick = (layoutName) => {
        setLayout(layoutName);
    };


    const validateForm = () => {
        let isValid = true;
        const noticeName = document.getElementById('name').value;
        const mainUser = document.getElementById('mainUser').value;
        const description = document.getElementById('description').value;
        const tags = document.getElementById('tags').value;

        // Validation for Notice Name
        if (noticeName.trim() === '') {
            isValid = false;
            // Display an error message for the Notice Name field
            document.getElementById('name-error').innerText = 'Please enter a valid Notice Name';
        } else {
            document.getElementById('name-error').innerText = ''; // Clear the error message
        }

        // Validation for Main User
        if (mainUser.trim() === '') {
            isValid = false;
            // Display an error message for the Main User field
            document.getElementById('mainUser-error').innerText = 'Please enter a valid Main User';
        } else {
            document.getElementById('mainUser-error').innerText = ''; // Clear the error message
        }

        // Validation for Description
        if (description.trim() === '') {
            isValid = false;
            // Display an error message for the Description field
            document.getElementById('description-error').innerText = 'Please enter a valid Description';
        } else {
            document.getElementById('description-error').innerText = ''; // Clear the error message
        }

        return isValid;
    };


    const handleAddPolicy = () => {

        if (validateForm()) {
            const noticeName = document.getElementById('name').value; // Get the Section Name from the input
            const defaultLanguage = document.getElementById('select-1').value; // Get the Default Language from the select input
            const mainUser = document.getElementById('mainUser').value; // Get the Description from the textarea
            const description = document.getElementById('description').value;
            // Create an object with the data to send in the POST request
            const postData = {
                privacyNoticeLayout: layout,
                privacyNoticeName: noticeName,
                privacyNoticeOrganisation: "Catax",
                privacyNoticedefaultLanguage: defaultLanguage,
                privacyNoticeLanguages: [],
                privacyNoticeDescription: description,
                privacyNoticeNoticeTags: tags.join(', '),
                privacyNoticeOwner: mainUser,
                privacyNoticeCreatedBy: "John Doe",
                privacyNoticeUpdatedBy: "John Doe",
                privacyNoticetemplateId: [templateId],
                privacyNoticeSection: [
                    "string"
                ]
            };

            // Define the URL where you want to send the POST request
            const url = 'http://216.48.189.160:1114/privacyNotice/create'; // Replace with your API endpoint

            // Make the POST request
            axios
                .post(url, postData)
                .then((response) => {
                    // Handle the successful response here
                    console.log('Response:', response.data);
                    navigate('/privacynotices')
                    // Close the modal after a successful POST
                })
                .catch((error) => {
                    // Handle any errors that occurred during the request
                    console.error('Error:', error);
                });
        } else {
            // Form validation failed; do not submit the form
        }
    }
    const handleNextStep = () => {
        if (step < 3) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (step > 0) {
            setStep((prevStep) => prevStep - 1);
        }
    };

    let bodyContent;

    switch (step) {
        case 0:
            bodyContent = (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '60vh',
                    }}
                >
                    <ClickableTile
                        onClick={() => setStep(2)}
                        style={{ width: '300px', textAlign: 'center', cursor: 'pointer' }} // Added cursor pointer
                        href="#"
                    >
                        Create Your Own
                    </ClickableTile>
                    <ClickableTile
                        onClick={() => {
                            handleNextStep(); // Skip to the third step when "Create Your Own" is clicked
                        }}
                        style={{ width: '300px', textAlign: 'center', cursor: 'pointer' }} // Added cursor pointer
                        href="#"
                    >
                        Create From Template
                    </ClickableTile>
                </div>
            );
            break;
        case 1:
            bodyContent = (
                <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: "1rem 3rem" }}>
                        {allTemplateData.map((template, index) => (
                            <ClickableTile
                                key={index}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '250px', width: '250px' }}
                                href={'#'}
                                onClick={() => handleTemplateClick(template._id)}
                            >
                                <div>
                                    {template.privacyNoticeName}
                                    <br />
                                    <br />
                                </div>
                                <img src="https://cdn-icons-png.flaticon.com/512/2343/2343640.png" alt="icon" style={{ height: '70px', width: '70px' }} />
                                <div style={{ position: 'absolute', bottom: '.5rem', left: '.5rem' }}>
                                    <Tag className="some-class" type="high-contrast" title="Clear Filter">
                                        {template.privacyNoticeNoticeTags}
                                    </Tag>
                                </div>
                            </ClickableTile>
                        ))}
                    </div>
                </div>
            );
            break;
        case 2:
            bodyContent = (
                <div style={{ marginTop: '1rem', left: '3rem' }}>
                    <h3>Choose Privacy Layout</h3>
                    <div style={{ marginTop: '1rem' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '10px',
                            }}
                        >
                            <ClickableTile
                                style={{ height: '150px', width: '150px', cursor: 'pointer' }} // Added cursor pointer
                                href="#"
                                onClick={() => handleLayoutClick("No Defined Layout")}
                            >
                                No Defined Layout
                            </ClickableTile>
                            <ClickableTile
                                style={{ height: '150px', width: '150px', cursor: 'pointer' }} // Added cursor pointer
                                href="#"
                                onClick={() => handleLayoutClick("Align Left")}
                            >
                                Align Left
                            </ClickableTile>
                            <ClickableTile
                                style={{ height: '150px', width: '150px', cursor: 'pointer' }} // Added cursor pointer
                                href="#"
                                onClick={() => handleLayoutClick("Align Right")}
                            >
                                Align Right
                            </ClickableTile>
                            <ClickableTile
                                style={{ height: '150px', width: '150px', cursor: 'pointer' }} // Added cursor pointer
                                href="#"
                                onClick={() => handleLayoutClick("Centered")}
                            >
                                Centered
                            </ClickableTile>
                        </div>
                    </div>
                </div>
            );
            break;
        case 3:
            bodyContent = (
                <div style={{ marginTop: '1rem', width: '50vw' }}>
                    <Stack gap={5}>
                        <div>
                            <TextInput id="name" type="text" labelText="Name *" required />
                            <p id="name-error" style={{ color: 'red' }}></p>
                        </div>
                        <Select id="select-1" defaultValue="English" labelText="Default language *" required>
                            <SelectItem value="English" text="English" />
                            <SelectItem value="Hindi" text="Hindi" />
                        </Select>
                        <div>
                            <TextInput id="mainUser" type="text" labelText="Main User *"  required/>
                            <p id="mainUser-error" style={{ color: 'red' }}></p>
                        </div>
                        <div>
                            <TextInput id="description" type="text" labelText="Description *" required />
                            <p id="description-error" style={{ color: 'red' }}></p>
                        </div>
                        <div>
                            <TextInput
                                id="tags"
                                type="text"
                                labelText="Tags"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyUp={handleKeyPress}
                            />
                            <p id="tags-error" style={{ color: 'red' }}></p>
                        </div>
                        <div>
                            {tags.map((item, index) => (
                                <Tag className="some-class" type="high-contrast" title="Clear Filter" key={index}>
                                    {item}
                                </Tag>
                            ))}
                        </div>
                    </Stack>
                </div>
            );
            break;
        default:
            bodyContent = null;
    }

    return (
        <div>
            <div>
                <Grid fullWidth>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <Breadcrumb noTrailingSlash>
                            <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
                            <BreadcrumbItem href="/digitalpolicymanagement">Digital Policy Management</BreadcrumbItem>
                            <BreadcrumbItem href="/internalpolicy">Internal Policy</BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage href="/policyview">
                                Policy View
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <h1 className="landing-page__heading">Create Privacy Notice</h1>
                    </Column>
                </Grid>
            </div>
            <div style={{ marginLeft: '3rem', marginTop: '1rem' }}>
                <div>
                    {step === 1 && (
                        <ProgressIndicator>
                            <ProgressStep current label="First step" />
                            <ProgressStep disabled label="Last Step" />
                        </ProgressIndicator>
                    )}
                </div>
                {bodyContent}
            </div>
            <div style={{ position: 'absolute', right: '1rem', bottom: '1rem' }}>
                {step !== 0 && (
                    <Button onClick={handlePrevStep} kind="secondary">
                        Back
                    </Button>
                )}
                {step !== 0 && step !== 3 && (
                    <Button onClick={handleNextStep}>Next</Button>
                )}
                {step === 3 && (
                    <Button onClick={() => {
                        handleAddPolicy()
                    }
                    }>Complete</Button>
                )}
            </div>
        </div>
    );
};

export default CreatePrivacyNotice;
