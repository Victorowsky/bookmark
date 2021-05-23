import { Button, makeStyles } from "@material-ui/core";
import "./Simple.scss"
import BGImage from  "../../images/illustration-hero.svg"


const useStyles = makeStyles({
    button:{
        padding:'10px 20px',
        borderColor:'hsl(231, 69%, 60%)',
        background:'hsl(231, 69%, 60%)',
        color:'white',
        borderRadius:'5px',
        width:'fit-content',
        textTransform:'none',
        boxShadow:"0 2px 2px rgba(128, 128, 128, 0.5)",
        cursor:'pointer',
        "&:hover":{
            color:'hsl(231, 69%, 60%)'
        },
},
    firefox:{
        border:'2px solid white',
        padding:'10px 20px',
        borderColor:'white',
        background:'white',
        textTransform:'none',
        color:'grey',
        borderRadius:'5px',
        width:'fit-content',
        boxShadow:"0 2px 2px rgba(128, 128, 128, 0.5)",
        cursor:'pointer',
        "&:hover":{
            border:"2px solid grey"
        }
    }

})

const Simple = () => {

    const classes = useStyles()

    return (
        // <div className="background_Container">
        <div className="simple_Container">
        
                <div className="simple">
                    <h1 className="simple_h1">A Simple Bookmark Manager</h1>
                    <p className="text">
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className="buttons_Container">
                    <Button className={classes.button} variant="outlined">Get it on Chrome</Button>
                
                    <Button className={classes.firefox}>
                        Get it on Firefox
                    </Button>
                    </div>
                    
                </div>
                <div className="bgImage_Right">
                    <img src={BGImage} alt=""/>
                </div>
        </div>
        // </div>

     );
}
 
export default Simple;