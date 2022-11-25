export interface Project {
	name: string,
	description: string,
	repo?: string,
	website?: string,
	startDate: Date,
	status: 'active' | 'finished' | 'frozen',
}

export const projects: readonly Project[] = [
	{
		name: "Pistol",
		description: "A modern and elegant speedcubing timer ",
		repo: "https://github.com/Odilf/Pistol/",
		website: "https://www.pistoltimer.com/",

		startDate: new Date("2021-08-04"),
		status: 'active',
	},

	{
		name: "Barbarosa",
		description: "Rubik's cube solver, in Julia",
		repo: "https://github.com/Odilf/Barbarosa/",

		startDate: new Date("2021-09-06"),
		status: 'active',
	},

	{
		name: "FAM.com",
		description: "The official Maggie fanpage",
		repo: "https://github.com/Odilf/FAM/",

		startDate: new Date("2021-10-18"),
		status: 'finished',
	},
	
	{
		name: "Dveco",
		description: "Lossy image compressor based on standard deviation, clearly worse than JPEG",
		repo: "https://github.com/Odilf/Dveco/",

		startDate: new Date("2022-02-08"),
		status: 'finished',
	},

	{
		name: "Spasmodic consonizer",
		description: "A fuzzy consonance analyser",
		repo: "https://github.com/Odilf/spasmodic-consonizer/",

		startDate: new Date("2022-02-13"),
		status: 'finished',
	},

	{
		name: "Rummy",
		description: "Online version of the board game, Rummy",
		repo: "https://github.com/Odilf/rummy",
		website: "https://rummy.odilf.com/",

		startDate: new Date("2021-12-26"),
		status: 'finished',
	},

	{
		name: "Daedalus",
		description: "A game about a labyrinth (an excuse to make a 3D renderer in x86 assembly)",
		repo: "https://github.com/Odilf/daedalus",

		startDate: new Date("2022-10-24"),
		status: 'finished',
	},

	{
		name: "Metadata Transferer",
		description: "Simple CLI tool to transfer metadata between files",
		repo: "https://github.com/Odilf/metadata-transferer",

		startDate: new Date("2022-08-07"),
		status: 'finished',
	},

	{
		name: "Chessagon",
		description: "Hexagonal chess",
		repo: "https://github.com/Odilf/Chessagon",

		startDate: new Date("2022-08-03"),
		status: 'frozen',
	},

	{
		name: "Minigames",
		description: "Assortment of minigames",
		repo: "https://github.com/Odilf/Minigames",
		website: "https://www.minigames.odilf.com/",

		startDate: new Date("2022-08-03"),
		status: 'finished',
	},

	{
		name: "PCnv",
		description: "Encode your messages with just a single word",
		repo: "https://github.com/Odilf/PCnv",
		website: "https://puta.odilf.com/",

		startDate: new Date("2021-12-17"),
		status: 'finished',
	},

	{
		name: "Baselga timer",
		description: "To correct time estimates of Sir Baselga",
		repo: "https://github.com/Odilf/baselga-timer",
		website: "https://baselga.odilf.com/",

		startDate: new Date("2021-10-15"),
		status: 'finished',
	},

]