import footnote_plugin from "markdown-it-footnote";
import { DateTime } from "luxon";
export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");

  eleventyConfig.addPassthroughCopy("./src/images/");

  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addWatchTarget("../../Documents/ReThink/FWM/");

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(footnote_plugin));

  // Custom Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("en-AU")
      .toLocaleString({ day: "numeric", month: "short", year: "numeric" });
  });

  eleventyConfig.addCollection("allMySortedContent", function (collectionsApi) {
    return collectionsApi.getAllSorted().reverse();
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
