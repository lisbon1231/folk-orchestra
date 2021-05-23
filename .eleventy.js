module.exports = function (eleventyConfig) {
    // Add a filter using the Config API
    // eleventyConfig.addFilter( "myFilter", function() {});

    // You can return your Config object (optional).

    eleventyConfig.addPassthroughCopy('./src/static')
    eleventyConfig.addWatchTarget('./src/static')

    eleventyConfig.addNunjucksFilter("rusDate", function(value) {
        const date = new Date(value)
        const str = `${(date.getDate() + '').padStart(2,0)}.${(date.getMonth() + '').padStart(2,0)}.${date.getFullYear()}`
        console.log(str)
        return str
    });

    eleventyConfig.addNunjucksFilter("rusTime", function(value) {
        return value.split(' ').join(':')
    });
    return {
        dir: {
            input: 'src',
            output: 'build'
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