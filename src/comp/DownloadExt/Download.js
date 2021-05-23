import BrowserCard from "./BrowserCard"
import "./Download.scss"

import ChromeImg from '../../images/logo-chrome.svg'
import FirefoxImg from '../../images/logo-firefox.svg'
import OperaImg from '../../images/logo-opera.svg'

const Download = () => {
    return ( 
        <div className="download_Container">
            <h2>Download the extension</h2>
            <p className="text">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize</p>
            <div className="browsers_Container">
            <BrowserCard img={ChromeImg} version={'62'} browser={'Chrome'} />
            <BrowserCard img={FirefoxImg} version={'55'} browser={'Firefox'} />
            <BrowserCard img={OperaImg} version={'46'} browser={'Opera'} />
            </div>
            
        </div>
     );
}
 
export default Download;