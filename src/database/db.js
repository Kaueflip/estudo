const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait connection to the database");

  mongoose
    .connect(
      "mongodb+srv://mongorootz:mongorootz@cluster0.zozwqeg.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas connected!"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
mongoose.set('strictQuery', false);