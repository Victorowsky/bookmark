import "./Header.scss";
import LogoBookMark from "../../images/logo-bookmark.svg";
import { useCallback, useEffect, useState } from "react";
import RightSide from "./RightSide";
import RightSideMobile from "./RightSideMobile";
import { CSSTransition } from "react-transition-group";

import MobileMenu from "./MobileMenu";

const Header = () => {
	const [isMobile, setIsMobile] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleCheckIsMobile = useCallback(() => {
		const width = window.innerWidth;
		if (width < 700 && !isMobile) {
			setIsMobile(true);
		} else if (width > 700 && isMobile) {
			setIsMobile(false);
			setIsMenuOpen(false);
		}
	}, [isMobile]);

	useEffect(() => {
		handleCheckIsMobile();
		window.addEventListener("resize", handleCheckIsMobile);

		return () => {
			window.removeEventListener("resize", handleCheckIsMobile);
		};
	}, [handleCheckIsMobile]);

	const handleToggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<header className="header">
			{!isMenuOpen && (
				<>
					<div className="leftSide">
						<img src={LogoBookMark} alt="" srcSet="" />
					</div>
					{isMobile ? (
						<RightSideMobile handleToggleMenu={handleToggleMenu} />
					) : (
						<RightSide />
					)}
				</>
			)}

			{isMobile && (
				<CSSTransition
					in={isMenuOpen}
					timeout={200}
					unmountOnExit
					classNames="transition"
				>
					<MobileMenu handleToggleMenu={handleToggleMenu} />
				</CSSTransition>
			)}
		</header>
	);
};

export default Header;
