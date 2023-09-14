import { TabList, TabPanel, TabPanels } from '@carbon/react'
import { Breadcrumb, Column, Grid ,BreadcrumbItem, Button, Tabs, Tab} from 'carbon-components-react'
import React from 'react'

const SectionDetails = () => {
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
      <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
        <Button onClick={() => {  }}>Publish</Button>
        <Button kind="secondary" onClick={() => {  }}>Save</Button>
      </div>
      <div className="some-container" style={{ marginLeft: '3rem', marginTop: '1rem' }}>
        <Tabs>
          <TabList aria-label="List of tabs" contained>
            <Tab>Details</Tab>
            <Tab>Builder</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              Details Tab
            </TabPanel>
            <TabPanel>
              Builder Tab
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default SectionDetails
