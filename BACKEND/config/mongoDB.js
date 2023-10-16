const mongoose = require("mongoose")

const connect_mongodb = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/quiz?directConnection=true")
        console.log("connected")
    } catch (error) {
        console.log("failed to connect db ", error.message)
    }

}
connect_mongodb()
