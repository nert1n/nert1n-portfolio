import { clsx } from "clsx";
import { useState } from "react";

import { ButtonBurger } from "@shared/ui/button/button-burger/button-burger.tsx";

export const Navbar = () => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	const handleChangeOpenNavbar = () => setIsNavbarOpen(!isNavbarOpen);

	return (
		<div>
			<ButtonBurger onClick={handleChangeOpenNavbar} />
			<div
				className={clsx(
					"fixed sm:max-w-[60vw] w-max bg-black top-0 right-0 h-screen transition-transform duration-300",
					isNavbarOpen ? "translate-x-0" : "translate-x-full"
				)}>
				<ButtonBurger
					className="mx-[50px] my-8"
					onClick={handleChangeOpenNavbar}
				/>
			</div>
		</div>
	);
};
