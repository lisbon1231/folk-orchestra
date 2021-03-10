module.exports = function (eleventyConfig) {
    // Add a filter using the Config API
    // eleventyConfig.addFilter( "myFilter", function() {});

    // You can return your Config object (optional).
    return {
        dir: {
            layouts: "templates",
            markdown: "content"
        },

        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        templateFormats: [
            'md', 'njk'
        ],
    };
};