export const getCloudinaryPublicId = (imageUrl) => {
    try {
      const publicId = imageUrl.slice(
        imageUrl.lastIndexOf("/") + 1,
        imageUrl.lastIndexOf("."),
      );
  
      return publicId;
    } catch (error) {
      console.error("Error extracting Cloudinary public ID:", error);
      return null; 
    }
  };