import { Column, Grid, Breadcrumb, BreadcrumbItem, Button } from '@carbon/react'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditPolicySection = (props) => {

  const [editorHtml, setEditorHtml] = useState('This is already written text');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <div>
        <Grid fullWidth>
          <Column lg={16} md={8} sm={4} className="landing-page__banner">
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
              <BreadcrumbItem href="/digitalpolicymanagement">Digital Policy Management</BreadcrumbItem>
              <BreadcrumbItem href="/internalpolicy">Internal Policy</BreadcrumbItem>
              <BreadcrumbItem href="/policyview">Policy View</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage href="/editpolicysection">Section View</BreadcrumbItem>
            </Breadcrumb>
            <h1 className="landing-page__heading">Section View</h1>
          </Column>
        </Grid>
      </div>
      <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
        <Button onClick={() => { }}>Save Section</Button>
      </div>
      <div style={{ marginTop: '2rem', marginLeft: "3rem", marginRight: '1rem' }} className="ck">
        <div>
          <ReactQuill
            onChange={handleChange}
            value={editorHtml}
            modules={EditPolicySection.modules}
            formats={EditPolicySection.formats}
            bounds={'.app'}
            placeholder={props.placeholder}
            style={{height:'60vh'}}
          />
        </div>
      </div>
    </div>
  )
}

export default EditPolicySection

EditPolicySection.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'strike'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

EditPolicySection.formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'list',
  'bullet',
  'indent',
  'link',
];

EditPolicySection.propTypes = {
  placeholder: PropTypes.string,
};