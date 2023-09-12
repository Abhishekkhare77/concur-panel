import React from 'react'

const AuthLayout = (props) => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
      {props.children}
    </div>
  )
}

export default AuthLayout
