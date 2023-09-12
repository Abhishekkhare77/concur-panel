import React from 'react'
import { Stack } from '@carbon/react'

const DetailsTab = ({data}) => {
    return (
        <Stack gap={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div>
                <b>Name</b>
                <p>{data.privacyNoticeName}</p>
            </div>
            <div>
                <b>Description</b>
                <p>{data.privacyNoticeDescription}</p>
            </div>
            <div>
                <b>User</b>
                <p>{data.privacyNoticeOwner}</p>
            </div>
            <div>
                <b>Organization</b>
                <p>{data.privacyNoticeOrganisation}</p>
            </div>
            <div>
                <b>Created By</b>
                <p>{data.privacyNoticeCreatedBy}</p>
            </div>
            <div>
                <b>Updated By</b>
                <p>{data.privacyNoticeUpdatedBy}</p>
            </div>
            <div>
                <b>Published</b>
                <p>{data.privacyNoticePublishedTime}</p>
            </div>
            <div>
                <b>Template</b>
                <p>{data.privacyNoticetemplateId}</p>
            </div>
            <div>
                <b>Tags</b>
                <p>{data.privacyNoticeNoticeTags}</p>
            </div>
        </Stack>
    )
}

export default DetailsTab
