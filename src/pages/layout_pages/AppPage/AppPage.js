import React from 'react'
import { ClickableTile, Grid, Column, Breadcrumb, BreadcrumbItem } from '@carbon/react'
const AppPage = () => {
    return (
        <>
            <Grid fullWidth>
                <Column lg={16} md={8} sm={4} className="landing-page__banner">
                    {/* <Breadcrumb noTrailingSlash>
                        <BreadcrumbItem href="/">Breadcrumb 1</BreadcrumbItem>
                        <BreadcrumbItem href="/">Breadcrumb 2</BreadcrumbItem>
                        <BreadcrumbItem href="/">Breadcrumb 3</BreadcrumbItem>
                    </Breadcrumb> */}
                    <h1 className="landing-page__heading">Apps </h1>
                </Column>
            </Grid>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: "2rem", marginTop: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto',gridGap:'2px' }}>

                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/getstarted" >
                        Get Started
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/privacynotices" >
                        Policy Management
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/datasources" >
                        Data Sources
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/datadiscovery" >
                        Data Discovery
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/datacatalog" >
                        Data Catalog
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/ropa" >
                        RoPA
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/dataprinciplemanagement" >
                        Data Principle
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/consent" >
                        Consent
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/mobileappconsent" >
                        Mobile App Consent
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/webappconsent" >
                        Web App Consent
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/" >
                        OTT & CTV Consent
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/parentalconsent" >
                        Parental Consent
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/noticemanagement" >
                        Notice Management
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/noticemanagement" >
                        Preference Centre
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/" >
                        DPAR
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/dpostudio" >
                        DPO Studio
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/" >
                        DPIA Automation
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/" >
                        Risk Management
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/" >
                        Audit Management
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/" >
                        Incident Management
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/" >
                        Third Party Risk Management
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/" >
                        Organization Training
                    </ClickableTile>
                    <ClickableTile style={{ height: '150px', width: '250px' }} href="/" >
                        Support
                    </ClickableTile>
                </div>
            </div>
        </>
    )
}

export default AppPage
