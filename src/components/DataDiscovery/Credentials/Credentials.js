import React, { useEffect, useState } from 'react'
import { Button, Column, Grid, Breadcrumb, BreadcrumbItem } from '@carbon/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import CredentialsTable from './CredentialsTable';



export const headerData = [
  {
    key: 'credentialName',
    header: 'Credential Name',
  },
  {
    key: 'status',
    header: 'Status',
  },
  {
    key: 'createdOn',
    header: 'Created Date',
  }
];

const Credentials = () => {
  const navigate = useNavigate();
  const [allCredentials, setAllCredentials] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://216.48.189.160:1114/credentials",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        setAllCredentials(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);


  const transformedCredentails = allCredentials.map(cred => ({
    id: cred._id, // Use the unique identifier for each policy
    credentialName: cred.credentialName,
    status: cred.status,
    createdOn: cred.createdOn,
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
            <h1 className="landing-page__heading">Credentials</h1>
          </Column>
        </Grid>
        <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
          <Button onClick={() => { navigate('/addcredentials') }}>Add Credentials</Button>
        </div>
      </div>
      <div style={{ margin: '1rem' }}>
        <CredentialsTable headers={headerData} rows={transformedCredentails} />
      </div>
    </div>
  );
};

export default Credentials;
