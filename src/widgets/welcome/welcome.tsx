import { ButtonScroll } from "@shared/ui/button/button-scroll/button-scroll.tsx";

export const Welcome = () => {
	return (
		<div className="flex flex-col justify-between gap-8 px-[120px] h-[calc(100vh-130px)] py-10">
			<div className="flex flex-col gap-8">
				<p className="text-2xl font-semibold">HELLO THERE!</p>
				<h1 className="text-[80px] font-bold max-w-[777px] leading-[100px]">
					I’m Baturin Maksim, a creative Frontend developer.
				</h1>
			</div>
			<div className="flex flex-row gap-2 justify-center">
				<ButtonScroll />
			</div>
		</div>
	);
};
