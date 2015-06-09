
var srcDir = './app';
var destDir = './public';
var isProduction = process.env.NODE_ENV === 'production';
var version = require('../package.json').version;

module.exports = {

    global: {
        srcDir: srcDir,
        destDir: destDir,
        isProduction: isProduction
    },

    clean: {
        dirs: [destDir]
    },

    copy: {
        src: ['images/**/*', 'videos/**/*'],
        base: './assets',
        cwd: './assets/**'
    },

    copyJsVendor: {
        srcDir: srcDir + '/vendors/**/*',
        destDir: destDir + '/vendors/'
    }

};
