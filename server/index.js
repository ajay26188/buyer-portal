require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');


const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async() => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('connected to mongodb..');
    } catch (error) {
        console.error('error connecting to mongodb:', error.message);
        process.exit(1);
    }
};

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});