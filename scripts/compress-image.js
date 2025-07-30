import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function compressImage(inputPath, outputPath, quality = 0.7) {
  try {
    if (!fs.existsSync(inputPath)) {
      console.error(`Fichier source non trouvé: ${inputPath}`);
      return false;
    }

    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;
    const originalInfo = await sharp(inputPath).metadata();

    console.log(`📊 Image originale:`);
    console.log(`   - Taille: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(
      `   - Dimensions: ${originalInfo.width}x${originalInfo.height}`
    );
    console.log(`   - Format: ${originalInfo.format}`);

    await sharp(inputPath)
      .jpeg({
        quality: Math.round(quality * 100),
        progressive: true,
        mozjpeg: true,
      })
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .toFile(outputPath);

    const compressedStats = fs.statSync(outputPath);
    const compressedSize = compressedStats.size;
    const compressionRatio = (
      ((originalSize - compressedSize) / originalSize) *
      100
    ).toFixed(2);
    const compressedInfo = await sharp(outputPath).metadata();

    console.log(`\n📊 Image compressée:`);
    console.log(`   - Taille: ${(compressedSize / 1024).toFixed(2)} KB`);
    console.log(
      `   - Dimensions: ${compressedInfo.width}x${compressedInfo.height}`
    );
    console.log(`   - Format: ${compressedInfo.format}`);
    console.log(`   - Compression: ${compressionRatio}%`);
    console.log(
      `   - Économie: ${((originalSize - compressedSize) / 1024).toFixed(2)} KB`
    );

    return true;
  } catch (error) {
    console.error('❌ Erreur lors de la compression:', error);
    return false;
  }
}

const inputImage = path.join(__dirname, '../backend/static/large.jpg');
const outputImage = path.join(
  __dirname,
  '../backend/static/large-compressed.jpg'
);

console.log('🖼️  Compression de large.jpg avec Sharp...\n');
const success = await compressImage(inputImage, outputImage, 0.7);

if (success) {
  console.log('\n✅ Compression terminée avec succès !');
  console.log(
    "💡 L'image compressée est disponible dans backend/static/large-compressed.jpg"
  );
} else {
  console.log('\n❌ Échec de la compression');
}
