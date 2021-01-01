export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "modules/are-we-there-yet/templates"
	];

	return loadTemplates(templatePaths);
}
