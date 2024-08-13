exports.getHome = (req, res, next) => {
    res.send('Hello World');
}
exports.getAbout = (req, res, next) => {
    res.send('About Endpoint');
}

exports.getTesting = (req, res, next) => {
    //res.send('Testing Endpoint');
    return res.status(200).send({
        course: "Node.js",
        author: "MarAntBQ",
        url: "https://marantbq.dev"
    });
}