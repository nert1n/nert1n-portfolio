export interface IProject {
	title: string;
	description: string;
	link?: string;
	image_url: string;
}

export const ProjectsData: IProject[] = [
	{
		title: "Charity lab",
		description: "Charity lab",
		image_url: "/images/projects/charity-lab.png",
	},
	{
		title: "English Cards",
		description: "English Cards",
		image_url: "/images/projects/english-cards.png",
	},
	{
		title: "Codersbud - social network",
		description: "Codersbud - social network",
		link: "https://www.codersbud.com",
		image_url: "/images/projects/codersbud.png",
	},
	{
		title: "Nutrifisio",
		description: "Nutrifisio",
		link: "https://nutrifisio.com/",
		image_url: "/images/projects/nutrifisio.png",
	},
	{
		title: "Crypto drop",
		description: "Crypto drop",
		link: "https://cryptodrop.net/",
		image_url: "/images/projects/crypto-drop.png",
	},
	{
		title: "Auditeriya",
		description: "Auditeriya",
		image_url: "/images/projects/auditeriya.png",
	},
];
