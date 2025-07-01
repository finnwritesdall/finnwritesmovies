import footnote_plugin from "markdown-it-footnote";
export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");

  eleventyConfig.addPassthroughCopy("./src/images/");

  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addWatchTarget("../../Documents/ReThink/FWM/");

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(footnote_plugin));
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
}
