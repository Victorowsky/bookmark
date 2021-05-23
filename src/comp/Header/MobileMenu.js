import {  IconButton, makeStyles } from "@material-ui/core";
import CloseIcon from "../../images/icon-close.svg";
import LogoBookMark from "../../images/logo-bookmark-white.svg";
import MenuMobileOption from "./MobileMenuOption";
import FBIcon from "../../images/icon-facebook.svg"
import TwitterIcon from "../../images/icon-twitter.svg"

const useStyles = makeStyles({
	IconButton: {
		width: "fit-content",
		height: "fit-content",
	},
});
const MobileMenu = ({handleToggleMenu}) => {
	const classes = useStyles();

    return ( 
        <div className="mobileMenu">
            <div className="mobileMenu_Header">
                <img className="logo" src={LogoBookMark} alt=""/>
                <IconButton
                    className={classes.IconButton}
                    onClick={handleToggleMenu}>
                    <img src={CloseIcon} alt="" />
                </IconButton>
            </div>
            <div className="menuOptions">
                <MenuMobileOption>
                    Features
                </MenuMobileOption>
                <MenuMobileOption>
                    Pricing
                </MenuMobileOption>
                <MenuMobileOption>
                    Contact
                </MenuMobileOption>
                <MenuMobileOption>
                  <div className="mobileLogin_Button">
                      LOGIN
                  </div>
                </MenuMobileOption>
            </div>
            <div className="socials">
                <img src={FBIcon} alt=""/>
                <img src={TwitterIcon} alt=""/>
            </div>

		</div>
     );
}
 
export default MobileMenu;