const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const imagesToConvert = [
  'fleet-hero',
  'g700',
  'g650er',
  'support-hero',
  'service-network',
  'sustainability-hero',
  'sustainable-aviation',
  'contact-hero',
  'special-missions'
];

async function convertToWebP() {
  for (const image of imagesToConvert) {
    const jpgPath = path.join(imagesDir, `${image}.jpg`);
    const webpPath = path.join(imagesDir, `${image}.webp`);

    // Skip if JPG doesn't exist
    if (!fs.existsSync(jpgPath)) {
      console.log(`Skipping ${image}.jpg - file not found`);
      continue;
    }

    try {
      await sharp(jpgPath)
        .webp({ quality: 90 })
        .toFile(webpPath);
      
      console.log(`Converted ${image}.jpg to WebP`);
    } catch (error) {
      console.error(`Error converting ${image}.jpg:`, error);
    }
  }
}

convertToWebP(); 