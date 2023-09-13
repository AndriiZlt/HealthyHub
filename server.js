const app = require("./backend/index");
const mongoose = require("mongoose");

// const DB_HOST =
//   "mongodb+srv://Andrii:ZEab0pkfK9O8Mi8c@cluster0.x7tlqka.mongodb.net/users?retryWrites=true&w=majority";

const { DB_HOST, PORT = 3001 } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://Andrii:ZEab0pkfK9O8Mi8c@cluster0.x7tlqka.mongodb.net/users?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
