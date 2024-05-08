const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
        quantity: { type: Number, required: true, min: 1 }
    }],
    subTotal: { type: Number, required: true },
    shippingFee: { type: Number, required: true, default: 0 },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered'], default: 'pending' },
    paymentType: {
        type: String,
        required: true,
        enum: ["cash-on-delivery", "card"],
        default: "cash-on-delivery"
    },
    paymentInfo: {
        id: {
            type: String
        },
        status: {
            type: String
        }
    },
    shippingAddress: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        mobile: { type: Number, minLength: 10, maxLength: 10, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        pinCode: { type: String, required: true }
    },
}, { timestamps: true });

orderSchema.pre('save', async function (next) {
    try {
        if (this.isModified("paymentType") && this.paymentType == "card") {
            if (!this.paymentInfo.id || !this.paymentInfo.status || this.paymentInfo.id == "" || this.paymentInfo.status == "") {
                throw new Error("Payment info - (id, status) is required");
            }
        }
        next();
    } catch (error) {
        next(error);
    }
});

const OrderModel = mongoose.model('order', orderSchema);

module.exports = OrderModel;
