# Portfolio of Evidence – MSc Technical Art & Visual Effects

A clean, professional, and easy-to-edit portfolio website built with vanilla HTML, CSS, and JavaScript. Designed specifically for MSc Technical Art & Visual Effects applications.

## Features

✅ **Pure Vanilla Stack** – No frameworks, minimal dependencies, fast loading
✅ **Fully Responsive** – Desktop-first design, mobile-optimized
✅ **Easy to Customize** – Edit content in one place, clear placeholders
✅ **GitHub Pages Ready** – Deploy directly to GitHub Pages or Netlify
✅ **Professional Design** – Clean, minimal, academic-friendly layout
✅ **Image Gallery** – Click images to view full-size in modal
✅ **Video Embedding** – YouTube/Vimeo integration
✅ **Print-Friendly** – Optimized CSS for printing

## File Structure

```
portfolio-website/
├── index.html          # Main website (edit content here)
├── styles.css          # All styling (dark theme, responsive)
├── script.js           # JavaScript (navigation, galleries, modals)
├── assets/             # Folder for images, PDFs, videos
│   ├── project-1-1.jpg
│   ├── project-2-1.jpg
│   ├── myrkur-1.jpg
│   ├── risi-1.jpg
│   └── cv.pdf
└── README.md          # This file
```

## Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

### 2. Local Testing

**Option A: Python**
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

**Option B: Node.js (with http-server)**
```bash
npx http-server
```

**Option C: VS Code Live Server**
- Install "Live Server" extension
- Right-click index.html → "Open with Live Server"

### 3. Edit Content

Open `index.html` and find the sections below. All editable content is marked with `<!-- EDIT: ... -->` comments.

## Customization Guide

### 1. Personal Information (Hero Section)

**File:** `index.html` (lines ~70-95)

```html
<h1>Your Name Here</h1>
<h2 class="subtitle">Portfolio of Evidence – MSc Technical Art & Visual Effects</h2>
<p class="intro-text">
    Welcome to my portfolio... [edit this text]
</p>
```

### 2. Showreels (YouTube/Vimeo)

**File:** `index.html` (lines ~110-145)

Replace `VIDEO_ID_1` and `VIDEO_ID_2` with your actual video IDs:

```html
<!-- For YouTube: https://youtube.com/watch?v=XXXXXX_VIDEO_ID -->
<!-- For Vimeo: https://vimeo.com/123456789 -->

<iframe 
    src="https://www.youtube.com/embed/XXXXXX_VIDEO_ID?modestbranding=1&rel=0" 
    title="3D Showreel"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
</iframe>
```

**How to find Video IDs:**
- **YouTube:** `https://youtube.com/watch?v=XXXXXX_VIDEO_ID` → Copy the XXXXXX_VIDEO_ID part
- **Vimeo:** Replace entire src with `https://player.vimeo.com/video/123456789`

### 3. Projects Section

**File:** `index.html` (lines ~165-280)

Edit each project card:

```html
<h3>Project Title 1</h3>
<p class="project-description">
    [Brief description of project]
</p>
<div class="project-tags">
    <span class="tag">Unreal Engine</span>
    <span class="tag">C++</span>
    <span class="tag">VFX</span>
</div>
<div class="project-links">
    <a href="https://your-demo-link.com" class="link-btn">View Demo</a>
    <a href="https://github.com/yourrepo" class="link-btn">GitHub</a>
</div>
```

**Project Images:**
- Replace placeholder paths (e.g., `assets/project-1-1.jpg`) with your own image files
- Add/remove image gallery buttons as needed
- Images will be clickable for full-size view

### 4. Industry Experience

**File:** `index.html` (lines ~300-380)

Edit the case studies:

```html
<h3>Myrkur Games – Echoes of the End</h3>
<p class="role">UI Developer (Unreal Engine)</p>

<p><strong>Role & Responsibilities:</strong> [Your description]</p>
<p><strong>Technical Skills Demonstrated:</strong> [Your skills]</p>
<p><em>Note: Limited footage available due to NDA restrictions...</em></p>
```

**Images:**
- Replace `assets/myrkur-1.jpg`, `assets/myrkur-2.jpg` with your images
- Similarly for RÍSÍ case study (`assets/risi-1.jpg`, etc.)

### 5. Contact & CV

**File:** `index.html` (lines ~390-420)

```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<span>Iceland</span>
<a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a>
<a href="https://github.com/yourprofile" target="_blank">github.com/yourprofile</a>

<!-- Replace cv.pdf with your actual CV file -->
<a href="assets/cv.pdf" class="btn btn-primary" download>
    📄 Download Full CV (PDF)
</a>
```

### 6. Color Scheme (Optional)

**File:** `styles.css` (lines ~7-16)

```css
:root {
    --primary-color: #2c3e50;      /* Dark blue-gray */
    --secondary-color: #34495e;    /* Medium blue-gray */
    --accent-color: #3498db;       /* Bright blue */
    --text-color: #ecf0f1;         /* Light gray text */
    --bg-color: #1a1f2e;           /* Very dark background */
    --bg-secondary: #232f3e;       /* Dark background */
}
```

Change the hex colors to customize the theme. Use [colorhexa.com](https://www.colorhexa.com) to find colors.

## Managing Images

### Where to Place Images

All images go in the `assets/` folder:
```
assets/
├── project-1-1.jpg
├── project-1-2.jpg
├── project-2-1.jpg
├── project-3-1.jpg
├── myrkur-1.jpg
├── myrkur-2.jpg
├── risi-1.jpg
├── risi-2.jpg
├── risi-3.jpg
└── cv.pdf
```

### Image Recommendations

- **Project/Case Study Images:** 1920×1080px (16:9) or 1000×1000px for square
- **Format:** JPG for photos, PNG for graphics
- **Optimization:** Use [tinypng.com](https://tinypng.com) to compress before uploading
- **Naming:** Use descriptive names (e.g., `myrkur-ui-design.jpg`)

### Placeholder Images

For testing, use these free sources:
- **Unsplash:** https://unsplash.com
- **Pexels:** https://pexels.com
- **Pixabay:** https://pixabay.com

## Navigation & Sections

The navigation links automatically scroll to sections. Sections are:

| Section ID | Purpose |
|-----------|---------|
| `#home` | Hero section with intro buttons |
| `#showreels` | YouTube/Vimeo embeds |
| `#projects` | 5 project cards |
| `#experience` | Industry case studies |
| `#contact` | Contact info & CV download |

To add new sections, add a link in the navbar and create a new `<section id="new-id">` in HTML.

## Deployment

### Deploy to GitHub Pages

1. Push code to a GitHub repository:
```bash
git add .
git commit -m "Initial portfolio site"
git push origin main
```

2. Go to **Settings → Pages** in your GitHub repo

3. Set source to `main` branch, `/ (root)` folder

4. Your site will be live at: `https://yourusername.github.io/portfolio-website`

### Deploy to Netlify

1. Click "New site from Git" on [netlify.com](https://netlify.com)

2. Connect your GitHub repository

3. Build settings (leave blank for static sites):
   - Build command: (leave empty)
   - Publish directory: `.` (root)

4. Deploy!

### Deploy to Web Host (cPanel, etc.)

1. Upload all files via FTP:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` folder

2. Ensure `index.html` is your homepage

3. Visit your domain!

## Mobile Optimization

The site is fully responsive. To test:

1. **Chrome DevTools:** Press `F12` → Click device toggle icon
2. **Firefox DevTools:** Press `F12` → Click responsive design mode
3. **iPhone:** Use Safari's responsive design mode
4. **Android:** Chrome's mobile emulation

Breakpoints:
- **Desktop:** 1024px and above
- **Tablet:** 768px – 1024px
- **Mobile:** Below 768px

## Performance Tips

- **Images:** Compress before uploading (aim for <200KB each)
- **Videos:** Use YouTube/Vimeo (faster than hosting directly)
- **Fonts:** Already optimized with system fonts
- **Minify:** Optional – minify CSS/JS for production (not necessary for small sites)

Use [Google PageSpeed Insights](https://pagespeed.web.dev) to check performance.

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation (Tab key)
- Focus states on interactive elements
- Color contrast meets WCAG standards

## Common Issues & Solutions

### Issue: Videos not loading

**Solution:** Check the video ID is correct:
- YouTube: `https://youtube.com/watch?v=XXXXXX`
- Vimeo: `https://vimeo.com/123456789`

### Issue: Images not showing

**Solution:** Verify file paths:
- Images must be in `assets/` folder
- Check filename spelling (case-sensitive on Linux/Mac)
- Use relative paths: `assets/filename.jpg`

### Issue: Page won't load locally

**Solution:** Use a local server:
```bash
python -m http.server 8000
```
Don't use `file://` protocol (won't work with CORS)

### Issue: Mobile menu not working

**Solution:** Check browser console for JavaScript errors:
- Press `F12` → Console tab
- Clear browser cache (Ctrl+Shift+Delete)

## Code Structure

### HTML (`index.html`)
- Semantic HTML5 structure
- Clear section organization
- Comments marking editable areas
- Placeholder content clearly labeled

### CSS (`styles.css`)
- CSS Grid & Flexbox for layout
- CSS custom properties (variables) for colors
- Mobile-first responsive design
- Print-friendly styles

### JavaScript (`script.js`)
- Vanilla JS (no dependencies)
- Mobile navigation toggle
- Image gallery navigation
- Full-size image modal
- Well-commented functions

## Advanced Customization

### Add New Section

1. Add HTML to `index.html`:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

2. Add navigation link:
```html
<li><a href="#new-section">New Section</a></li>
```

3. Add CSS to `styles.css`:
```css
.new-section {
    background-color: var(--bg-color);
    padding: 4rem var(--spacing-unit);
}
```

### Change Typography

Edit these lines in `styles.css`:
```css
:root {
    --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-size-base: 16px;
}
```

### Add Animations

Uncomment this in `script.js` to enable scroll animations:
```javascript
initializeScrollAnimations();
```

## Legal & Licensing

- Use placeholder content and images for testing
- Replace all placeholder text with your own content
- Ensure you have rights to all images you use
- If using third-party code, maintain attribution

## Support & Resources

- **HTML Docs:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS Docs:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **JavaScript:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Color Picker:** [colorhexa.com](https://www.colorhexa.com)
- **Image Optimization:** [tinypng.com](https://tinypng.com)

## Checklist Before Submission

- [ ] Updated name and subtitle
- [ ] Added YouTube/Vimeo video IDs
- [ ] Replaced all placeholder images
- [ ] Updated project titles and descriptions
- [ ] Added correct tools/tags
- [ ] Updated industry experience sections
- [ ] Added real contact information
- [ ] Uploaded CV PDF
- [ ] Tested on desktop, tablet, and mobile
- [ ] All links working
- [ ] No console errors
- [ ] Deployed to GitHub Pages / Netlify

## Version History

- **v1.0** (Feb 2026) – Initial release
  - 5 project cards with image galleries
  - 2 showreel sections (3D & Game Creation)
  - 2 industry experience case studies
  - Fully responsive design
  - Mobile-optimized navigation

---

**Made with care for your MSc Application.** Good luck! 🚀

For questions or improvements, feel free to contribute or open an issue.
