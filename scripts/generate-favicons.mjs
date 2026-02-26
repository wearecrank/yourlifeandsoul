import sharp from "sharp";
import { writeFileSync } from "fs";

const svgLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="6" fill="#0091A1"/>
  <text x="16" y="22" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="700" fill="#ffffff">YLS</text>
</svg>`;

const svgDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="6" fill="#00ACC1"/>
  <text x="16" y="22" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="700" fill="#1a1a1a">YLS</text>
</svg>`;

const svgApple = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <rect width="180" height="180" rx="36" fill="#0091A1"/>
  <text x="90" y="118" text-anchor="middle" font-family="Georgia, serif" font-size="88" font-weight="700" fill="#ffffff">YLS</text>
</svg>`;

async function generate() {
  const lightPng = await sharp(Buffer.from(svgLight)).resize(32, 32).png().toBuffer();
  writeFileSync("public/icon-light-32x32.png", lightPng);
  console.log("Generated icon-light-32x32.png");

  const darkPng = await sharp(Buffer.from(svgDark)).resize(32, 32).png().toBuffer();
  writeFileSync("public/icon-dark-32x32.png", darkPng);
  console.log("Generated icon-dark-32x32.png");

  const applePng = await sharp(Buffer.from(svgApple)).resize(180, 180).png().toBuffer();
  writeFileSync("public/apple-icon.png", applePng);
  console.log("Generated apple-icon.png");
}

generate().catch(console.error);
