module.exports = {
    entry: './intro.js',
    output: {
        filename: './public/bundle.js'
    },
    node: {
        dns: 'mock',
        net: 'mock'
    }
};