const mongoose = require('mongoose');

const connectDB = async (req,res)=>{
    try{
        await mongoose.connect("mongodb://localhost:27017",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex : true,
            useFindAndModify:false
        });
        console.log('MongoDB is Connected...✅')
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
