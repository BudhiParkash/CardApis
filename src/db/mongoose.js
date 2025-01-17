const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/carddb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB successfully');
});

mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB', err);
});

module.exports = mongoose;
