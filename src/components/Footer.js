import React from 'react'
import './Footer.css'
import Contact from './Contact'


function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <ul>
                   <li><b>Michele Mari</b>: CEO & Creative Director</li> 
                   <li><b>Fabio Martellini</b>: CFO</li> 
                   <li><b>Mirko Mari</b>: Responsabile R&D</li> 
                </ul>
            </div>
            <div className='footer__right'>
              <Contact />
            </div>
            
        </div>
    )
}

export default Footer
