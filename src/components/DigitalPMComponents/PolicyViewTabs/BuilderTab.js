import { ClickableTile, ContainedList, ContainedListItem, Modal, Select, SelectItem, TextArea } from '@carbon/react'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import axios from 'axios';
import { TextInput } from 'carbon-components-react';
import { useNavigate } from 'react-router-dom';

const BuilderTab = (props) => {

    const [editorHtml, setEditorHtml] = useState('This is the welcome section text');
    const [editorHtml1, setEditorHtml1] = useState('This is other section ');

    const handleChangeSection1 = (html) => {
        setEditorHtml(html);
    };
    const handleChangeSection2 = (html) => {
        setEditorHtml1(html);
    };

    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        // Fetch templates for each templateId
        const fetchTemplates = async () => {
            const templateIds = props.data.privacyNoticetemplateId;
            if (!Array.isArray(templateIds)) {
                // Handle the case where templateIds is not an array (e.g., set it to an empty array)
                return;
            }
    
            const templatePromises = templateIds.map((templateId) =>
                axios.get(`http://216.48.189.160:1114/privacyNoticeTemplate/${templateId}`)
            );
    
            try {
                const responses = await Promise.all(templatePromises);
                const templateData = responses.map((response) => response.data);
                setTemplates(templateData);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchTemplates();
    }, [props.data.privacyNoticetemplateId]);

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
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
            sectionLanguages: []
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
        <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '20%', border: '1px solid gray', padding: '1rem' }}>
                
            {templates.map((template, index) => (
                    <ClickableTile key={index}>
                        {template.privacyNoticeSection}
                    </ClickableTile>
                ))}
                <ClickableTile light onClick={() => setOpen((currState) => !currState)}>
                    + Add More Section
                </ClickableTile>
            </div>
            <div style={{ width: '80%', border: '1px solid gray', padding: '1rem' }}>
                <>
                    <ContainedList label="Welcome Section" kind="on-page">
                        <ContainedListItem>
                            <ReactQuill
                                onChange={handleChangeSection1}
                                value={editorHtml}
                                modules={BuilderTab.modules}
                                formats={BuilderTab.formats}
                                bounds={'.app'}
                                placeholder={props.placeholder}
                                style={{ height: '10vh', marginBottom: '2rem' }}
                            />
                        </ContainedListItem>
                    </ContainedList>
                    <ContainedList label="Information section" kind="on-page">
                        <ContainedListItem>
                            <ReactQuill
                                onChange={handleChangeSection2}
                                value={editorHtml1}
                                modules={BuilderTab.modules}
                                formats={BuilderTab.formats}
                                bounds={'.app'}
                                placeholder={props.placeholder}
                                style={{ height: '20vh', marginBottom: '2rem' }}
                            />
                        </ContainedListItem>
                    </ContainedList>
                </>
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
    )
}

export default BuilderTab

BuilderTab.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }],
        ['bold', 'italic', 'underline', 'strike'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link'],
    ],
    clipboard: {
        matchVisual: false,
    },
};

BuilderTab.formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'indent',
    'link',
];

BuilderTab.propTypes = {
    placeholder: PropTypes.string,
};