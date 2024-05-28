const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vivekbhatt272:EdlzGpwFczVHCeNT@cluster0.azgpo7g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
