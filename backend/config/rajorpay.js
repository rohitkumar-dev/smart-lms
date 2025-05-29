const Rajorpay = require('razorpay');
require('dotenv').config();

// exports.instance = new Rajorpay({
//     key_id: process.env.RAZORPAY_KEY,
//     key_secret: process.env.RAZORPAY_SECRET
// })  
exports.instance = new Rajorpay({
    key_id: "rzp_test_JoBbSen7ymeohX",
    key_secret: "ISbG9rKdbqNFW5VtyLNTJx6S"
})  