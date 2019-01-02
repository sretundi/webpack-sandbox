
exports.devServer = () => {
    return {
        devtool: 'inline-source-map',
        devServer: {
            open: true,
            overlay: true,
            hotOnly: true,
        }
    }
}
