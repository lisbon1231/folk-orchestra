const IntlR = require("intl")
module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksFilter("rusDate", function (value) {
    const date = new Date(value)
    const formatOptions = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }
    const dateFormater = new IntlR.DateTimeFormat('ru', formatOptions);

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
  
  eleventyConfig.addNunjucksFilter("isFutureEvent", function(arr) {
    return arr.filter(item => {
        const currentDate = +new Date()
        const dateToCompare = +new Date(item._date)
        return currentDate < dateToCompare
    }).legnth
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
}