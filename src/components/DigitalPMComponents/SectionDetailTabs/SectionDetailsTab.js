import { Stack } from '@carbon/react'
import React from 'react'

const SectionDetailsTab = ({ data }) => {
    return (
        <div>
            <Stack gap={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <b>Name</b>
                    <p>{data.sectionName}</p>
                </div>
                <div>
                    <b>Description</b>
                    <p>{data.sectionDescription}</p>
                </div>
                <div>
                    <b>Created By</b>
                    <p>{data.sectionCreatedBy}</p>
                </div>
                <div>
                    <b>Last Update Time</b>
                    <p>{data.sectionLastUpdatedTime}</p>
                </div>
                <div>
                    <b>Published</b>
                    <p>{data.sectionPublishedTime}</p>
                </div>
                <div>
                    <b>Status</b>
                    <p>{data.sectionStatus}</p>
                </div>
            </Stack>
        </div>
    )
}

export default SectionDetailsTab
