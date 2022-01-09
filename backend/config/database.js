const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDb connected"))
        .catch(err => console.log(err));
}

module.exports = connectDatabase;