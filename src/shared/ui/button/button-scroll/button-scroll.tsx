import { clsx } from "clsx";

import { IButtonScroll } from "@shared/ui/button/button-scroll/button-scroll.types.ts";

export const ButtonScroll = ({ className, ...props }: IButtonScroll) => {
	return (
		<button
			className={clsx(
				"flex flex-col gap-2 justify-center items-center",
				className
			)}
			{...props}>
			Scroll
			<img
				alt="Arrow down"
				aria-label="Arrow down"
				className="w-6"
				src="/images/svgs/arrow-down.svg"
				title="Arrow down"
			/>
		</button>
	);
};
