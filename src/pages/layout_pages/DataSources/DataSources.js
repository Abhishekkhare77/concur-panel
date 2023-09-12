import React from 'react'
import { Column, Grid, Breadcrumb, BreadcrumbItem } from '@carbon/react'

const DataSources = () => {
  return (
    <div>
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="landing-page__banner">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
            <BreadcrumbItem isCurrentPage href="/datasources">Data Sources</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Data Sources</h1>
        </Column>
      </Grid>
    </div>
  )
}

export default DataSources
