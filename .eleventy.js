const injectFilters = require("./helpers/eleventy-filters")
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/static')
    eleventyConfig.addWatchTarget('./src/static')
    eleventyConfig.addWatchTarget('./helpers')

    injectFilters(eleventyConfig)

    eleventyConfig.addNunjucksFilter("findByIdArray", function(arr, arrToFilter) {
        if(!arrToFilter) return []
        return arr.filter(item => arrToFilter.includes(item.template.frontMatter.data.id))
    });

    eleventyConfig.addNunjucksFilter("findById", function(arr, id) {
    
        return arr.find(item => item.template.frontMatter.data.id === id)
      });

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