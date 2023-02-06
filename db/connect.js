const mongoose = require("mongoose")

// const db = ''
// const password = ''
// const uri = `mongodb+srv://root:${password}@cluster0.wkvqi2g.mongodb.net/${db}?retryWrites=true&w=majority`
const connectDB = (uri) => {
    console.log("DB connected")
    mongoose.set('strictQuery', false)
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB