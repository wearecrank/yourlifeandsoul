import { writeFileSync } from "fs"
import { join } from "path"

const images = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Shops_on_Station_Road_-_geograph.org.uk_-_7648705.jpg/1280px-Shops_on_Station_Road_-_geograph.org.uk_-_7648705.jpg",
    filename: "addlestone.jpg",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/High_Street%2C_Weybridge_-_geograph.org.uk_-_903313.jpg/640px-High_Street%2C_Weybridge_-_geograph.org.uk_-_903313.jpg",
    filename: "weybridge.jpg",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Woking_town_centre_from_the_west.jpg/1280px-Woking_town_centre_from_the_west.jpg",
    filename: "woking.jpg",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Chertsey%2C_The_Old_Town_Hall_-_geograph.org.uk_-_546171.jpg/640px-Chertsey%2C_The_Old_Town_Hall_-_geograph.org.uk_-_546171.jpg",
    filename: "chertsey.jpg",
  },
]

const outputDir = join(process.cwd(), "public", "images")

for (const image of images) {
  console.log(`Downloading ${image.filename}...`)
  const response = await fetch(image.url, {
    headers: {
      "User-Agent": "yourlifeandsoul.co.uk/1.0 (site build; contact@yourlifeandsoul.co.uk)",
    },
  })

  if (!response.ok) {
    console.error(`Failed to download ${image.filename}: ${response.status} ${response.statusText}`)
    continue
  }

  const buffer = Buffer.from(await response.arrayBuffer())
  const dest = join(outputDir, image.filename)
  writeFileSync(dest, buffer)
  console.log(`Saved ${image.filename} (${buffer.length} bytes)`)
}

console.log("Done.")
