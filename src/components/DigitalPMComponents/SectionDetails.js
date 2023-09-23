import axios from 'axios'
import { Breadcrumb, Column, Grid ,BreadcrumbItem, Button, Tabs, Tab, TabList, TabPanel, TabPanels } from 'carbon-components-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import SectionDetailsTab from './SectionDetailTabs/SectionDetailsTab'
import SectionBuilderTab from './SectionDetailTabs/SectionBuilderTab'

const SectionDetails = () => {
    const {id} = useParams();
    const newId = id.split(":")[0];

    const [sectionDetails, setSectionDetails] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://216.48.189.160:1114/policySection/get_all_templates",
    };

    axios
      .request(options)
      .then(function (response) {
        const section = response.data.find((item) => item._id === newId);
        setSectionDetails(section);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [newId]);


  console.log("section details is: ",sectionDetails);

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
            <h1 className="landing-page__heading">Section View</h1>
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
              <SectionDetailsTab data={sectionDetails}/>
            </TabPanel>
            <TabPanel>
              <SectionBuilderTab data={sectionDetails}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default SectionDetails
