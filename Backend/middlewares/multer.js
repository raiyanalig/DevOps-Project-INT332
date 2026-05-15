import multer from "multer";

const storage = multer.memoryStorage();


const fileFilter = (req, file, cb) => {
    
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed not other etypes!'), false);
    }
    cb(null, true);
};

export const singleUpload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 
    }
}).single("file");