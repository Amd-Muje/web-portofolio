import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    role: { type: String, default: 'user', enum: ['user', 'admin'] },
  },
  { timestamps: true }
);

// Prevent mongoose from recompiling the model upon hot-reloads
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
