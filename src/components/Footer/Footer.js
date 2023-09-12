import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
           <div></div>
           <div>
            <ul style={{display:'flex'}}>
                <li><Link style={{textDecoration:'none',color:'gray',padding:'1rem 2rem'}} to={'/'}>Contact</Link></li>
                <li><Link style={{textDecoration:'none',color:'gray',padding:'1rem 2rem'}} to={'/'}>Privacy</Link></li>
                <li><Link style={{textDecoration:'none',color:'gray',padding:'1rem 2rem'}} to={'/'}>Terms of use</Link></li>
                <li><Link style={{textDecoration:'none',color:'gray',padding:'1rem 2rem'}} to={'/'}>Accessibility</Link></li>
                <li><Link style={{textDecoration:'none',color:'gray',padding:'1rem 2rem'}} to={'/'}>Cookie Preferences</Link></li>
            </ul>
           </div>
        </div>
    )
}

export default Footer
