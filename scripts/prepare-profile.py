"""Prepare responsive, lossless portrait assets from the supplied photograph."""

from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parent.parent
SIZES = (125, 150, 250, 300, 375, 450, 591)

with Image.open(ROOT / "profile_image.png") as original:
    photo = ImageOps.exif_transpose(original).convert("RGB")
    side = min(photo.size)
    left = (photo.width - side) // 2
    # Preserve the portrait framing previously used by CSS object-position: 42%.
    top = round((photo.height - side) * 0.42)
    portrait = photo.crop((left, top, left + side, top + side))

    for size in SIZES:
        if size > side:
            raise ValueError("Profile assets must not upscale the source photograph")
        output = ROOT / "assets" / f"profile-{size}.png"
        portrait.resize((size, size), Image.Resampling.LANCZOS).save(
            output, optimize=True
        )
        print(output.relative_to(ROOT))
