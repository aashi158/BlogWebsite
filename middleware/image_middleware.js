const multer  = require('multer')
const path = require('path')

// image uploading
var Storage= multer.diskStorage({   //function define hua hai
    destination:"./public/upload/",
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
  });
// middle ware
const upload = multer({
    storage:Storage

}).single('image123')

module.exports = upload