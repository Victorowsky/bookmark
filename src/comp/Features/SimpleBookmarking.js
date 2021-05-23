
import NormalButton from "../NormalButton"
import img from "../../images/illustration-features-tab-1.svg"

const SimpleBookmarking = () => {
    return ( 
        <>
        <div className="bgImage">
            <img src={img} alt=""/> 
        </div>
        <div className="featured_Info">
            <h2>Bookmark in one click</h2>
            <p className="text">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
            <NormalButton>More info</NormalButton>
        </div>
        </>

     );
}
 
export default SimpleBookmarking;