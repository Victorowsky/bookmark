import NormalButton from "../NormalButton"
import "./BroweserCard.scss"
const BrowserCard = ({img, browser, version}) => {
    return ( 
        <div className="browserCard">
            <div className="logo">
                <img src={img} alt=""/>
            </div>
            <div className="browserInfo">
                <h4>Add to {browser}</h4>
                <p className="text">Minimum version {version}</p>
            </div>
            <div className="button">
             <NormalButton>Add & Install Extension</NormalButton>
            </div>
        </div>
     );
}
 
export default BrowserCard;