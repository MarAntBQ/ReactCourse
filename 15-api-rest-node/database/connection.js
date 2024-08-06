const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/my_blog", {
            // Parameters required if you are using a version of MongoDB prior to 3.1.0
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        })   
        console.log('Connection to the database "my_blog" established');
    }
    catch (error) {
        console.log(error);
        throw new Error('Error connecting to the database');
    }
}

module.exports = {
    connection
}