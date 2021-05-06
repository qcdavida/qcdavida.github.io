const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseSchema = require('../models/Course').schema;

//server side checking for regex, and necessary attributes

const userSchema = new Schema({
    email: String,
    firstname: String,
    lastname: String,
    password: String,
    isInstructor: Boolean,
    course: []
});

// const userSchema = new Schema({
//     password: {
//         type: String,
//         required: [true, 'Password cannot be left blank']
//     },
//     firstname: String,
//     lastname: String,
//     isInstructor:{
//         type: Boolean,
//         required: [true, "Must classify student or teacher"]
//     },
//     course: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Course'
//     }],
//     email: {
//         type: String,
//         required: [true,  'Email Address Cannot Be Left Blank'],
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
//         unique: true,
//         validate:{
//             isAsync: true,
//             validator: function (value, isValid) {
//                 const self = this;
//                 return self.constructor.findOne({ email: value })
//                     .exec(function (err, user) {
//                         if (err) {
//                             throw err;
//                         } else if (user) {
//                             if (self.id === user.id) {
//                                 // if findging and saving then its valid for existing e-mail
//                                 return isValid(true);
//                             }
//                             return isValid(false);
//                         } else {
//                             return isValid(true);
//                         }
//                     })
//             },
//             message: "The email address is already taken!"
//         },
//     }
// }); // https://mongoosejs.com/docs/validation.html#async-custom-validators -- ASYNC CUSTOM VALIDATORS

// module.exports = User = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);