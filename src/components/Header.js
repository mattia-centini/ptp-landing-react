import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className='header__icons'>
                    <IconButton>
                    <LinkedInIcon fontSize='large'/>
                </IconButton>
                <IconButton>
                     <InstagramIcon fontSize='large'/>
                </IconButton>

                <IconButton>
                    <FacebookIcon fontSize='large'/>
                </IconButton>
           </div>
            
      </div>
    )
}

export default Header
