import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'You have to enter username'],
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'You have to enter email'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'you have to enter password'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
