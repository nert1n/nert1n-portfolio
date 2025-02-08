type Mods = Record<string, boolean | string>;

const classNames = (
	cls: string,
	mods: Mods = {},
	additional: string[] = []
): string => {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			.filter(([_, value]) => Boolean(value))
			.map((className: [string, boolean | string]) => className),
	]
		.join(" ")
		.trim();
};

export default classNames;
