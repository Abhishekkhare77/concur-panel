import { Column, Grid, Breadcrumb, BreadcrumbItem, Button, Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DetailsTab from './PolicyViewTabs/DetailsTab';
import BuilderTab from './PolicyViewTabs/BuilderTab';
import LayoutTab from './PolicyViewTabs/LayoutTab';
import SettingsTab from './PolicyViewTabs/SettingsTab';
import axios from 'axios';

const PolicyView = () => {
  const navigate = useNavigate();
  const params=useParams();

  const [policyView, setPolicyView] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://216.48.189.160:1114/privacyNotice/get",
    };

    axios
      .request(options)
      .then(function (response) {
        const policy = response.data.find((item) => item._id === params.id);
        setPolicyView(policy);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(policyView)
  return (
    <div>
      <div>
        <Grid fullWidth>
          <Column lg={16} md={8} sm={4} className="landing-page__banner">
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
              <BreadcrumbItem href="/policynotices">Policy Notices</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage href="/policyview">Policy View</BreadcrumbItem>
            </Breadcrumb>
            <h1 className="landing-page__heading">Policy View</h1>
          </Column>
        </Grid>
      </div>
      <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
        <Button onClick={() => { navigate('/newinternalpolicy') }}>Publish</Button>
        <Button kind="secondary" onClick={() => { navigate('/newinternalpolicy') }}>Save</Button>
      </div>
      <div className="some-container" style={{ marginLeft: '3rem', marginTop: '1rem' }}>
        <Tabs>
          <TabList aria-label="List of tabs" contained>
            <Tab>Details</Tab>
            <Tab>Builder</Tab>
            <Tab>Layout</Tab>
            <Tab>Settings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DetailsTab data={policyView}/>
            </TabPanel>
            <TabPanel>
              <BuilderTab data={policyView}/>
            </TabPanel>
            <TabPanel>
              <LayoutTab/>
            </TabPanel>
            <TabPanel>
              <SettingsTab/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div style={{ position: 'absolute', bottom: '1vh', right: '1rem' }}>
        <Button kind='secondary' onClick={() => { navigate('/internalpolicy') }}>Complete</Button>
      </div>
    </div>
  )
}

export default PolicyView
