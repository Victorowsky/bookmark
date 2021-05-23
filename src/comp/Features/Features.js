import { useState } from "react";
import EasySharing from "./EasySharing";
// import { CSSTransition } from "react-transition-group";
import FeatureOption from "./FeatureOption"
import "./Features.scss"
import SimpleBookmarking from "./SimpleBookmarking";
import SpeedySearching from "./SpeedySearching";
const Features = () => {

    const [choosenFeature, setChoosenFeautre] = useState(1)

    const handleChoose = (e) =>{
        if(e.target.dataset.nr){
        const {nr} = e.target.dataset
        const list = document.querySelectorAll('.active')
        list.forEach(item=> item.classList.remove('active'))
        e.target.classList.toggle('active')
        setChoosenFeautre(Number(nr))
        }
 
    }


    
    const currentFeature = () => {
        if(choosenFeature === 1){
            return <SimpleBookmarking/>
        }else if(choosenFeature ===2){
            return <SpeedySearching/>
        }else if(choosenFeature ===3){
            return <EasySharing/>
        }
    }



    return ( 
        <div className="features">
                <div className="features_Info">
                    <h2>Features</h2>
                    <p className="text">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                </div>

                <div className="options" onClick={handleChoose}>
                <FeatureOption nr={1} choosen >Simple Bookmarking</FeatureOption>
                <FeatureOption nr={2}>Speedy Searching</FeatureOption>
                <FeatureOption nr={3}>Easy sharing</FeatureOption>
                </div>
                <div className="featured_Container">
                   {currentFeature()}
                </div>

        </div>
     );
}
 
export default Features;