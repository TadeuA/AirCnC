const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

//exportar model
module.exports = mongoose.model('Booking', BookingSchema);