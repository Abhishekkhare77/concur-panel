import { ClickableTile } from '@carbon/react'
import React from 'react'

const LayoutTab = () => {
    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            <ClickableTile style={{height:'150px',width:'150px'}} href="/policyview">
                No Defined Layout
            </ClickableTile>
            <ClickableTile style={{height:'150px',width:'150px'}} href="/policyview">
                Align Left
            </ClickableTile>
            <ClickableTile style={{height:'150px',width:'150px'}} href="/policyview">
                Align Right
            </ClickableTile>
            <ClickableTile style={{height:'150px',width:'150px'}} href="/policyview">
                Centered
            </ClickableTile>
        </div>
    )
}

export default LayoutTab
