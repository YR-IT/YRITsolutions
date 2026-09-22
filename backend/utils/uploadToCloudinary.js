import streamifier from "streamifier";
import cloudinary from "./cloudinary.js";

/**
 * Uploads an in-memory file buffer (from multer memoryStorage) to Cloudinary.
 * Returns the Cloudinary result object (use result.secure_url for the image URL).
 */
const uploadToCloudinary = (fileBuffer, folder = "yr-it-solutions") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

export default uploadToCloudinary;
