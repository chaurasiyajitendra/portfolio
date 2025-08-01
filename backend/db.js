const mongoose = require('mongoose');

const db = () => { 
  mongoose
    .connect(process.env.MONGODB_API, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('✅ Connected to MongoDB');
    })
    .catch((err) => {
      console.error('❌ Error in DB connection: ' + err.message);
    });
};

module.exports = db;