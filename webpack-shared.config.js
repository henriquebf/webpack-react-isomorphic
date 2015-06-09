
module.exports = {
    loaders: [
        {
            test: /\.(svg|jpe?g|png|gif)$/,
            loaders: ['url?limit=' + 5000, 'image']
        },
        {
            test: /\.(woff|woff2|ttf|eot)$/,
            loaders: ['url?limit=' + 5000]
        }
    ],
    autoprefixer: {
        browsers:[
            'last 2 version', 'Chrome 41', 'Firefox 36', 'Safari 7', 'Explorer 9'
        ]
    }
};
