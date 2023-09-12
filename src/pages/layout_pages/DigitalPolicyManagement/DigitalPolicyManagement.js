import React from 'react'
import { Button, ClickableTile } from '@carbon/react'
import { useNavigate } from 'react-router-dom'
const DigitalPolicyManagement = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
      <div style={{ position: 'absolute', top: '8vh', right: '1rem' }}>
        <Button onClick={() => { navigate('/newinternalpolicy') }}>New</Button>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <ClickableTile href="/newinternalpolicy" style={{ height: '40vh', width: '25vw' }}>
          Internal Policy
        </ClickableTile>
        <ClickableTile href="/newinternalpolicy" style={{ height: '40vh', width: '25vw' }}>
          External Policy
        </ClickableTile>
      </div>
    </div>
  )
}

export default DigitalPolicyManagement
