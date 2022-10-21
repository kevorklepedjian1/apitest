const mongoose = require("mongoose");
const {Schema} = mongoose;
// user schema

const UserSchema = new Schema({
  username: {
      type : String,
      required: true,
      unique: true,
  },
  email : {
      type : String,
      required: true,
      unique: true,
  },
  password: {
      type: String,
      required: true,
  }
})

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
