import React from 'react';
import FontAwesome from 'react-fontawesome'
import { StyledFooter } from '../styles/StyledFooter'


const Footer = () => {

  return (
    <StyledFooter>
      <div className="footer-content">
					<div className="footer-text" >
						<p> &copy; {new Date().getFullYear()}, Built by 
							<a href="https://github.com/santiagogrr" target="_blank" rel="noopener noreferrer">
								<FontAwesome className="fa-github" name="clock-o" size="2x" />					
							</a>
							Santiago Guerra
						</p>  
					</div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
