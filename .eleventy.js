const srcFolder = "src";

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/bundle.*");
    eleventyConfig.addLayoutAlias('base', 'base.njk');

    eleventyConfig.addFilter('console', function (value) {
        const str = util.inspect(value);
        return `<pre class="debug" style="white-space: pre-wrap;">${unescape(str)}</pre>`
    });

    eleventyConfig.setServerOptions({
        liveReload: true,
        showAllHosts: true,
    });

    return {
        dir: {
            input: srcFolder,
            output: "dist"
        },
    }
};