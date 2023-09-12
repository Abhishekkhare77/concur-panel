import React from 'react'
import {Toggle} from '@carbon/react'
const SettingsTab = () => {
  return (
    <div>
      <div style={{display:'flex',gap:'10px'}}>
        <h5>Hide menu</h5>
        <Toggle labelA="Off" labelB="On" defaultToggled id="toggle-1" />
      </div>
    </div>
  )
}

export default SettingsTab
