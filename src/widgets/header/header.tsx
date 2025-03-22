import { Navbar } from "@features/navbar/navbar.tsx";

export const Header = () => {
	return (
		<div className="flex flex-row gap-4 px-[50px] py-8 w-full justify-between items-start">
			<img alt="Moon" className="w-10 h-10" src="/images/moon-related.png" />
			<Navbar />
		</div>
	);
};
