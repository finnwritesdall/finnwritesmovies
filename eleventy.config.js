export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addWatchTarget("./src/css/");
	eleventyConfig.addWatchTarget("../../Documents/ReThink/FWM/Posts/")

	return {
		markdownTemplateEngine: "liquid",
		htmlTemplateEngine: "liquid",
		dir: {
			input: "src",
			output: "public",
		}
	};


};
