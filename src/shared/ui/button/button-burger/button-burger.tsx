import { clsx } from "clsx";

import { IButtonBurger } from "@shared/ui/button/button-burger/button-burger.types.ts";

export const ButtonBurger = ({ className, ...props }: IButtonBurger) => {
	return (
		<button
			className={clsx("flex flex-col gap-1.5 w-[30px]", className)}
			{...props}>
			<div className="h-[3px] bg-white w-full rounded" />
			<div className="h-[3px] bg-white w-full rounded" />
			<div className="h-[3px] bg-white w-full rounded" />
		</button>
	);
};
