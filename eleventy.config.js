import footnote_plugin from "markdown-it-footnote";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { DateTime } from "luxon";
export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");
  
  eleventyConfig.addPassthroughCopy("./src/css");

  eleventyConfig.addPassthroughCopy("./src/images/");

  eleventyConfig.addPassthroughCopy("/images/my-favicon/");

  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addWatchTarget("../../Documents/ReThink/FWM/");

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(footnote_plugin));

  // Custom Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("en-AU")
      .toLocaleString({ day: "numeric", month: "short", year: "numeric" });
  });

  // RSS Plugin
  	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Finn Writes Movies",
			subtitle: "A place for my thoughts on movies and other writing.",
			base: "https://finnwritesmovies.com",
			author: {
				name: "Finnlay Dall",
				email: "finnwritesdall@gmail.com", // Optional
			}
		}
	});


  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public",
    },
  };
}
