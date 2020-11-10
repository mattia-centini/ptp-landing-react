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
                    <a className="header__iconsAnchor" href='https://www.linkedin.com/in/michele-mari-65926b145/' target="_blank"
                    >
                        <LinkedInIcon fontSize='large'/>
                    </a>                   
                </IconButton>
                <IconButton>
                     <a className="header__iconsAnchor" href='https://www.instagram.com/michelemari/' target="_blank">
                        <InstagramIcon fontSize='large'/>
                     </a>
                </IconButton>
                <IconButton>
                     <a className="header__iconsAnchor" href='https://www.facebook.com/michele.mari.98' target="_blank">
                        <FacebookIcon fontSize='large'/>
                     </a>
                    
                </IconButton>
           </div>
            
      </div>
    )
}

export default Header
