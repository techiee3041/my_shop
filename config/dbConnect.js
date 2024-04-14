const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connection established");
  } catch (error) {
    console.log("Error connecting to database");
    throw new Error(error);
  }
};

module.exports = dbConnect;
