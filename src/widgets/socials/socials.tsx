import { SocialsData } from "@shared/data/socials.data.ts";

export const Socials = () => {
	return (
		<div className="flex flex-col gap-8" id="socials">
			<p className="text-[28px]">Like what you see?</p>
			<div className="flex flex-col gap-4">
				<h5 className="text-[32px] font-bold">LET’S TALK!</h5>
				<div className="flex flex-row flex-wrap gap-2">
					{SocialsData.map((social, id) => (
						<a
							key={social.name + id}
							href={social.link_url}
							rel="noreferrer"
							target="_blank">
							<img
								alt={social.name}
								aria-label={"Social " + social.name}
								src={social.icon_url}
								title={"Social " + social.name}
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
