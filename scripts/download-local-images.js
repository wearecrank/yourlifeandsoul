const { mkdirSync } = require("fs")
const { join } = require("path")
const https = require("https")

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

const outputDir = join("/vercel/share/v0-project", "public", "images")
mkdirSync(outputDir, { recursive: true })

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = require("fs").createWriteStream(dest)
    https.get(url, { headers: { "User-Agent": "yourlifeandsoul.co.uk/1.0 (site build)" } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        download(res.headers.location, dest).then(resolve).catch(reject)
        return
      }
      if (res.statusCode !== 200) {
        file.close()
        reject(new Error(`HTTP ${res.statusCode} for ${url}`))
        return
      }
      res.pipe(file)
      file.on("finish", () => {
        file.close()
        resolve()
      })
    }).on("error", reject)
  })
}

async function main() {
  for (const image of images) {
    const dest = join(outputDir, image.filename)
    console.log(`Downloading ${image.filename}...`)
    try {
      await download(image.url, dest)
      console.log(`Saved ${image.filename}`)
    } catch (err) {
      console.error(`Failed ${image.filename}: ${err.message}`)
    }
  }
  console.log("Done.")
}

main()
