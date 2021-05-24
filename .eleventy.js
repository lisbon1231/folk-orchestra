const injectFilters = require("./eleventy-filters")
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/static')
    eleventyConfig.addWatchTarget('./src/static')

    injectFilters(eleventyConfig)

    return {
        dir: {
            input: 'src',
            output: 'build',
            // includes: '/src/_includes'
            // markdown: "content"
        },

        // dataTemplateEngine: 'njk',
        // markdownTemplateEngine: 'njk',
        // htmlTemplateEngine: 'njk',
        // templateFormats: [
        //     'md', 'njk'
        // ],
    };
};