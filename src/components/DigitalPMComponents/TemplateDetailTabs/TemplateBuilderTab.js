import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Button, ClickableTile, ContainedList, ContainedListItem, Modal, RadioButton, Select, SelectItem, TextArea, TextInput } from '@carbon/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RadioButtonGroup } from 'carbon-components-react';
import { headerData } from '../SectionTemplates';
import SectionTemplatesTableModal from './SectionTemplateTableModal';

const TemplateBuilderTab = (props) => {
    const template = props.data;

    const [sectionDetails, setSectionDetails] = useState([]);

    useEffect(() => {
        // Base API URL
        const apiUrl = "http://216.48.189.160:1114/policySection/get";

        // Check if template.privacyNoticeSection is defined
        if (template && template.privacyNoticeSection) {
            // Create an array of axios GET requests for each ID
            const requests = template.privacyNoticeSection.map((id) =>
                axios.get(apiUrl, { params: { id } }) // Construct URL with the ID parameter
            );

            // Use Promise.all to fetch data for all items in parallel
            Promise.all(requests)
                .then((responses) => {
                    // Filter out any responses that don't have data
                    const sections = responses
                        .filter((response) => response.data)
                        .map((response) => response.data);
                    setSectionDetails(sections);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [template]); // Dependency on template

    const handleSectionContentChange = (html, index) => {
        const updatedSectionDetails = [...sectionDetails];
        updatedSectionDetails[index].sectionContent = html;
        setSectionDetails(updatedSectionDetails);
    };

    const [open, setOpen] = useState(false);
    const [selectSectionTemplate, setSelectSectionTemplate] = useState(false);
    const [selectFromSectionTemplate,setSelectFromSectionTemplate] = useState(false);


    const [selectedOption,setSelectedOption] = useState(1);
    const handleSelection = ()=>{
        if(selectedOption === 1){
            setSelectSectionTemplate(false);
            setSelectFromSectionTemplate(true);
        }else if(selectedOption === 2){
            setSelectSectionTemplate(false);
            setOpen(true);
        }
        setSelectedOption(1);
    }
    

    
    
    const [currentSectionId,setCurrentSectionId] = useState('');

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
            sectiontype: "template"
        };

        // Define the URL where you want to send the POST request
        const url = 'http://216.48.189.160:1114/policySection/post'; // Replace with your API endpoint

        // Make the POST request
        axios
            .post(url, postData)
            .then((response) => {
                // Handle the successful response here
                console.log("This is the response of add section post data ,, the id is:",response)
                // setCurrentSectionId(response.data);
                // Close the modal after a successful POST
                setOpen(false);
                // navigate(0);
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error:', error);
            });
    };



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

    const transformedSectionTemplates = allSectionTemplates.map(section => ({
        id: section._id, // Use the unique identifier for each policy
        sectionName: section.sectionName,
        sectionStatus: section.sectionStatus,
        sectionLastUpdatedTime: section.sectionLastUpdatedTime,
        sectionCreatedBy: section.sectionCreatedBy,
        sectionDefaultLanguage: section.sectionDefaultLanguage,
        sectionPublishedTime: section.sectionPublishedTime,
    }));
   

    const addSectionToTemplate = () => {
        const updatedSection = {
           ...template,
           privacyNoticeSection: [...template.privacyNoticeSection, currentSectionId], // Update the sectionContent field
        };

        // Define the URL for the PATCH request
        const url = `http://216.48.189.160:1114/privacyNoticeTemplate/${template._id}`; // Replace with your API endpoint

        // Make the PATCH request
        axios
            .patch(url, updatedSection,{
                headers: {
                  'Content-Type': 'application/json', // Set the content type to JSON
                }
              })
            .then((response) => {
                // Handle the successful response here
                console.log('Section added to template successfully:', response.data);
            })
            
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error updating section:', error.config.data);
            });
      };

    
      console.log("This is the seciton details",sectionDetails);


    //   const handleUpdateSectionContent = () => {
    //     // Prepare the data for the PATCH request
    //     const updatedSection = {
    //         ...sectionDetails,
    //         // sectionPublishTime:Date.now(),
    //         // sectiontype:'Custom',
    //         sectionContent: sectionDetails.sectionContent, // Update the sectionContent field
    //     };

    //     // Define the URL for the PATCH request
    //     const url = `http://216.48.189.160:1114/policySection/patch?id=${sectionDetails._id}`; // Replace with your API endpoint

    //     // Make the PATCH request
    //     axios
    //         .patch(url, updatedSection,{
    //             headers: {
    //               'Content-Type': 'application/json', // Set the content type to JSON
    //             }
    //           })
    //         .then((response) => {
    //             // Handle the successful response here
    //             console.log('Section updated successfully:', response.data);
    //         })
    //         .catch((error) => {
    //             // Handle any errors that occurred during the request
    //             console.error('Error updating section:', error.config.data);
    //         });
    // };

    const handleUpdateSectionContent = () => {
        // Iterate through all the sections
        sectionDetails.forEach((section, index) => {
            // Prepare the data for the PATCH request
            const updatedSection = {
                // ...section,
                sectionContent: sectionDetails[index].sectionContent, // Update the sectionContent field
            };
    
            // Define the URL for the PATCH request (use the appropriate URL for your API)
            const url = `http://216.48.189.160:1114/policySection/patch?id=${section._id}`;
    
            // Make the PATCH request for each section
            axios
                .patch(url, updatedSection, {
                    headers: {
                        'Content-Type': 'application/json', // Set the content type to JSON
                    },
                })
                .then((response) => {
                    // Handle the successful response here
                    console.log(`Section ${section.sectionName} updated successfully:`, response.data);
                })
                .catch((error) => {
                    // Handle any errors that occurred during the request
                    console.error(`Error updating section ${section.sectionName}:`, error.config.data);
                });
        });
    };

    return (
        <div style={{ display: 'flex', gap: '10px', marginLeft: "-1rem" }}>


            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '20%', border: '1px solid gray', padding: '1rem' }}>
                {sectionDetails.map((section, index) => (
                    <ClickableTile key={index}>
                        {section.sectionName}
                    </ClickableTile>
                ))}
                <ClickableTile light onClick={() => setSelectSectionTemplate((currState) => !currState)}>
                    + Add More Section
                </ClickableTile>
            </div>


            <div>
                {/* Modal 1 */}
                {selectSectionTemplate && <Modal open modalHeading="Create Custom Template Section" modalLabel="Add new section" primaryButtonText="Select" secondaryButtonText="Cancel" onRequestClose={() => {
                    setSelectedOption(1);
                    setSelectSectionTemplate(false)}} onRequestSubmit={handleSelection}>
                    <RadioButtonGroup legendText="Choose From below: " name="radio-button-group" defaultSelected="radio-1">
                        <RadioButton labelText="Select From Section Template" value="radio-1" id="radio-1" onClick={()=>setSelectedOption(1)} />
                        <RadioButton labelText="Create new custom section" value="radio-2" id="radio-2" onClick={()=>setSelectedOption(2)}/>
                    </RadioButtonGroup>
                </Modal>}
            </div>


            <div>
                {/* Modal 2 */}
            {selectFromSectionTemplate && <Modal open modalHeading="Create Custom Template Section" modalLabel="Custom Section" primaryButtonText="Select" secondaryButtonText="Cancel" onRequestClose={() => setSelectFromSectionTemplate(false)} onRequestSubmit={addSectionToTemplate}>
            <div style={{ margin: '1rem' }}>
                <SectionTemplatesTableModal headers={headerData} rows={transformedSectionTemplates} sectionId={currentSectionId} setCurrentSectionId={setCurrentSectionId} />
            </div>
                </Modal>}
            </div>


            <div>
                {/* Modal 3 */}
                {open && <Modal open modalHeading="Create Custom Template Section" modalLabel="Custom Section" primaryButtonText="Add" secondaryButtonText="Cancel" onRequestClose={() => setOpen(false)} onRequestSubmit={() => handleAddSectionTemplate()}>
                    <TextInput data-modal-primary-focus id="text-input-1" labelText="Section Name" placeholder="e.g. abcdef" style={{
                        marginBottom: '1rem'
                    }} />
                    <Select id="select-1" defaultValue="English" labelText="Default language">
                        <SelectItem value="English" text="English" />
                        <SelectItem value="Hindi" text="Hindi" />
                    </Select>
                    <TextArea labelText="Description" rows={4} placeholder='Section description' />
                </Modal>}
            </div>


            <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
                <Button kind="primary" onClick={() => { }}>Publish</Button>
                <Button kind="secondary" onClick={handleUpdateSectionContent}>Save</Button>
            </div>


            <div style={{ width: '80%', border: '1px solid gray', padding: '1rem' }}>
                <div>
                    <ContainedList label={"Title"} kind="on-page">
                        {sectionDetails.map((section, index) => (
                            <ContainedListItem key={index}>
                                <ReactQuill
                                    onChange={(html) => handleSectionContentChange(html, index)}
                                    value={section.sectionContent}
                                    modules={TemplateBuilderTab.modules}
                                    formats={TemplateBuilderTab.formats}
                                    bounds={'.app'}
                                    placeholder={props.placeholder}
                                    style={{ height: '40vh', marginBottom: '2rem' }}
                                />
                            </ContainedListItem>
                        ))}
                    </ContainedList>
                </div>
            </div>
        </div>
    )
}

export default TemplateBuilderTab
TemplateBuilderTab.modules = {
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

TemplateBuilderTab.formats = [
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

TemplateBuilderTab.propTypes = {
    placeholder: PropTypes.string,
};
