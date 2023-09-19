import { Stack } from '@carbon/react'
import React from 'react'

const TemplateDetailTab = ({data}) => {
  return (
    <div>
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
                    <b>Status</b>
                    <p>{data.privacyNoticeStatus}</p>
                </div>
            </Stack>
        </div>
  )
}

export default TemplateDetailTab
