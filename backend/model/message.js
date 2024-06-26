const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: null}
});

module.exports = mongoose.model('Message', schema);