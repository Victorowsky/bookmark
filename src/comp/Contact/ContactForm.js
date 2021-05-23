import "./ContactForm.scss"
import React, { useRef, useState } from 'react';
import { Button, makeStyles } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";

const useStyles = makeStyles({
    contactBtn:{
        backgroundColor: 'hsl(0, 94%, 66%)',
        textTransform:'none',
        color:'white',
        border:'2px solid transparent',
        padding:'10px 25px',
        "&:hover":{
            backgroundColor:'white',
            color:'hsl(0, 94%, 66%)',
            border:'2px solid hsl(0, 94%, 66%)'
        }
    }
})

const ContactForm = () => {

    const classes = useStyles()
    
    const formRef = useRef(null)

    const [value, setValue] = useState('');
    const [isEmailError, setIsEmailError] = useState(false);
    const [isEmailSuccess, setIsEmailSuccess] = useState(false);

    const checkEmail = (e) =>{
        e.preventDefault()
        if(value.includes('@') && value.includes('.')){
            setIsEmailSuccess(true)
            setValue('')
            setTimeout(() => {
                setIsEmailSuccess(false)
            }, 3000);
        }else{
            setIsEmailError(true)
            setTimeout(() => {
                setIsEmailError(false)
            }, 3000);

        }
    }

    return ( 
        <div className="contactForm">
            <form>
            <div className="inputAndError">
                 <input className="contactForm_Input" ref={formRef} type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}
                placeholder={"Enter your email address"} />
                <CSSTransition in={isEmailError} timeout={200} classNames="error" unmountOnExit>
                    <div className="inputError">Whoops, make sure it's an email</div>
                </CSSTransition>
                <CSSTransition in={isEmailSuccess} timeout={200} classNames="error" unmountOnExit>
                    <div className="inputSuccess">We'll be in touch with you</div>
                </CSSTransition>
                 
            </div>
           

            <button onClick={checkEmail} style={{display:'none'}}></button>
            </form>
           

        <Button onClick={checkEmail} className={classes.contactBtn} variant="outlined">Contact us</Button>

        </div>
     );
}
 
export default ContactForm;