const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://mfurqan264:mfurqan264@cluster0.iohfsec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}