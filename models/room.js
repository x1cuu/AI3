const mongoose = require('mongoose');


const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  equipment: { type: [mongoose.Schema.Types.Mixed], required: false }, 
}, {
  timestamps: true, 
});


const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
