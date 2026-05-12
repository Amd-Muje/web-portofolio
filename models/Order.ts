import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  userId?: string; // Boleh kosong jika guest checkout
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  productType: 'domain' | 'server' | 'website';
  productName: string;
  amount: number;
  tax: number;
  totalAmount: number;
  paymentStatus: 'pending' | 'success' | 'failed' | 'expired';
  midtransOrderId: string;
  paymentUrl?: string; // URL redirect ke midtrans snap
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String },
    
    productType: { 
      type: String, 
      required: true,
      enum: ['domain', 'server', 'website'] 
    },
    productName: { type: String, required: true },
    
    amount: { type: Number, required: true },
    tax: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    
    paymentStatus: { 
      type: String, 
      default: 'pending',
      enum: ['pending', 'success', 'failed', 'expired'] 
    },
    midtransOrderId: { type: String, required: true, unique: true },
    paymentUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
