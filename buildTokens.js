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

// Register our custom scss transforms
StyleDictionary.registerTransformGroup({
    name: 'scss/custom',
    transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/rem', 'color/css', 'type-family/scss']
});

StyleDictionary.buildAllPlatforms();