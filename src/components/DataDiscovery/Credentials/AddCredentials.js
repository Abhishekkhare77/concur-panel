import React, { useState } from 'react';
import { Button, Column, Grid, Breadcrumb, BreadcrumbItem, Dropdown } from '@carbon/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SystemModal from './SystemModal';

const AddCredentials = () => {
    const navigate = useNavigate();
    const items = [{
        id: 'option-0',
        text: 'Amazon S3'
    }, {
        id: 'option-1',
        text: 'Mongo'
    }, {
        id: 'option-2',
        text: 'GoogleBig Query'
    }, {
        id: 'option-3',
        text: 'IBM Db2',
    }, {
        id: 'option-4',
        text: 'BOX'
    }, {
        id: 'option-5',
        text: 'Microsoft SQL'
    }, {
        id: 'option-6',
        text: 'My SQL'
    }, {
        id: 'option-7',
        text: 'Postgress SQL'
    }, {
        id: 'option-8',
        text: 'Timescale DB'
    }, {
        id: 'option-9',
        text: 'Oracle RDBMS'
    }
];

    const [step, setStep] = useState(1);
    const [dropdownValue, setDropdownValue] = useState(items[0].text); // Set an initial value

    const handleDropdownChange = (selectedItem) => {
        setDropdownValue(selectedItem.selectedItem.text);
        console.log("selected item text is ",selectedItem.selectedItem.text)
    };

    const handleNextClick = () => {
        console.log('Selected Dropdown Value:', dropdownValue);
        setStep(2);
    };

    const handleSubmitClick = () => {
        // Use the selected value stored in 'dropdownValue' for further processing
        console.log('Selected Dropdown Value:', dropdownValue);

        // Add your logic to submit the form here
    };

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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {step === 1 && (
                    <Dropdown
                        id="default"
                        titleText="Select System"
                        helperText="Select the system that you want to connect to."
                        initialSelectedItem={items[0]}
                        items={items}
                        itemToString={(item) => (item ? item.text : '')}
                        style={{ width: '50%', marginTop: '2rem' }}
                        onChange={handleDropdownChange} // Add this onChange handler
                    />
                )}

                {step === 2 && <SystemModal dropdownValue={dropdownValue}/>}
            </div>
            {step === 1 && (
                <div style={{ position: 'fixed', right: '1rem', bottom: '1rem' }}>
                    <Button onClick={handleNextClick}>Next</Button>
                </div>
            )}
            {step === 2 && (
                <div style={{ display: 'flex', position: 'fixed', right: '1rem', bottom: '1rem' }}>
                    <div>
                        <Button kind="secondary" onClick={() => setStep(1)}>
                            Back
                        </Button>
                    </div>
                    <div>
                        <Button onClick={handleSubmitClick}>Submit</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddCredentials;
