import React from 'react'
import { Stack } from '@carbon/react'

const DetailsTab = () => {
    return (
        <Stack gap={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div>
                <b>Name</b>
                <p>September Notice</p>
            </div>
            <div>
                <b>Description</b>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus consectetur quo, sequi voluptatibus minima? Asperiores quod quibusdam quidem voluptatum, dolores quo ad officia assumenda.</p>
            </div>
            <div>
                <b>User</b>
                <p>Admin 123</p>
            </div>
            <div>
                <b>Organization</b>
                <p>Catax</p>
            </div>
            <div>
                <b>Created By</b>
                <p>John doe</p>
            </div>
            <div>
                <b>Updated By</b>
                <p>John doe</p>
            </div>
            <div>
                <b>Published</b>
                <p>12/10/23</p>
            </div>
            <div>
                <b>Template</b>
                <p>Sample Template</p>
            </div>
            <div>
                <b>Tags</b>
                <p>Tag1, Tag2, Tag3</p>
            </div>
        </Stack>
    )
}

export default DetailsTab
