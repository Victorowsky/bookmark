import { IconButton } from "@material-ui/core";
import HamburgerIcon from "../../images/icon-hamburger.svg";
import React from "react";
const RightSideMobile = ({ handleToggleMenu }) => {
	return (
		<div className="rightSideMobile">
			<IconButton onClick={handleToggleMenu}>
				<img src={HamburgerIcon} alt="" />
			</IconButton>
		</div>
	);
};

export default RightSideMobile;
