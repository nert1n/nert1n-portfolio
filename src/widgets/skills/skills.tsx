import { SkillsData } from "@shared/data/skills.types.ts";
import { Title } from "@shared/ui/title/title.tsx";

export const Skills = () => {
	return (
		<div>
			<Title>Skills</Title>
			<div className="flex flex-row flex-wrap gap-5 w-full">
				{SkillsData.map((skill, id) => (
					<img key={skill.name + id} alt={skill.name} src={skill.icon_url} />
				))}
			</div>
		</div>
	);
};
