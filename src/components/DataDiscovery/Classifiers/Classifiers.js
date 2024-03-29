import React, { useEffect, useState } from 'react'
import { Button, Column, Grid, Breadcrumb, BreadcrumbItem } from '@carbon/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import ClassifiersTable from './ClassifiersTable';



export const headerData = [
  {
    key: 'classifierType',
    header: 'Classifier Type',
  },
  {
    key: 'status',
    header: 'Status',
  },
  {
    key: 'createdBy',
    header: 'Created By',
  },
  {
    key: 'createdOn',
    header: 'Created On',
  }
];

const Classifiers = () => {
  const navigate = useNavigate();
  const [allClassifiers, setAllClassifiers] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://216.48.189.160:1114/dataclassifier/get_all",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        setAllClassifiers(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);


  console.log("This is the list of all classifiers", allClassifiers);

  const transformedClassifiers = allClassifiers.map(item => ({
    // id: classify._id, // Use the unique identifier for each policy
    // classifierType: classify.classifierType,
    // status: classify.status,
    // createdBy: classify.createdBy,
    // createdOn: new Date(classify.createdOn),

    id: item._id,
    classifierType: item.classifierType,
    classifierDescription: item.classifierDescription,
    createdOn: new Date(item.createdOn), // Convert datetime string to JavaScript Date object
    createdBy: item.createdBy,
    lastUpdatedOn: new Date(item.lastUpdatedOn), // Convert datetime string to JavaScript Date object
    publishedOn: new Date(item.publishedOn), // Convert datetime string to JavaScript Date object
    publishedBy: item.publishegBy, // Note the typo in your data: 'publishegBy' instead of 'publishedBy'
    status: item.status,
    dataElementCount: item.dataElementCount || [], // Handle missing dataElementCount
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
            <h1 className="landing-page__heading">Classifiers</h1>
          </Column>
        </Grid>
        <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
          <Button onClick={() => { navigate('/addClassifiers') }}>Add Classifiers</Button>
        </div>
      </div>
      <div style={{ margin: '1rem' }}>
        <ClassifiersTable headers={headerData} rows={transformedClassifiers} />
      </div>
    </div>
  );
};

export default Classifiers;

