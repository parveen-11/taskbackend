const Router = require('express').Router
const uuid = require("uuid").v4;
const router = new Router();

  let Controller = require("../controller/controller.js");
  const multer = require('multer');
  // multer upload image code
  const storagess = multer.diskStorage({
      destination: function (req, file, cb) {
          cb(null, 'uploads');
      },
      filename: function (req, file, cb) {
        const originalname = `${uuid()}`;
        file.originalname = originalname;
        cb(null, file.originalname);
      }
  });
  let uploadIm = multer({ storage: storagess });
    router.post("/create",
    uploadIm.single('file'), 
    function(req, res, next){ 
      next()},
    Controller.creater
  )

router.get("/getlist",Controller.getData)
router.post("/deletecv",Controller.deleteData)
module.exports = router;
