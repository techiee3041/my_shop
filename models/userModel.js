const mongoose = require("mongoose");
const bycrypt = require("bcrypt");

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  cart: {
    type: Array,
    default: [],
  },
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
  wishList: [{ type: mongoose.Schema.Types.ObjectId, ref: "WishList" }],
  refreshToken: {
    type: String,
  }
},
{
    timestamps: true,
});

userSchema.pre("save", async function (next) {
  const salt = await bycrypt.genSaltSync(10);
  this.password = await bycrypt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatch = async function (enteredPassword) {
  return await bycrypt.compare(enteredPassword, this.password);
};

//Export the model
module.exports = mongoose.model("User", userSchema);
