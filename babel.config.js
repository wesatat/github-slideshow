module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        assets: './assets',
                        components: './src/components',
                        lib: './src/lib',
                        pages: './src/pages',
                        store: './src/store',
                        partials: './src/partials',
                    },
                },
            ],
        ],
    }
}
