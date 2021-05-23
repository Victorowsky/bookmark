
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	loginBtn: {
		border: "2px solid #fa5757",
		padding: "5px 30px",
		color: "white",
		boxShadow: "0 0 5px rgba(0, 0, 0, 0.205)",
		transition: "0.2s ease-in-out",
		backgroundColor:'#fa5757',
		"&:hover": {
			borderColor: "#fa5757",
			color: "#fa5757",
		},
	},
});

const RightSide = () => {
	const classes = useStyles();



    return ( 
        <div className="rightSide">
				<p className="option">Features</p>
				<p className="option">Pricing</p>
				<p className="option">Contact</p>
				<Button variant="outlined" className={classes.loginBtn}>
					Login
				</Button>
			</div>
     );
}
 
export default RightSide;