import multer from "multer"
const mimeTypes = ['image/jpeg', 'image/png', 'image/jppg']

const storage = multer.diskStorage({ 
  destination: (req, file, cb) => { 
    cb(null, 'uploads')
  }, 
  filename: (req, file, cb) => { 
    console.log(file)
    cb(null, file.originalname)
  }, 
})
const upload = multer({ 
  storage: storage,
  limits: 2 * 1024 * 1024,
  // fileFilter: (req, file, cb) => {
  //   const isAccepted = mimeTypes.includes(file.mimetype)
  //   cb(null, isAccepted)
  // }
})
function uploadMiddleware(req, res, next) {
  upload.single('picture')(req, res, (err) => { 
    if (err) { 
      res.status(400).json({ 
        "success": false, 
        "message": "failed"
      })
      return
    }
    next()
  })
}

export default uploadMiddleware