import React from 'react'
import { Tabs, TabList, Tab, TabPanel, TabPanels, Grid, Column, Breadcrumb, BreadcrumbItem, Button, IconButton } from '@carbon/react'
import { ArrowLeft, ArrowRight } from '@carbon/react/icons'
const Onboarding = () => {
    return (
        <div>
            <Grid fullWidth>
                <Column lg={16} md={8} sm={4} className="landing-page__banner">
                    <Breadcrumb noTrailingSlash>
                        <BreadcrumbItem href="/">Breadcrumb 1</BreadcrumbItem>
                        <BreadcrumbItem href="/">Breadcrumb 2</BreadcrumbItem>
                        <BreadcrumbItem href="/">Breadcrumb 3</BreadcrumbItem>
                    </Breadcrumb>
                    <h1 className="landing-page__heading">Onboarding Process</h1>
                </Column>
            </Grid>
            <div style={{ width: '90%', marginTop: '1rem' }}>
                <Tabs>
                    <TabList aria-label="List of tabs" contained>
                        <Tab>Personal Info</Tab>
                        <Tab>Org Info</Tab>
                        <Tab>Significant DPD</Tab>
                        <Tab>Digital Policy</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Tab Panel 1</TabPanel>
                        <TabPanel>Tab Panel 2</TabPanel>
                        <TabPanel>Tab Panel 3</TabPanel>
                        <TabPanel>Tab Panel 4</TabPanel>
                    </TabPanels>
                </Tabs>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <Button kind='tertiary' size='sm'><ArrowLeft/></Button>
                <Button kind='tertiary' size='sm'><ArrowRight/></Button>

                </div>
                
            </div>
        </div>
    )
}

export default Onboarding
