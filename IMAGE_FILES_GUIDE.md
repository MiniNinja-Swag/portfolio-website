# 📸 IMAGE FILES REFERENCE - NEW SECTIONS

## Quick Summary of Images Needed

### For 2D Art Showcase
**Minimum 8 images (expandable to unlimited)**

```
assets/art-1.jpg
assets/art-2.jpg
assets/art-3.jpg
assets/art-4.jpg
assets/art-5.jpg
assets/art-6.jpg
assets/art-7.jpg
assets/art-8.jpg

(Optional: add more)
assets/art-9.jpg
assets/art-10.jpg
... etc
```

**Recommendations:**
- **Format:** JPG (smaller) or PNG (for transparency)
- **Resolution:** 1000×1000px square format (looks clean in grid)
- **File Size:** 150-200KB max (use tinypng.com to compress)
- **Content:** Your best 2D artwork pieces
  - Character designs
  - Environment paintings
  - Concept art
  - UI mockups
  - Illustrations
  - Digital paintings
  - Any 2D visual work

---

### For Pixel Platformer Breakdown
**Exactly 6 images (one for each stage)**

```
assets/breakdown-1.jpg  → "Concept & Design"
assets/breakdown-2.jpg  → "Character & Animation"
assets/breakdown-3.jpg  → "Level Design"
assets/breakdown-4.jpg  → "Mechanics & Polish"
assets/breakdown-5.jpg  → "Final Gameplay"
assets/breakdown-6.jpg  → "UI & Effects"
```

**Recommendations:**
- **Format:** JPG (recommended for screenshots)
- **Resolution:** 1200×800px or 1000×600px landscape
- **File Size:** 150-200KB each
- **Content:** Show progression of game development
  - Stage 1: Initial concept art
  - Stage 2: Character with animations
  - Stage 3: Level layout/design
  - Stage 4: Polished mechanics/visuals
  - Stage 5: Final playable game
  - Stage 6: UI/effects/complete package

---

## How to Prepare Images

### Step 1: Organize
1. Collect all your 2D art files
2. Select your best 8-12 pieces for the gallery
3. Gather 6 screenshots/images showing your platformer development

### Step 2: Resize
Use any image editor (Photoshop, GIMP, Paint.NET, etc.)

**For 2D Art:**
- Resize to 1000×1000 pixels
- Crop if necessary to fit square

**For Breakdown:**
- Resize to 1200×800 pixels (landscape)
- Or keep as 1000×600 if original ratio

### Step 3: Export/Save
- **Format:** JPG (recommended for most)
  - File → Export As → .jpg
  - Quality: 80-85% (good balance)

- **Or PNG:** If you need transparency
  - File → Export As → .png
  - Usually larger file size

### Step 4: Optimize
1. Go to https://tinypng.com
2. Upload your image
3. Download optimized version
4. Repeat for all images

**Target:** Each file should be 150-250KB

### Step 5: Rename & Place
1. Rename files to match format:
   - `art-1.jpg`, `art-2.jpg`, etc.
   - `breakdown-1.jpg`, `breakdown-2.jpg`, etc.

2. Place all in `assets/` folder:
   ```
   C:\Users\[You]\Documents\Unreal Projects\portfolio-website\assets\
   ```

3. Verify file names are exactly correct (case-sensitive on some systems)

---

## Directory Structure

After adding all images, your `assets/` folder should look like:

```
assets/
├─ (EXISTING FILES)
├─ project-1-1.jpg
├─ project-2-1.jpg
├─ myrkur-1.jpg
├─ risi-1.jpg
├─ cv.pdf
│
├─ (NEW 2D ART FILES)
├─ art-1.jpg
├─ art-2.jpg
├─ art-3.jpg
├─ art-4.jpg
├─ art-5.jpg
├─ art-6.jpg
├─ art-7.jpg
├─ art-8.jpg
│
└─ (NEW BREAKDOWN FILES)
   ├─ breakdown-1.jpg
   ├─ breakdown-2.jpg
   ├─ breakdown-3.jpg
   ├─ breakdown-4.jpg
   ├─ breakdown-5.jpg
   └─ breakdown-6.jpg

Total: 21+ image files + 1 PDF
```

---

## How to Add Your Images

### Method 1: Manual File Copy
1. Open Windows File Explorer
2. Navigate to `assets/` folder
3. Drag & drop your image files
4. Done!

### Method 2: Command Line
```bash
cd "C:\Users\[YourUsername]\Documents\Unreal Projects\portfolio-website\assets"
# Copy your files here
```

### Method 3: VS Code
1. Open VS Code
2. In Explorer panel, expand `assets/` folder
3. Drag & drop files into it
4. Or right-click → Add File

---

## Verify Images Are Working

1. Open `http://localhost:8000` in browser
2. Scroll to "2D Art & Concepts" section
3. Should see your art images in grid
4. Click one to verify modal works
5. Do same for "Pixel Platformer Breakdown"

If images don't show:
- Check file names match exactly (lowercase)
- Verify files are in `assets/` folder
- Hard refresh browser: Ctrl+Shift+R
- Check browser console for errors: F12

---

## Content for Each Breakdown Stage

### breakdown-1.jpg: "Concept & Design"
- Initial sketches
- Concept art
- Design document screenshot
- Reference images
- Game design ideas

### breakdown-2.jpg: "Character & Animation"
- Character sprite sheet
- Animation frames
- Model turnaround
- Character design evolution
- Animation preview

### breakdown-3.jpg: "Level Design"
- Level layout
- Tile map
- Terrain design
- Level progression
- Map overview

### breakdown-4.jpg: "Mechanics & Polish"
- Gameplay mechanics in action
- Physics demonstration
- Particle effects
- Visual polish
- Refined gameplay

### breakdown-5.jpg: "Final Gameplay"
- Final polished game
- In-game screenshot
- Gameplay in progress
- Complete level
- Finished product

### breakdown-6.jpg: "UI & Effects"
- UI elements
- HUD design
- Visual effects
- Menu screens
- Complete interface

---

## Tips for Best Results

### Image Quality
✓ Use high-quality source images (1080p+)
✓ Ensure good lighting/visibility
✓ Avoid blurry or compressed screenshots
✓ Use consistent aspect ratios

### 2D Art Showcase
✓ Show variety in style/content
✓ Include your best work
✓ Mix characters, environments, UI
✓ Professional portfolio pieces
✓ Can add captions later if needed

### Pixel Platformer Breakdown
✓ Show clear progression
✓ Each stage different from previous
✓ Highlight key improvements
✓ Include final polished version
✓ Tell story of development

### File Management
✓ Keep file names simple: `art-1.jpg`
✓ All lowercase (easier across systems)
✓ No spaces in names
✓ Organized in one `assets/` folder
✓ Backed up in source control (Git)

---

## Troubleshooting

### Images Not Showing

**Problem:** Images appear as broken image icons

**Solutions:**
1. Check file path is correct
   - Should be: `assets/art-1.jpg` (not `Assets/...`)
   - Case matters on some systems
   
2. Verify files exist
   - Look in File Explorer
   - Make sure files are actually there
   
3. Hard refresh browser
   - Ctrl+Shift+R (clears cache)
   
4. Restart local server
   ```bash
   Ctrl+C (to stop)
   python -m http.server 8000 (to restart)
   ```

### Images Too Large

**Problem:** Images slow down website or look pixelated

**Solutions:**
1. Optimize with tinypng.com (reduces 50-70%)
2. Resize before uploading
3. Use JPG instead of PNG (smaller file)
4. Check file size: shouldn't exceed 200KB

### Grid Looks Wrong

**Problem:** 2D Art gallery not displaying as grid

**Solutions:**
1. Hard refresh: Ctrl+Shift+R
2. Check browser zoom: Ctrl+0 (reset to 100%)
3. Try different browser
4. Check CSS file is loaded (F12 → check for errors)

---

## Image Optimization Commands

If you know command line, here are useful tools:

```bash
# Using ImageMagick (if installed)
magick convert input.jpg -quality 80 output.jpg

# Using Python Pillow
python -c "from PIL import Image; img = Image.open('input.jpg'); img = img.resize((1000,1000)); img.save('output.jpg', quality=80)"
```

But **tinypng.com is easier** for most people!

---

## Final Checklist

Before uploading, verify:

- [ ] All art images saved as JPG/PNG
- [ ] All images optimized (<200KB)
- [ ] File names correct: `art-1.jpg`, `breakdown-1.jpg`, etc.
- [ ] All files in `assets/` folder
- [ ] File names are lowercase
- [ ] 8+ art pieces ready
- [ ] 6 breakdown images ready
- [ ] All images meaningful/professional
- [ ] No duplicate file names
- [ ] Backed up originals elsewhere

---

## Next Steps

1. ✓ Prepare your 2D art images (8-12 best pieces)
2. ✓ Prepare breakdown images (6 development stages)
3. ✓ Optimize all images with tinypng.com
4. ✓ Rename to `art-1.jpg`, `breakdown-1.jpg`, etc.
5. ✓ Place in `assets/` folder
6. ✓ Test locally with Python server
7. ✓ Verify all images load
8. ✓ Deploy to GitHub/Netlify

---

**That's all you need for images!** 📸

All your 2D art and game breakdown content will showcase beautifully in your portfolio.
