const withPlugins = require('next-compose-plugins');
const path = require('path')
const withImages = require("next-images");

const nextConfiguration = {
    reactStrictMode: true,
    typescript:{},
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        cssModules: false
    },
    images: {
        domains: [""],
    },
}

module.exports = withPlugins([
    [withImages, {}]
], nextConfiguration);