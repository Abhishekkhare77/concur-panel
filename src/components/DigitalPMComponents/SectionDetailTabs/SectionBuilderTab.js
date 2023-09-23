import { Button, ClickableTile, ContainedList, ContainedListItem } from '@carbon/react'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import axios from 'axios';

const SectionBuilderTab = (props) => {
    // console.log("This is props data",props.data);
    const section = props.data;
    console.log(section._id)
    console.log("section Content",section.sectionContent)
    console.log("Section Is:", section);
    const [editorHtml, setEditorHtml] = useState(section.sectionContent);

    console.log(editorHtml);
    const handleChangeSection1 = (html) => {
        setEditorHtml(html);
    };

    const handleUpdateSectionContent = () => {
        // Prepare the data for the PATCH request
        const updatedSection = {
            // ...section,
            // sectionPublishTime:Date.now(),
            // sectiontype:'Custom',
            sectionContent: editorHtml, // Update the sectionContent field
        };

        // Define the URL for the PATCH request
        const url = `http://216.48.189.160:1114/policySection/patch?id=${section._id}`; // Replace with your API endpoint

        // Make the PATCH request
        axios
            .patch(url, updatedSection,{
                headers: {
                  'Content-Type': 'application/json', // Set the content type to JSON
                }
              })
            .then((response) => {
                // Handle the successful response here
                console.log('Section updated successfully:', response.data);
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error updating section:', error.config.data);
            });
    };
    const handleUpdateSectionPublishTime = () => {
        // Prepare the data for the PATCH request
        const updatedSection = {
            // ...section,
            sectionPublishedTime:Date.now(),
            // sectiontype:'Custom',
            // sectionContent: editorHtml, // Update the sectionContent field
        };

        // Define the URL for the PATCH request
        const url = `http://216.48.189.160:1114/policySection/patch?id=${section._id}`; // Replace with your API endpoint

        // Make the PATCH request
        axios
            .patch(url, updatedSection,{
                headers: {
                  'Content-Type': 'application/json', // Set the content type to JSON
                }
              })
            .then((response) => {
                // Handle the successful response here
                console.log('Section updated successfully:', response.data);
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error updating section:', error.config.data);
            });
    };
    useEffect(() => {
        setEditorHtml(section.sectionContent);
      }, [section.sectionContent]); 
      

    return (
        <div style={{ display: 'flex', gap: '10px',marginLeft:"-1rem" }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '20%', border: '1px solid gray', padding: '1rem' }}>
                <ClickableTile >
                    {section.sectionName}
                </ClickableTile>
                

            </div>
            <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
                <Button kind="primary" onClick={handleUpdateSectionPublishTime}>Publish</Button>
                <Button kind="secondary" onClick={handleUpdateSectionContent}>Save</Button>
            </div>
            <div style={{ width: '80%', border: '1px solid gray', padding: '1rem' }}>
                <div>
                    <ContainedList label={section.sectionName} kind="on-page">
                        <ContainedListItem>
                            <ReactQuill
                                onChange={handleChangeSection1}
                                value={editorHtml}
                                modules={SectionBuilderTab.modules}
                                formats={SectionBuilderTab.formats}
                                bounds={'.app'}
                                placeholder={props.placeholder}
                                style={{ height: '40vh', marginBottom: '2rem' }}
                            />
                        </ContainedListItem>
                    </ContainedList>
                </div>
            </div>
        </div>
    )
}

export default SectionBuilderTab

SectionBuilderTab.modules = {
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

SectionBuilderTab.formats = [
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

SectionBuilderTab.propTypes = {
    placeholder: PropTypes.string,
};
