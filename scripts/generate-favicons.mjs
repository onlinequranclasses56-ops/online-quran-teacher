import sharp from 'sharp'
import { copyFileSync } from 'fs'

const SRC = 'public/logoofonlinequranacademy.webp'

// The bottom-right corner of the source image contains a pre-made
// rounded app icon version of just the mosque+book mark — perfect for favicons.
// Coordinates estimated from 1254x1254 image (≈75% x, 77% y, ~24% size).
const ICON_CROP = { left: 942, top: 957, width: 307, height: 293 }

async function run() {
  // 1. Replace logo.webp with the new brand logo (full version for navbar/footer)
  copyFileSync(SRC, 'public/logo.webp')
  console.log('✓ logo.webp replaced')

  // 2. Extract the app icon for favicon generation
  const iconBuf = await sharp(SRC)
    .extract(ICON_CROP)
    .resize(512, 512, { fit: 'cover' })
    .png()
    .toBuffer()

  // 3. Generate all favicon sizes from the icon
  const sizes = [
    { file: 'public/android-chrome-512x512.png', size: 512 },
    { file: 'public/android-chrome-192x192.png', size: 192 },
    { file: 'public/apple-touch-icon.png',        size: 180 },
    { file: 'public/favicon-32x32.png',           size: 32  },
    { file: 'public/favicon-16x16.png',           size: 16  },
  ]

  for (const { file, size } of sizes) {
    await sharp(iconBuf).resize(size, size).png().toFile(file)
    console.log(`✓ ${file} (${size}×${size})`)
  }

  // 4. Generate favicon.ico (multi-size: 48, 32, 16)
  const ico48 = await sharp(iconBuf).resize(48, 48).png().toBuffer()
  const ico32 = await sharp(iconBuf).resize(32, 32).png().toBuffer()
  const ico16 = await sharp(iconBuf).resize(16, 16).png().toBuffer()

  // Write a simple ICO by embedding the 32x32 PNG (browsers accept PNG-in-ICO)
  await sharp(iconBuf).resize(32, 32).png().toFile('public/favicon.ico')
  console.log('✓ public/favicon.ico (32×32)')

  console.log('\nAll favicons generated.')
}

run().catch(e => { console.error(e); process.exit(1) })
