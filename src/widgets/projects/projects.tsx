import { Project } from "@features/project/project.tsx";
import { ProjectsData } from "@shared/data/projects.data.ts";
import { Title } from "@shared/ui/title/title.tsx";

export const Projects = () => {
	return (
		<div id="projects">
			<Title>PROJECTS</Title>
			{ProjectsData.map((project, id) => (
				<Project key={project.title + id} />
			))}
		</div>
	);
};
