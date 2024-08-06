exports.getHome = (req, res, next) => {
    res.send('Hello World');
}
exports.getAbout = (req, res, next) => {
    res.send('About Endpoint');
}