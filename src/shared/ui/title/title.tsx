import { clsx } from "clsx";

import { ITitle } from "@shared/ui/title/title.types.ts";

export const Title = ({ children, className, ...props }: ITitle) => {
	return (
		<h3
			className={clsx(
				"w-full border-b pb-8 my-6 text-[28px] border-border",
				className
			)}
			{...props}>
			{children}
		</h3>
	);
};
