const app = require("./backend/index");
const mongoose = require("mongoose");

// const DB_HOST =
//   "mongodb+srv://andriiyzlt:8paZJSeAEp5N6fm1@cluster-hw3.q6poqc8.mongodb.net/db-contacts?retryWrites=true&w=majority";

const { DB_HOST, PORT = 3001 } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
