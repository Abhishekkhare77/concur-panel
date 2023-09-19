import React, { useState } from 'react'
import { Button, Column, Grid, Breadcrumb, BreadcrumbItem, Modal, TextInput, Select, SelectItem, TextArea } from '@carbon/react'
import SectionTemplatesTable from './SectionTemplatesTable';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export const headerData = [
    {
        key: 'sectionName',
        header: 'Section Name',
    },
    {
        key: 'sectionStatus',
        header: 'Status',
    },
    {
        key: 'sectionDefaultLanguage',
        header: 'Default Language',
    },
    {
        key: 'sectionCreatedBy',
        header: 'Created By',
    },
    {
        key: 'sectionPublishedTime',
        header: 'Publish Time',
    },
];

const SectionTemplates = () => {
    const [allSectionTemplates, setAllSectionTemplates] = useState([]);
    useEffect(() => {
        const options = {
            method: "GET",
            url: "http://216.48.189.160:1114/policySection/get_all",
        };

        axios
            .request(options)
            .then(function (response) {
                setAllSectionTemplates(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    console.log(allSectionTemplates);

    const transformedSectionTemplates = allSectionTemplates.map(section => ({
        id: section._id, // Use the unique identifier for each policy
        sectionName: section.sectionName,
        sectionStatus: section.sectionStatus,
        sectionLastUpdatedTime: section.sectionLastUpdatedTime,
        sectionCreatedBy: section.sectionCreatedBy,
        sectionDefaultLanguage: section.sectionDefaultLanguage,
        sectionPublishedTime: section.sectionPublishedTime,
    }));
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();


    const handleAddSectionTemplate = () => {
        const sectionName = document.getElementById('text-input-1').value; // Get the Section Name from the input
        const defaultLanguage = document.getElementById('select-1').value; // Get the Default Language from the select input
        const description = document.querySelector('textarea').value; // Get the Description from the textarea

        // Create an object with the data to send in the POST request
        const postData = {
            sectionName: sectionName,
            sectionDescription: description,
            sectionSample: "string",
            sectionCreatedBy: "John Doe",
            isSectionMandatory: false,
            sectionShowHeader: false,
            sectionShowIcon: false,
            sectionRank: 0,
            sectionDefaultLanguage: defaultLanguage,
            sectionIcon: "string",
            sectionContent: {},
            sectionLanguages: [],
            sectionPublishedTime: Date.now(),
            sectiontype: "Custom"
        };

        // Define the URL where you want to send the POST request
        const url = 'http://216.48.189.160:1114/policySection/post'; // Replace with your API endpoint

        // Make the POST request
        axios
            .post(url, postData)
            .then((response) => {
                // Handle the successful response here
                console.log(response.data)
                // Close the modal after a successful POST
                setOpen(false);
                navigate(0);
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error:', error);
            });
    };


    return (
        <div>
            <div>
                <Grid fullWidth>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <Breadcrumb noTrailingSlash>
                            <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
                            <BreadcrumbItem href="/privacynotices">Policy Management</BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage href="/sectiontemplates">Section Templates</BreadcrumbItem>
                        </Breadcrumb>
                        <h1 className="landing-page__heading">Create Section Template</h1>
                    </Column>
                </Grid>
                <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
                    <Button onClick={() => setOpen((currState) => !currState)}>Add New</Button>
                </div>
                <div>
                    {open && <Modal open modalHeading="Create Custom Template Section" modalLabel="Custom Section" primaryButtonText="Add" secondaryButtonText="Cancel" onRequestClose={() => setOpen(false)} onRequestSubmit={() => handleAddSectionTemplate()}>
                        <TextInput data-modal-primary-focus id="text-input-1" labelText="Section Name" placeholder="e.g. abcdef" style={{
                            marginBottom: '1rem'
                        }}/>
                        <Select id="select-1" defaultValue="English" labelText="Default language">
                            <SelectItem value="English" text="English" />
                            <SelectItem value="Hindi" text="Hindi" />
                        </Select>
                        <TextArea labelText="Description" rows={4} placeholder='Section description' />
                    </Modal>}
                </div>
            </div>
            <div style={{ margin: '1rem' }}>
                <SectionTemplatesTable headers={headerData} rows={transformedSectionTemplates} />
            </div>
        </div>
    )
}

export default SectionTemplates
