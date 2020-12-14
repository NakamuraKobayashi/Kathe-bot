const mongoose = require('mongoose')
const mongopath = 'mongodb+srv://anush:cHuI3afkuhlAhqQ4@mongodb-kathebot.1q8g3.mongodb.net/test-db?retryWrites=true&w=majority'

module.exports = async() => {
    await mongoose.connect(mongopath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose
}