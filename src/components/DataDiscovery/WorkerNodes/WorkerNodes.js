import React, { useEffect, useState } from 'react'
import { Button, Column, Grid, Breadcrumb, BreadcrumbItem } from '@carbon/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import WorkerNodesTable from './WorkerNodesTable';



export const headerData = [
  {
    key: 'privacyNoticeName',
    header: 'Name',
  },
  {
    key: 'privacyNoticeStatus',
    header: 'Status',
  },
  {
    key: 'privacyNoticeOwner',
    header: 'Published By'
  },
  {
    key: 'privacyNoticeCreatedBy',
    header: 'Created By',
  },
  {
    key: 'privacyNoticelastModifiedTime',
    header: 'Modified Time',
  },
  {
    key: 'privacyNoticeOrganisation',
    header: 'Organization',
  },
];

const WorkerNodes = () => {
  const navigate = useNavigate();
  const [allPolicies, setAllPolicies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://216.48.189.160:1114/privacyNotice/get",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        setAllPolicies(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);




  const transformedPolicies = allPolicies.map(policy => ({
    id: policy._id, // Use the unique identifier for each policy
    privacyNoticeName: policy.privacyNoticeName,
    privacyNoticeStatus: policy.privacyNoticeStatus,
    privacyNoticeOwner: policy.privacyNoticeOwner,
    privacyNoticeCreatedBy: policy.privacyNoticeCreatedBy,
    privacyNoticelastModifiedTime: policy.privacyNoticelastModifiedTime,
    privacyNoticeOrganisation: policy.privacyNoticeOrganisation,
  }));

  return (
    <div>
      <div>
        <Grid fullWidth>
          <Column lg={16} md={8} sm={4} className="landing-page__banner">
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage href="/datadiscovery">Data Discovery</BreadcrumbItem>
            </Breadcrumb>
            <h1 className="landing-page__heading">Worker Nodes</h1>
          </Column>
        </Grid>
        <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
          <Button onClick={() => { navigate('/createprivacynotice') }}>Add New Worker Node</Button>
        </div>
      </div>
      <div style={{ margin: '1rem' }}>
        <WorkerNodesTable headers={headerData} rows={transformedPolicies} />
      </div>
    </div>
  );
};

export default WorkerNodes;
