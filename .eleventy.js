const Intl = require("intl")
module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/static')
    eleventyConfig.addWatchTarget('./src/static')

    eleventyConfig.addNunjucksFilter("rusDate", function(value) { 
        const date = new Date(value)
        const formatOptions = {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'}
        const dateFormater = new Intl.DateTimeFormat('ru', formatOptions);
        console.log('Intl.DateTimeFormat(date)', dateFormater.format(date).slice(0, -3)) 
        
        return dateFormater.format(date).slice(0, -3)
    });

    eleventyConfig.addNunjucksFilter("rusTime", function(value) {
        return value.split(' ').join(':')
    });

    eleventyConfig.addNunjucksFilter("findByName", function(arr, name) {
        console.log(name)
        return arr.find(item => item.template.frontMatter.data.name === name)
    });

    eleventyConfig.addNunjucksFilter("findByNameArray", function(arr, addToFilter) {
        return arr.filter(item => addToFilter.includes(item.template.frontMatter.data.name))
    });

    eleventyConfig.addFilter("dropContentFolder", function (path) {
        if (path.endsWith("/index")) {
            path = path.substring(0, -6);
        }
        const pathToDrop = "/data"
        if (!path.startsWith(pathToDrop)) {
            return path
        }
        return path.slice(pathToDrop.length)
    })

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