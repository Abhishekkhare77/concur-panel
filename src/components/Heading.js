import { Column, Grid, Breadcrumb,BreadcrumbItem } from '@carbon/react'
import React from 'react'

const Heading = ({title}) => {
  return (
    <div>
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="landing-page__banner">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
            <BreadcrumbItem isCurrentPage href="/datadiscovery">{title}</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">{title}</h1>
        </Column>
      </Grid>
    </div>
  )
}

export default Heading
