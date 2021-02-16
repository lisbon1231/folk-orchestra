module.exports = function (eleventyConfig) {
    // Add a filter using the Config API
    // eleventyConfig.addFilter( "myFilter", function() {});

    // You can return your Config object (optional).
    return {
        templateFormats: [
            "md"
          ],
        dir: {
            includes: "templates",
            markdown: "content"
        }
    };
};