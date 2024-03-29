import { Button, Select, SelectItem, Stack, TextArea, TextInput, Toggle } from '@carbon/react'
import React from 'react'

const SystemModal = ({dropdownValue}) => {
  return (
    <div>
      <div style={{ marginTop: '1rem', width: '50vw' ,marginBottom:'5rem'}}>
                    <Stack gap={5}>
                        <div>
                            <TextInput id="name" type="text" labelText="Credential Name *" required />
                            <p id="name-error" style={{ color: 'red' }}></p>
                        </div>
                        <TextArea labelText="Description" rows={4} placeholder='Enter Description' />
                        <div>
                            <TextInput id="referencekey" type="text" labelText="Reference Key *"  required/>
                            <p id="referencekey-error" style={{ color: 'red' }}></p>
                        </div>
                        <Select id="select-1" defaultValue="Test Node 1" labelText="Worker Node *" required>
                            <SelectItem value="Test Node 1" text="Test Node 1" />
                            <SelectItem value="Test Node 2" text="Test Node 2" />
                        </Select>
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'1rem'}}>
                            <div style={{display:'flex',flexDirection:'column',gap:'5px'}}><span>Build Credential JSON</span><span style={{color:'gray'}}>Enable Building Json to populate key-value credentials</span></div>
                            <div style={{marginLeft:'1.9rem'}}><Toggle size="sm" labelA="Off" labelB="On" defaultToggled id="toggle-2" /></div>
                        </div>
                        <div style={{height:'2px',backgroundColor:"gray"}}></div>
                        <div>
                            Values specific to  {dropdownValue}
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div>Copy Json To Clipboard</div>
                            <Button kind='tertiary'>Copy JSON</Button>
                        </div>
                    </Stack>
                </div>
    </div>
  )
}

export default SystemModal
