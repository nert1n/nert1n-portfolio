import { Project } from "@features/project/project.tsx";
import { ProjectsData } from "@shared/data/projects.data.ts";
import { Title } from "@shared/ui/title/title.tsx";

export const Projects = () => {
	return (
		<div id="projects">
			<Title>PROJECTS</Title>
			<div className="flex flex-col gap-[90px] my-8">
				{ProjectsData.map((project, id) => (
					<Project
						key={project.title + id}
						isReversed={id % 2 !== 0}
						project={project}
					/>
				))}
			</div>
		</div>
	);
};
