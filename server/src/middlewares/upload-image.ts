import multer from "multer"
import path from "path"
import { catchAsyncError } from "../lib/catch-async-error"
import { ErrorHandler } from "../lib/error-handler"

const checkFileType = function (
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) {
  const fileTypes = /jpeg|jpg|png|gif|svg/

  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())

  const mimeType = fileTypes.test(file.mimetype)

  if (mimeType && extName) {
    cb(null, true)
  } else {
    // eslint-disable-next-line n/no-callback-literal
    cb(new ErrorHandler("Error: You can Only Upload Images!!", 400))
  }
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/../../../", "uploads"))
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  },
})

export const uploadImage = catchAsyncError(upload.single("image"))
