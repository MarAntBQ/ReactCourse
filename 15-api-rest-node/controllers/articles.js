exports.getTest = (req, res) => {
    console.log("Test")
    return res.status(200).json({
        message: "I'm a test message"
    });
}