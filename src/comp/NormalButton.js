import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    button:{
        padding:'10px 30px',
        borderColor:'hsl(231, 69%, 60%)',
        background:'hsl(231, 69%, 60%)',
        color:'white',
        borderRadius:'5px',
        width:'fit-content',
        textTransform:'none',
        boxShadow:"0 2px 2px rgba(128, 128, 128, 0.5)",
        cursor:'pointer',
        "&:hover":{
            color:'hsl(231, 69%, 60%)',
        },
},


})


const NormalButton = ({children}) => {
    const classes = useStyles()
    
    return ( 
    <Button variant="outlined" className={classes.button}>{children}</Button>
     );
}
 
export default NormalButton;