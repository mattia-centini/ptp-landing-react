import React from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'
import Button from '@material-ui/core/Button';


function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_cjas8xn', e.target, 'user_AQKunFNUBLKoDF81AFTEm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    
      return (
        <form className="contact-form" onSubmit={sendEmail}>
          
          <input placeholder='Name' type="text" name="name" />
          
          <input placeholder='Email' type="email" name="email" />
         
          <textarea placeholder='type your message' name="message" />
          <Button variant="contained" color="default"
            type="submit" value="send"
          >Send</Button>
          {/* <input type="submit" value="Send" /> */}
        </form>
      );
}

export default Contact
