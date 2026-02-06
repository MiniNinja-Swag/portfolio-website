# Portfolio Website - Quick Edit Reference

This file shows you exactly where to edit content to customize your portfolio.

## 1. YOUR NAME & INTRO

**File:** `index.html`
**Lines:** ~70-95

```html
<h1>Your Name Here</h1>
<h2 class="subtitle">Portfolio of Evidence – MSc Technical Art & Visual Effects</h2>
<p class="intro-text">
    [Edit this intro paragraph]
</p>
```

---

## 2. SHOWREELS (YouTube/Vimeo Videos)

**File:** `index.html`
**Lines:** ~110-145

### 3D Showreel
```html
<iframe 
    src="https://www.youtube.com/embed/REPLACE_WITH_YOUR_VIDEO_ID?modestbranding=1&rel=0" 
    ...>
</iframe>
```

### Game Creation Showreel
```html
<iframe 
    src="https://www.youtube.com/embed/REPLACE_WITH_YOUR_VIDEO_ID?modestbranding=1&rel=0" 
    ...>
</iframe>
```

**How to get Video ID:**
- Go to your YouTube video
- Copy the ID from the URL: `youtube.com/watch?v=XXXXXXXXX`
- Paste in the `src` URL above

**For Vimeo:**
```html
src="https://player.vimeo.com/video/YOUR_VIMEO_ID"
```

---

## 3. PROJECTS (5 Cards)

**File:** `index.html`
**Lines:** ~165-280

Each project has:
- **Title:** `<h3>Project Title</h3>`
- **Description:** `<p class="project-description">...</p>`
- **Tools:** `<span class="tag">Tool Name</span>`
- **Links:** `<a href="..." class="link-btn">Link Text</a>`
- **Images:** `<img src="assets/project-X-Y.jpg" alt="...">`

### Example: Project 1 Edit
```html
<!-- Project 1 -->
<h3>My Cool 3D Project</h3>
<p class="project-description">
    I created a photorealistic environment in Blender...
</p>
<div class="project-tags">
    <span class="tag">Blender</span>
    <span class="tag">Modeling</span>
    <span class="tag">Texturing</span>
</div>
<div class="project-links">
    <a href="https://yourdemo.com" class="link-btn">View Demo</a>
    <a href="https://github.com/yourrepo" class="link-btn">GitHub</a>
</div>
```

### Images for Each Project
- **Project 1:** `assets/project-1-1.jpg`, `assets/project-1-2.jpg`, `assets/project-1-3.jpg`
- **Project 2:** `assets/project-2-1.jpg`, `assets/project-2-2.jpg`
- **Project 3:** `assets/project-3-1.jpg`, `assets/project-3-2.jpg`, `assets/project-3-3.jpg`, `assets/project-3-4.jpg`
- **Project 4:** `assets/project-4-1.jpg`, `assets/project-4-2.jpg`
- **Project 5:** `assets/project-5-1.jpg`, `assets/project-5-2.jpg`, `assets/project-5-3.jpg`

---

## 4. INDUSTRY EXPERIENCE - Myrkur Games

**File:** `index.html`
**Lines:** ~310-340

```html
<h3>Myrkur Games – Echoes of the End</h3>
<p class="role">UI Developer (Unreal Engine)</p>

<p><strong>Role & Responsibilities:</strong> 
    [Describe your role and what you did]
</p>
<p><strong>Technical Skills Demonstrated:</strong> 
    [List skills: Unreal Motion Graphics (UMG), C++, UI Design, etc.]
</p>
```

**Images:**
- `assets/myrkur-1.jpg`
- `assets/myrkur-2.jpg`

---

## 5. INDUSTRY EXPERIENCE - RÍSÍ (Esports/Broadcast)

**File:** `index.html`
**Lines:** ~345-380

```html
<h3>RÍSÍ – CS:GO Broadcast Production</h3>
<p class="role">Broadcast Manager</p>

<p><strong>Role & Responsibilities:</strong> 
    [Describe broadcast work]
</p>
<p><strong>Technical Skills Demonstrated:</strong> 
    [Multi-camera, OBS, graphics, etc.]
</p>
<p><strong>Key Achievements:</strong> 
    [What did you accomplish?]
</p>
<p>
    <a href="YOUR_STREAM_LINK" class="case-study-link">View Public Stream Examples</a>
</p>
```

**Images:**
- `assets/risi-1.jpg`
- `assets/risi-2.jpg`
- `assets/risi-3.jpg`

---

## 6. CONTACT INFORMATION

**File:** `index.html`
**Lines:** ~395-420

```html
<!-- Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Location -->
<span>Iceland</span>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile" target="_blank">
    linkedin.com/in/yourprofile
</a>

<!-- GitHub -->
<a href="https://github.com/yourprofile" target="_blank">
    github.com/yourprofile
</a>
```

---

## 7. CV DOWNLOAD

**File:** `index.html`
**Lines:** ~425-430

```html
<a href="assets/cv.pdf" class="btn btn-primary" download>
    📄 Download Full CV (PDF)
</a>
```

**Steps:**
1. Create or export your CV as `cv.pdf`
2. Put it in the `assets/` folder
3. Make sure the filename is exactly `cv.pdf`
4. If you use a different name, update the `href` attribute above

---

## 8. CHANGE COLORS (Optional)

**File:** `styles.css`
**Lines:** ~7-16

```css
:root {
    --primary-color: #2c3e50;      /* Change this */
    --secondary-color: #34495e;    /* Change this */
    --accent-color: #3498db;       /* Change this (bright blue) */
    --text-color: #ecf0f1;         /* Change this */
    --bg-color: #1a1f2e;           /* Change this (dark background) */
    --bg-secondary: #232f3e;       /* Change this */
}
```

Use [colorhexa.com](https://www.colorhexa.com) to find hex color codes.

---

## 9. FOLDER STRUCTURE (images)

Create this folder structure:
```
portfolio-website/
└── assets/
    ├── project-1-1.jpg
    ├── project-1-2.jpg
    ├── project-1-3.jpg
    ├── project-2-1.jpg
    ├── project-2-2.jpg
    ├── project-3-1.jpg
    ├── project-3-2.jpg
    ├── project-3-3.jpg
    ├── project-3-4.jpg
    ├── project-4-1.jpg
    ├── project-4-2.jpg
    ├── project-5-1.jpg
    ├── project-5-2.jpg
    ├── project-5-3.jpg
    ├── myrkur-1.jpg
    ├── myrkur-2.jpg
    ├── risi-1.jpg
    ├── risi-2.jpg
    ├── risi-3.jpg
    └── cv.pdf
```

---

## QUICK FIND & REPLACE

Use Ctrl+F (Find) in your code editor to quickly locate sections:

| Search | What You'll Find |
|--------|------------------|
| `Your Name Here` | Hero section name |
| `VIDEO_ID_1` | 3D Showreel video |
| `VIDEO_ID_2` | Game Creation Showreel video |
| `Project Title 1` | First project card |
| `Myrkur Games` | Industry experience #1 |
| `RÍSÍ` | Industry experience #2 |
| `your.email@example.com` | Contact email |
| `assets/project-` | All project image paths |

---

## TESTING YOUR EDITS

1. **Save the file** (Ctrl+S)
2. **Refresh the browser** (F5 or Ctrl+R)
3. **Check mobile** (F12 → Click device icon)
4. **Test all links** (click each button and link)

---

## COMMON MISTAKES TO AVOID

❌ **Wrong:** `<img src="project-1.jpg">` (no assets folder)
✅ **Right:** `<img src="assets/project-1.jpg">`

❌ **Wrong:** Copying video ID with `v=` prefix
✅ **Right:** `YouTube ID: dQw4w9WgXcQ`

❌ **Wrong:** Forgetting `https://` in URLs
✅ **Right:** `href="https://github.com/yourprofile"`

❌ **Wrong:** Saving as `.txt` or `.doc`
✅ **Right:** Always save as `.html`, `.css`, `.js`

---

## HELP RESOURCES

- **HTML Tutorial:** https://www.w3schools.com/html/
- **CSS Colors:** https://htmlcolorcodes.com/
- **Find YouTube Video ID:** https://youtu.be/XXXXXX (the X's are your ID)
- **Compress Images:** https://tinypng.com/
- **Test Mobile:** Chrome DevTools (F12) → Click device icon

---

## BEFORE YOU SUBMIT

✅ Edit your name
✅ Add video IDs
✅ Replace all placeholder images
✅ Update all project titles/descriptions
✅ Update contact info
✅ Upload CV
✅ Test on mobile (F12)
✅ Check all links work
✅ Deploy to GitHub Pages or Netlify

---

**That's it! You're ready to customize your portfolio. Good luck with your MSc application! 🚀**
