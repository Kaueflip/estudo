const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log("Wait connection to the database")

    mongoose.connect("mongodb+srv://mongorootz:mongorootz@cluster0.zozwqeg.mongodb.net/?retryWrites=true&w=majority", 
    {useNewUrlParser: true, useUnifiedTopology:true}
    );
};

module.exports = connectDatabase;