const _ = require('lodash');
const StyleDictionary = require("style-dictionary").extend(
    __dirname + "/config.json"
);

// Helps to translate system into the right system font stack
StyleDictionary.registerTransform({
    name: 'type-family/scss',
    type: 'value',
    matcher: prop => prop.attributes.category === 'type' && prop.attributes.type === 'family',
    transformer: prop => {
        if (prop.value === 'native') {
            return `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
        }
        if (prop.value === 'native-mono') {
            return `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`
        }
        return prop.value
    }
});

// Translate font size to rem
StyleDictionary.registerTransform({
    name: 'type-size/scss',
    type: 'value',
    matcher: prop => prop.attributes.category === 'type' && prop.attributes.type === 'size',
    transformer: prop => `${prop.value / 16}rem`
});

// Transform name to match scss variable format
StyleDictionary.registerTransform({
    name: 'name/scss-var',
    type: 'name',
    transformer: (prop, options) => `$${_.kebabCase([options.prefix].concat(prop.path).join(' '))}`
})

// Register our custom scss transforms
StyleDictionary.registerTransformGroup({
    name: 'scss/custom',
    transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'type-size/scss', 'color/css', 'type-family/scss']
});

// Register our custom scss-js transforms
StyleDictionary.registerTransformGroup({
    name: 'scss/custom-js',
    transforms: ['attribute/cti', 'name/scss-var', 'time/seconds', 'content/icon', 'type-size/scss', 'color/css']
});

StyleDictionary.buildAllPlatforms();