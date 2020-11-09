import React from 'react'
import './Main.css'
import ptp from '../img/logo_ptp.png'
import fc from '../img/log_fc.png'
import building from '../img/architecture.webp'

function Main() {
    return (
        <div className='main'>
            <div className='main__top'>
                <div className='main__topLeft'>
                     <img src={ptp} alt="company logo"/>
                </div>
                <div className='main__topRight'>
                    <img src={fc} alt='application logo' />
                </div>
                

            </div>

            <div className='main__bottom'>
                <img src={building} alt='skyscrapers' />
            </div>
            
            
        </div>
    )
}

export default Main
