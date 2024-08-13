exports.getHome = (req, res, next) => {
    return res.status(200).send(
        "<h1>Welcome to the Home Page</h1>"
    );
}
exports.getAbout = (req, res, next) => {
    res.send('About Endpoint');
}

exports.getTesting = (req, res, next) => {
    //res.send('Testing Endpoint');
    return res.status(200).json([
        {
            course: "Node.js",
            author: "MarAntBQ",
            url: "https://marantbq.dev"
        },
        {
            course: "WordPress & Divi",
            author: "Marbust Videos and Entertainment",
            url: "https://videos.marbus.com"
        }
    ]);
}