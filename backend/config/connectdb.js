const mongoose = require('mongoose')


const connectddb=async()=>{
    try{
        await   mongoose.connect("mongodb://127.0.0.1:27017")
console.log('you are connected to the db')

    }catch(err){
console.log(err)
    }

}

module.exports = connectddb ;
