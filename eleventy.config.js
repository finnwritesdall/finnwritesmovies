export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/images/")
	eleventyConfig.addWatchTarget("./src/css/");
	eleventyConfig.addWatchTarget("../../Documents/ReThink/FWM/")
	return {
		markdownTemplateEngine: "liquid",
		htmlTemplateEngine: "liquid",
		dir: {
			input: "src",
			output: "public",
		}
	};

};
