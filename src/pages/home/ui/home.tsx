import { Projects } from "@widgets/projects/projects.tsx";
import { Skills } from "@widgets/skills/skills.tsx";
import { Socials } from "@widgets/socials/socials.tsx";
import { Welcome } from "@widgets/welcome/welcome.tsx";
import { WorkExperience } from "@widgets/work-experience/work-experience.tsx";

export const Home = () => (
	<div className="w-full px-[50px] py-8">
		<Welcome />
		<Projects />
		<Skills />
		<WorkExperience />
		<Socials />
	</div>
);
