import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'you have to Enter Title'],
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    //using array for storing the subtodos
    subtodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtodos',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', userSchema);
