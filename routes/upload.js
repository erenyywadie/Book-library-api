const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `book-${Date.now()}.${ext}`);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;