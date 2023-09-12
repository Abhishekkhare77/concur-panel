import React, {  useState } from 'react'
import { Button, Column, Grid, Breadcrumb, BreadcrumbItem, Modal, TextInput, Select, SelectItem, TextArea } from '@carbon/react'
import SectionTemplatesTable from './SectionTemplatesTable';


export const rowData = [
    {
        id: 'a',
        name: 'September Notice',
        status: 'Draft',
        version: '1.1.1',
        createdBy: 'John doe',
        lastPublished: '12/10/23',
    },
    {
        id: "b",
        name: "October Announcement",
        status: "Final",
        version: "2.0.0",
        createdBy: "Jane Johnson",
        lastPublished: "09/25/23",
    },
    {
        id: "c",
        name: "Product Update",
        status: "Draft",
        version: "1.0.2",
        createdBy: "Emily White",
        lastPublished: "11/05/23",
    },
    {
        id: "d",
        name: "Annual Report",
        status: "Final",
        version: "3.2.0",
        createdBy: "Sarah Green",
        lastPublished: "10/15/23",
    },
    {
        id: "e",
        name: "Q3 Financial Statement",
        status: "Draft",
        version: "1.3.0",
        createdBy: "Olivia Turner",
        lastPublished: "12/01/23",
    }
];

export const headerData = [
    {
        key: 'name',
        header: 'Section Name',
    },
    {
        key: 'status',
        header: 'Status',
    },
    {
        key: 'version',
        header: 'Version',
    },
    {
        key: 'createdBy',
        header: 'Created By',
    },
    {
        key: 'lastPublished',
        header: 'Last Published',
    },
];

const SectionTemplates = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div>
                <Grid fullWidth>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <Breadcrumb noTrailingSlash>
                            <BreadcrumbItem href="/apps">Apps</BreadcrumbItem>
                            <BreadcrumbItem href="/privacynotices">Policy Management</BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage href="/sectiontemplates">Section Templates</BreadcrumbItem>
                        </Breadcrumb>
                        <h1 className="landing-page__heading">Create Section Template</h1>
                    </Column>
                </Grid>
                <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
                    <Button onClick={() => setOpen((currState)=>!currState)}>Add New</Button>
                </div>
                <div>
                    {open && <Modal open modalHeading="Create Custom Template Section" modalLabel="Custom Section" primaryButtonText="Add" secondaryButtonText="Cancel" onRequestClose={() => setOpen(false)}>
                        <TextInput data-modal-primary-focus id="text-input-1" labelText="Section Name" placeholder="e.g. abcdef" style={{
                            marginBottom: '1rem'
                        }} />
                        <Select id="select-1" defaultValue="English" labelText="Default language">
                            <SelectItem value="us-south" text="English" />
                            <SelectItem value="us-east" text="Hindi" />
                        </Select>
                        <TextArea labelText="Description" rows={4} placeholder='Section description'/>
                    </Modal>}
                </div>
            </div>
            <div style={{ margin: '1rem' }}>
                <SectionTemplatesTable headers={headerData} rows={rowData} />
            </div>
        </div>
    )
}

export default SectionTemplates
