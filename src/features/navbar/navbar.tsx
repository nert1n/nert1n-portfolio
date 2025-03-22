import { clsx } from "clsx";
import { useState } from "react";

import { NavData } from "@shared/data/nav.data.ts";
import { ButtonBurger } from "@shared/ui/button/button-burger/button-burger.tsx";

export const Navbar = () => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	const handleChangeOpenNavbar = () => setIsNavbarOpen(!isNavbarOpen);

	return (
		<div>
			<ButtonBurger onClick={handleChangeOpenNavbar} />
			<button
				className={clsx(
					"fixed z-10 left-0 top-0 w-screen h-screen transition-all bg-bg-transparent opacity-0 pointer-events-none",
					isNavbarOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				)}
				onClick={handleChangeOpenNavbar}
			/>
			<div
				className={clsx(
					"fixed z-20 sm:max-w-[60vw] w-max bg-black top-0 right-0 h-screen transition-transform duration-300",
					isNavbarOpen ? "translate-x-0" : "translate-x-full"
				)}>
				<ButtonBurger
					className="mx-[50px] my-8"
					onClick={handleChangeOpenNavbar}
				/>
				<div className="flex flex-col gap-2">
					{NavData.map((item, id) => (
						<a key={item.label + id} href={item.link}>
							{item.label}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
