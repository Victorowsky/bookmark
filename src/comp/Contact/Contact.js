import "./Contact.scss"
import ContactForm from "./ContactForm"
import Logo from '../../images/logo-bookmark-white.svg'
import FBLogo from '../../images/icon-facebook.svg'
import TwitterLogo from '../../images/icon-twitter.svg'

const Contact = () => {
    return ( 
        <div className="contact_Container_Background">


            <div className="contact_Container">
                    <div className="contact_Content">
                        <h4>35,000+ ALREADY JOINED</h4>
                        <h1>Stay up-to-date with what we're doing</h1>
                    </div>

                    <ContactForm/>
            </div>

          <div className="footer_Background">
              <div className="footer">
                  <div className="footer_Options">
                        <img src={Logo} alt=""/>
                        <p className="option">Features</p>
                        <p className="option">Pricing</p>
                        <p className="option">Contact</p>
                  </div>
                    <div className="footer_Socials">
                        <img src={FBLogo} alt=""/>
                        <img src={TwitterLogo} alt=""/>
                    </div>


              </div>
          
          </div>

        </div>
     );
}
 
export default Contact;