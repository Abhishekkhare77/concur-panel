import { Column, Grid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@carbon/react';
import axios from 'axios';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import TemplateBuilderTab from './TemplateDetailTabs/TemplateBuilderTab';
import TemplateDetailTab from './TemplateDetailTabs/TemplateDetailTab';

const TemplateDetails = () => {
    const {id} = useParams();
    console.log(id);

    const [templateDetails, setTemplateDetails] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://216.48.189.160:1114/privacyNoticeTemplate/get",
    };

    axios
      .request(options)
      .then(function (response) {
        const template = response.data.find((item) => item._id === id);
        setTemplateDetails(template);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  console.log(templateDetails);


  return (
    <div>
    <div>
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="landing-page__banner">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
            <BreadcrumbItem href="/policynotices">Policy Notices</BreadcrumbItem>
            <BreadcrumbItem isCurrentPage href="/policyview">Section View</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Template View</h1>
        </Column>
      </Grid>
    </div>
    <div className="some-container" style={{ marginLeft: '3rem', marginTop: '1rem' }}>
      <Tabs>
        <TabList aria-label="List of tabs" contained>
          <Tab>Details</Tab>
          <Tab>Builder</Tab>
        </TabList>
        <hr />
        <TabPanels>
          <TabPanel>
           <TemplateDetailTab data={templateDetails}/>
          </TabPanel>
          <TabPanel>
            <TemplateBuilderTab data={templateDetails}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
  )
}

export default TemplateDetails
