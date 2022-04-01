const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.error("could not connect to mongodb", err));

const coursSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});
const Course = mongoose.model("Course", coursSchema);
const course = new Course({
  name: "String",
  author: "String",
  tags: ["String", "avde"],
  isPublished: true,
});
console.log(course);
