const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "SUPERADMIN"],
    default: "USER",
  },
  profile: { type: String },
  number: { type: Number },
  isActive: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }
});

const User = mongoose.model("User", userSchema);
module.exports = User;





