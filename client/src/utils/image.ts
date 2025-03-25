// List of images that should remain as JPG
const JPG_ONLY = ['g800'];

export const getImagePath = (name: string, extension?: string) => {
  // If extension is provided, use it
  if (extension) {
    return `/images/${name}.${extension}`;
  }
  
  // If image should remain as JPG
  if (JPG_ONLY.includes(name)) {
    return `/images/${name}.jpg`;
  }
  
  // Default to WebP
  return `/images/${name}.webp`;
}; 