const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // generate unique filename
  }
});

const upload = multer({ storage: storage });

module.exports = upload.single('profileImage');
