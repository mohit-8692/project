const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const model = mongoode.model;

main()
.then(()=>console.log("connection success"))
.catch(err => console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/testData');
}

const listSchema = new mongoose.Schema
({
    name:{
        type:String,
        required: true
    },
    rollNo:{
        type:Number,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phoneNo:{
        type:String,
        required: true
    },
    course: {
        type:String,
        required: true
    },
    semester: {
        type:String,
        required: true
    }
});

const user = new mongoose.model("user", listSchema);
let user1 = new user({
    name:"Mohit Gupta",
    rollNo: 220573,
    email:"mohitgupta8692@gmail.com",
    phoneNo:"8602227392",
    course:"MCA",
    semester:"second"
})

.save()
.then(()=>{console.log("data set")})
.catch((err)=>{
    console.log(err);
})

// const user = mongoose.model("listing",listSchema);
// module.exports = user;