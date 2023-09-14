import { Column, Grid, Breadcrumb, BreadcrumbItem, ClickableTile, Button, Modal, TextInput, Select, SelectItem, TextArea, Tag } from '@carbon/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const Templates = () => {
  const [open, setOpen] = useState(false);
  const [activeToInactive, setActiveToInactive] = useState(false);
  const [inactiveToActive, setInactiveToActive] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null); // Track the selected template

  const navigate = useNavigate();

  const toggleActivation = (templateIndex) => {
    if (templateIndex !== null) {
      // Toggle the activation status of the selected template
      allTemplateData[templateIndex].active = !allTemplateData[templateIndex].active;
      // Close the modal
      setOpen(false);
      setActiveToInactive(false);
      setInactiveToActive(false);
      setSelectedTemplate(null); // Reset the selected template
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
  const handleAddTemplate = () => {
    const sectionName = document.getElementById('text-input-1').value; // Get the Section Name from the input
    const defaultLanguage = document.getElementById('select-1').value; // Get the Default Language from the select input
    const description = document.querySelector('textarea').value; // Get the Description from the textarea

    // Create an object with the data to send in the POST request
    const postData = {
      privacyNoticeLayout: "Left Aligned",
      privacyNoticeName: sectionName, // Use the Section Name as the name
      privacyNoticeOrganisation: "Catax",
      privacyNoticedefaultLanguage: defaultLanguage, // Use the Default Language
      privacyNoticeLanguages: [],
      privacyNoticeDescription: description, // Use the Description
      privacyNoticeNoticeTags: "string",
      privacyNoticeOwner: "John Doe",
      privacyNoticeCreatedBy: "John doe",
      privacyNoticeUpdatedBy: "string",
      privacyNoticetemplateId: [],
      privacyNoticeSection: [sectionName], // Use the Section Name as a section
    };

    // Define the URL where you want to send the POST request
    const url = 'http://216.48.189.160:1114/privacyNoticeTemplate/create'; // Replace with your API endpoint

    // Make the POST request
    axios
      .post(url, postData)
      .then((response) => {
        // Handle the successful response here
        console.log('Response:', response.data);
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
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="landing-page__banner">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
            <BreadcrumbItem href="/privacynotices">Policy Notices</BreadcrumbItem>
            <BreadcrumbItem isCurrentPage href="/templates">Templates</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Templates</h1>
        </Column>
      </Grid>
      <div>
        <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
          <Button onClick={() => setOpen(true)}>Create Custom Template</Button>
        </div>
        <div>


          {open && <Modal open modalHeading="Create Custom Template Section"
            modalLabel="Custom Section"
            className="PostRequestModal"
            primaryButtonText={"Add"}
            onRequestSubmit={() => handleAddTemplate()}
            secondaryButtonText="Cancel"
            onRequestClose={() => setOpen(false)}>

            <TextInput data-modal-primary-focus id="text-input-1" labelText="Section Name" placeholder="e.g. abcdef" style={{
              marginBottom: '1rem'
            }} onRequestClose={() => setOpen(false)} />

            <Select id="select-1" defaultValue="English" labelText="Default language">
              <SelectItem value="English" text="English" />
              <SelectItem value="Hindi" text="Hindi" />
            </Select>

            <TextArea labelText="Description" rows={4} placeholder='Section description' />
          </Modal>}


        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: "1rem 3rem" }}>
        {allTemplateData.map((template, index) => (
          <ClickableTile
            key={index}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '250px', width: '250px' }}
            href={'#'}
          >
            <div style={{ position: 'absolute', top: '1px', right: '1px' }}>
              <a rel="noreferrer" target='_blank' href="https://www.zomato.com/policies/terms-of-service/"><BsArrowUpRight size={24} /></a>
            </div>
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
              {template.active ? (
                <Button size='sm' onClick={() => setInactiveToActive(true)}>Deactivate</Button>
              ) : (
                <Button size='sm' onClick={() => setActiveToInactive(true)}>Activate</Button>
              )}
            </div>
          </ClickableTile>
        ))}
      </div>
      <div>
        {inactiveToActive && <Modal open modalHeading="Activate Template" modalLabel="Activate Template" primaryButtonText="Activate" secondaryButtonText="Cancel" onRequestClose={() => {
          toggleActivation(selectedTemplate)
          setInactiveToActive(false)
        }}>
          <p style={{
            marginBottom: '1rem'
          }}>
            Are you sure you want to activate this template?
          </p>
          <Button onClick={() => toggleActivation(selectedTemplate)}>Activate</Button>
        </Modal>}
        {activeToInactive && <Modal open modalHeading="Deactivate Template" modalLabel="Deactivate Template" primaryButtonText="Deactivate" secondaryButtonText="Cancel" onRequestClose={() => {
          toggleActivation(selectedTemplate)
          setActiveToInactive(false)
        }}>
          <p style={{
            marginBottom: '1rem'
          }}>
            Are you sure you want to deactivate this template?
          </p>
          <Button onClick={() => toggleActivation(selectedTemplate)}>Deactivate</Button>
        </Modal>}
      </div>
    </div>
  )
}

export default Templates;
