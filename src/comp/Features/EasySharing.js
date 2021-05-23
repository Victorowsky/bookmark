
import NormalButton from "../NormalButton"
import img from "../../images/illustration-features-tab-3.svg"

const EasySharing = () => {
    return ( 
        <>
        <div className="bgImage">
            <img src={img} alt=""/> 
        </div>
        <div className="featured_Info">
            <h2>Share your bookmarks</h2>
            <p className="text">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
            <NormalButton>More info</NormalButton>
        </div>
        </>

     );
}
 
export default EasySharing;