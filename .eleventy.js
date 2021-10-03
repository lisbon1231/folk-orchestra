const injectFilters = require("./helpers/eleventy-filters")

const IntlR = require("intl")

// module.exports = (eleventyConfig) => {
//   eleventyConfig.addNunjucksFilter("rusDate", function (value) {
//     const date = new Date(value)
//     const formatOptions = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }
//     const dateFormater = new IntlR.DateTimeFormat('ru', formatOptions);

//     return dateFormater.format(date).slice(0, -3)
// });
  
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/static')
    eleventyConfig.addWatchTarget('./src/static')
    eleventyConfig.addWatchTarget('./helpers')

    injectFilters(eleventyConfig)

    eleventyConfig.addNunjucksFilter("findByIdArray", function (arr, arrToFilter) {
        if (!arrToFilter) return []
        return arr.filter(item => arrToFilter.includes(item.template.frontMatter.data.id))
    });

    eleventyConfig.addNunjucksFilter("findById", function (arr, id) {
        return arr.find(item => item.template.frontMatter.data.id === id)
    });

    eleventyConfig.addNunjucksFilter("joinDateRange", function (arr) {
        if(arr.length <=1) return new Date(arr[0]._date)
        // console.log('arr._date', arr)
        arr.sort((a, b) => {
            const dateA = +new Date(a._date)
            const dateB = +new Date(b._date)
            return dateA - dateB
        })

        console.log(arr)
        
        const formatOptions = { day: 'numeric', month: 'long', timeZone: 'UTC' }
        const dateFormater = new IntlR.DateTimeFormat('ru', formatOptions);

        const start = new Date(arr[0]._date)
        const end = new Date(arr[arr.length - 1]._date)

        return `${dateFormater.format(start)} - ${dateFormater.format(end)} ${end.getFullYear()}`
    });

    eleventyConfig.addNunjucksFilter("sortByField", function (arr, field) {
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