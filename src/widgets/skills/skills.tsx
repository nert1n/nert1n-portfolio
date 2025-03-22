import { SkillsData } from "@shared/data/skills.data.ts";
import { Title } from "@shared/ui/title/title.tsx";

export const Skills = () => {
	return (
		<div id="skills">
			<Title>SKILLS</Title>
			<div className="flex flex-row flex-wrap gap-5 w-full">
				{SkillsData.map((skill, id) => (
					<img
						key={skill.name + id}
						alt={skill.name}
						aria-label={"Skill " + skill.name}
						src={skill.icon_url}
						title={"Skill " + skill.name}
					/>
				))}
			</div>
		</div>
	);
};
