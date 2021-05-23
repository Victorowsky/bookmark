
import { useRef } from "react";

const FeatureOption = ({children,choosen,nr}) => {

    const ref = useRef(null)


    let classes;
    if(choosen){
         classes = 'featureOption active'
    }else{
         classes = 'featureOption'
    }

    return ( 
        <div className={classes} ref={ref} data-nr={nr}>
            {children}
        </div>
     );
}
 
export default FeatureOption;