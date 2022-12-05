// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/task", {
//     useNewUrlParser: true,
//   })
//   .then(() => console.log("DB Connected successfully !"))
//   .catch((err) => console.log("Something Went Wrong", err));

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/task", {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected successfully !"))
  .catch((err) => console.log("Something Went Wrong", err));
