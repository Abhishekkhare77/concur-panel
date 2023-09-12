import React from 'react'
import { Tabs, TabList, Tab, TabPanel, TabPanels, Grid, Column, Breadcrumb, BreadcrumbItem, Button, IconButton } from '@carbon/react'
import { ArrowLeft, ArrowRight } from '@carbon/react/icons'
import { useNavigate } from 'react-router-dom'
const NewInternalPolicy = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Grid fullWidth>
                <Column lg={16} md={8} sm={4} className="landing-page__banner">
                    <Breadcrumb noTrailingSlash>
                        <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
                        <BreadcrumbItem href="/digitalpolicymanagement">Digital Policy Management</BreadcrumbItem>
                        <BreadcrumbItem href="/internalpolicy">Policies</BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage href="/newinternalpolicy">Add New Policy</BreadcrumbItem>
                    </Breadcrumb>
                    <h1 className="landing-page__heading">Add New Internal Policy</h1>
                </Column>
            </Grid>
            <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
                <Button onClick={() => { }}>Import Policy</Button>
            </div>
            <div style={{ width: '90%', marginTop: '1rem' }}>
                <Tabs>
                    <TabList aria-label="List of tabs" contained>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                        <Tab>Tab 4</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Tab Panel 1</TabPanel>
                        <TabPanel>Tab Panel 2</TabPanel>
                        <TabPanel>Tab Panel 3</TabPanel>
                        <TabPanel>Tab Panel 4</TabPanel>
                    </TabPanels>
                </Tabs>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button kind='tertiary' size='sm'><ArrowLeft /></Button>
                    <Button kind='tertiary' size='sm'><ArrowRight /></Button>
                </div>
                <div style={{ position: 'absolute', bottom: '1vh', right: '1rem' }}>
                    <Button kind='secondary' onClick={() => { navigate('/policyview')}}>Complete</Button>
                </div>
            </div>
        </div>
    )
}

export default NewInternalPolicy

