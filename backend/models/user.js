const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
      select: false,
      private: true,
    },
    jwtToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);


/**
 * @typedef User
 */
module.exports = mongoose.model('User', userSchema);
