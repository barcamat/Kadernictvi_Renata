module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");

   // Add a new passthrough file copy for JavaScript files
   eleventyConfig.addPassthroughCopy('js');


   // Zkopírovat site.webmanifest do _site/
   eleventyConfig.addPassthroughCopy("site.webmanifest");

   eleventyConfig.addPassthroughCopy("favicon");


  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
