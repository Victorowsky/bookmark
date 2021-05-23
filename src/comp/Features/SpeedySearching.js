
import NormalButton from "../NormalButton"
import img from "../../images/illustration-features-tab-2.svg"

const SpeedySearching = () => {
    return ( 
        <>
        <div className="bgImage">
            <img src={img} alt=""/> 
        </div>
        <div className="featured_Info">
            <h2>Inteligent search</h2>
            <p className="text">Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
            <NormalButton>More info</NormalButton>
        </div>
        </>

     );
}
 
export default SpeedySearching;