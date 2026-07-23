const cloudinary = require('cloudinary').v2;
const cloudinaryModule = require('cloudinary'); // raw module, has .v2 nested
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const storage = cloudinaryStorage({
  cloudinary: cloudinaryModule,   // pass raw module here, not cloudinary.v2
  folder: 'drivego_DEV',
  allowedFormats: ['jpg', 'png', 'jpeg'],
});

module.exports = {
  cloudinary,
  storage
};