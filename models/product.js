const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Must Be Provided"]
    },
    price: {
        type: Number,
        required: [true, "Price Must Be Provided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        // only mentioned or selected companies should be here
        enum: {
            values: ["apple", "samsung", "oneplus"],
            message: `{VALUE} is not supported`
        }
    }
})

module.exports = mongoose.model("Product", productSchema)