const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

// trick to avoid identical names
// shopSchema.pre("save", async next => {
//   if (!this.isModified("name")) {
//     next();
//     return;
//   }

//   const nameRegEx = new RegExp(`^(${this.name})((-[0-9]*$)?)$`);
//   const shopsWithName = await this.constructor.find({ name: nameRegEx });

//   if (shopsWithName.length) {
//     this.name = `${this.name}-${shopsWithName.length + 1}`;
//   }

//   next();
// });

module.exports = mongoose.model("Shop", shopSchema);
