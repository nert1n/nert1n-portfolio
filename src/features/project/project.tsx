import { clsx } from "clsx";
import { Link } from "react-router-dom";

import { ProjectProps } from "@features/project/project.types.ts";

export const Project = ({ isReversed, project }: ProjectProps) => {
	return (
		<div
			className={clsx("flex flex-row gap-6", isReversed && "flex-row-reverse")}>
			<img
				alt={project.title}
				className="rounded-[10px] h-[300px] aspect-video"
				src={project.image_url}
			/>
			<div className="w-full">
				<p className="text-4xl">{project.title}</p>
				<p className="text-base">{project.description}</p>
				{project.link && (
					<Link className="text-xl underline" target="_blank" to={project.link}>
						Go to site
					</Link>
				)}
			</div>
		</div>
	);
};
