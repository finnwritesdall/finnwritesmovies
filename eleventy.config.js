import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css");
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
eleventyConfig.addPlugin(eleventyImageTransformPlugin);

};
