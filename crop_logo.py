import sys
from PIL import Image

def crop_transparent(image_path, output_path):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    # Get the bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        img_cropped = img.crop(bbox)
        img_cropped.save(output_path)
        print(f"Successfully cropped and saved to {output_path}")
    else:
        print("Image is entirely transparent or bounding box not found.")

if __name__ == "__main__":
    crop_transparent("public/logo1.png", "public/logo1_cropped.png")
