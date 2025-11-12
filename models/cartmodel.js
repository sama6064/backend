const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            unique: true,
        },
        products: [
            {
                productid: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("cart", cartSchema);
