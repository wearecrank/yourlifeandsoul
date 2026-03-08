import urllib.request
import os

images = [
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Shops_on_Station_Road_-_geograph.org.uk_-_7648705.jpg",
        "filename": "addlestone.jpg",
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/High_Street%2C_Weybridge_-_geograph.org.uk_-_903313.jpg",
        "filename": "weybridge.jpg",
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/86/Woking_town_centre_from_the_west.jpg",
        "filename": "woking.jpg",
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/34/Chertsey%2C_The_Old_Town_Hall_-_geograph.org.uk_-_546171.jpg",
        "filename": "chertsey.jpg",
    },
]

output_dir = "/vercel/share/v0-project/public/images"
os.makedirs(output_dir, exist_ok=True)

headers = {"User-Agent": "yourlifeandsoul.co.uk/1.0 (site build)"}

for image in images:
    dest = os.path.join(output_dir, image["filename"])
    print(f"Downloading {image['filename']}...")
    req = urllib.request.Request(image["url"], headers=headers)
    with urllib.request.urlopen(req) as response, open(dest, "wb") as out_file:
        out_file.write(response.read())
    size = os.path.getsize(dest)
    print(f"Saved {image['filename']} ({size} bytes)")

print("All done.")
