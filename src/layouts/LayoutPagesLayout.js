import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import {
   Theme
} from '@carbon/react';
const LayoutPagesLayout = (props) => {
    return (
        <div>
            <div>
                <Theme theme='g10'>
                    <Navbar/>
                </Theme>
            </div>
            <div style={{marginLeft:"17vw",marginTop:'8vh'}}>
                {props.children}
            </div>
            <div style={{position:'absolute',bottom:'0',left:'0',marginLeft:"17vw"}}>
                {/* <Footer/> */}
            </div>
        </div>
    )
}

export default LayoutPagesLayout
