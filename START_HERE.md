# Portfolio of Evidence – Master Setup Guide

## 🎯 Your Complete Website is Ready!

You have a **professional, fully-responsive portfolio website** ready for customization. All core files are in place and documented.

---

## 📁 What You Have

### Core Website Files
- **`index.html`** – Complete website structure with 5 sections
- **`styles.css`** – Professional dark theme, fully responsive
- **`script.js`** – Navigation, galleries, modals, interactivity
- **`assets/`** – Folder for images, videos, PDFs

### Documentation (Read These!)
- **`QUICK_EDIT.md`** ⭐ **START HERE** – Fast reference for editing content
- **`README.md`** – Complete feature overview and hosting guide
- **`CONTENT_TEMPLATES.md`** – Examples of what to write for each section
- **`LAYOUT.md`** – Visual structure and design guidelines
- **`DEPLOYMENT.md`** – How to deploy to GitHub Pages, Netlify, etc.
- **`CHECKLIST.md`** – Final quality verification before submission
- **`TROUBLESHOOTING.md`** – Solutions for common issues

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Test Locally
```bash
# Option A: Python
cd "C:\Users\[YourUsername]\Documents\Unreal Projects\portfolio-website"
python -m http.server 8000
# Visit: http://localhost:8000

# Option B: VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

### Step 2: Customize Content
1. Open `index.html` in your text editor
2. Find `<!-- EDIT:` comments
3. Replace placeholders with your content
4. Save (Ctrl+S)
5. Refresh browser (F5)

### Step 3: Add Images
1. Prepare your images (PNG/JPG, compress with tinypng.com)
2. Put them in the `assets/` folder
3. Update image paths in HTML (already marked with `<!-- EDIT:`)

### Step 4: Deploy
Choose one:
- **GitHub Pages:** Push to GitHub, enable Pages in Settings
- **Netlify:** Drag-drop folder or connect GitHub repo
- **Web Host:** Upload via FTP

---

## 📋 Editing Guide

### Where to Find Everything

| Section | What to Edit | File | Lines |
|---------|-------------|------|-------|
| Name & Intro | Hero section | `index.html` | ~70-95 |
| Showreels | Video IDs | `index.html` | ~110-145 |
| Projects | 5 cards | `index.html` | ~165-280 |
| Experience | Myrkur & RÍSÍ | `index.html` | ~300-380 |
| Contact | Email, links | `index.html` | ~390-420 |
| Colors | Theme | `styles.css` | ~7-16 |

### Key Placeholders to Replace

Find these in `index.html` and replace with YOUR content:

1. **`Your Name Here`** – Your full name
2. **`VIDEO_ID_1`** – YouTube video ID (3D showreel)
3. **`VIDEO_ID_2`** – YouTube video ID (Game Creation)
4. **`Project Title 1`** through **`Project Title 5`** – Your project names
5. **`your.email@example.com`** – Your actual email
6. **`assets/project-X-Y.jpg`** – Your project images
7. **`assets/myrkur-1.jpg`**, **`risi-1.jpg`** – Your experience images
8. **`assets/cv.pdf`** – Your CV file

---

## 📸 Image Management

### Required Images (Placeholder Locations)

```
assets/
├── project-1-1.jpg, project-1-2.jpg, project-1-3.jpg
├── project-2-1.jpg, project-2-2.jpg
├── project-3-1.jpg, project-3-2.jpg, project-3-3.jpg, project-3-4.jpg
├── project-4-1.jpg, project-4-2.jpg
├── project-5-1.jpg, project-5-2.jpg, project-5-3.jpg
├── myrkur-1.jpg, myrkur-2.jpg
├── risi-1.jpg, risi-2.jpg, risi-3.jpg
└── cv.pdf
```

### Image Optimization

1. **Compress:** https://tinypng.com/ (target <200KB each)
2. **Format:** JPG for photos, PNG for graphics
3. **Size:** 1920x1080 or 1000x1000 recommended
4. **Naming:** Use hyphens, lowercase (e.g., `project-title-1.jpg`)

---

## 🎨 Customization Options

### Change Colors (Easy)

Edit `styles.css` lines 7-16:
```css
:root {
    --primary-color: #2c3e50;      /* Dark blue-gray */
    --secondary-color: #34495e;    /* Medium blue-gray */
    --accent-color: #3498db;       /* Bright blue (interactive) */
    --text-color: #ecf0f1;         /* Light text */
    --bg-color: #1a1f2e;           /* Dark background */
    --bg-secondary: #232f3e;       /* Slightly lighter background */
}
```

Use [colorhexa.com](https://www.colorhexa.com) to find hex color codes.

### Change Fonts (Advanced)

Edit `styles.css` line 17:
```css
--font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Popular choices:
- `'Inter', sans-serif`
- `'Roboto', sans-serif`
- `'Poppins', sans-serif`
- `'Open Sans', sans-serif`

### Add New Sections

1. Create HTML section (copy existing format)
2. Add CSS (copy existing section styles)
3. Add nav link
4. Test responsive design (F12 → device icon)

---

## 📺 Video Integration

### YouTube
```html
<!-- Find the video ID -->
<!-- URL: https://youtube.com/watch?v=dQw4w9WgXcQ -->
<!-- ID: dQw4w9WgXcQ -->

<!-- Embed it: -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

### Vimeo
```html
<!-- Find the video ID from URL: https://vimeo.com/123456789 -->
<!-- Embed it: -->
<iframe src="https://player.vimeo.com/video/123456789"></iframe>
```

---

## ✅ Before Submitting

### Content Checklist
- [ ] Your real name (not placeholder)
- [ ] Professional photo/images added
- [ ] Video IDs correct and videos play
- [ ] Project descriptions are compelling
- [ ] Tools/tags are accurate
- [ ] Industry experience filled in
- [ ] Contact email correct
- [ ] CV PDF uploaded
- [ ] No spelling errors

### Technical Checklist
- [ ] Website loads locally (F5)
- [ ] All images visible
- [ ] All links work (click every one)
- [ ] Mobile looks good (F12 → device icon)
- [ ] No console errors (F12 → Console)
- [ ] Navigation works (desktop + mobile)
- [ ] Videos play
- [ ] PDF downloads
- [ ] Responsive on all screen sizes

### Quality Checklist
- [ ] Professional appearance
- [ ] No placeholder text remaining
- [ ] Fast loading (< 3 seconds)
- [ ] Suitable for academic review
- [ ] Unique and personalized
- [ ] Clear evidence of technical skills

---

## 🌐 Deployment Paths

### Path 1: GitHub Pages (Recommended - Free)
```
1. Create GitHub repo
2. Push your files
3. Settings → Pages → Enable
4. Live in 1-2 minutes at https://yourusername.github.io/portfolio-website
```

### Path 2: Netlify (Easiest - Free)
```
1. Go to netlify.com
2. Drag-drop your portfolio folder
3. Or connect your GitHub repo
4. Live instantly with auto-deploys
```

### Path 3: Vercel (Fast CDN - Free)
```
1. Go to vercel.com
2. Import from GitHub
3. Deploy
4. Live at yourname.vercel.app
```

### Path 4: Web Host (Paid Option)
```
1. Upload via FTP to web server
2. Make sure index.html is home page
3. Live at yourdomain.com
```

See `DEPLOYMENT.md` for detailed instructions.

---

## 📖 Documentation Map

**How to use each guide:**

| Guide | Use When | Read Time |
|-------|----------|-----------|
| **QUICK_EDIT.md** | You want fast answers | 5 min |
| **CONTENT_TEMPLATES.md** | Writing portfolio content | 10 min |
| **README.md** | Setting up hosting | 10 min |
| **DEPLOYMENT.md** | Deploying the website | 5 min |
| **LAYOUT.md** | Understanding design | 5 min |
| **CHECKLIST.md** | Final quality check | 10 min |
| **TROUBLESHOOTING.md** | Something's broken | 10 min |

**Quick reading order:**
1. Start with **QUICK_EDIT.md**
2. Refer to **CONTENT_TEMPLATES.md** while writing
3. Use **LAYOUT.md** to verify design
4. Follow **DEPLOYMENT.md** to go live
5. Run **CHECKLIST.md** before submission
6. Keep **TROUBLESHOOTING.md** handy

---

## 🎯 Your Portfolio Includes

✅ **7 Major Sections**
- Hero/Overview
- 3D Showreel (embedded video)
- Game Creation Showreel (embedded video)
- 5 Project Cards (with image galleries)
- Industry Experience (2 case studies)
- Contact Information
- CV Download

✅ **Features**
- Fully responsive (desktop, tablet, mobile)
- Image gallery with modal viewer
- Video embedding (YouTube/Vimeo)
- Sticky navigation
- Mobile hamburger menu
- Professional dark theme
- Print-friendly CSS
- Fast loading
- No JavaScript frameworks (vanilla JS)

✅ **Documentation**
- 7 comprehensive guides
- Content templates
- Deployment instructions
- Troubleshooting help
- Visual layout reference

---

## 🔑 Key Features Explained

### Image Gallery
Click project images to see full-size modal. Gallery dots allow browsing multiple images per project.

### Responsive Design
Desktop layout uses multi-column grids. Mobile layout stacks everything single-column. Tested across devices.

### Easy Updates
All content easily editable. Video IDs, images, text all clearly marked with comments. No coding knowledge needed.

### Fast Performance
No heavy frameworks. Optimized CSS and vanilla JavaScript. Fast loading even on slow connections.

### Academic-Ready
Clean, professional design. Focuses on technical skills. Suitable for MSc program review.

---

## 💡 Pro Tips

1. **Test on real devices** – Not just browser emulation
2. **Get feedback** – Share with friends/mentors before submitting
3. **Compress images** – Use tinypng.com, aim for < 200KB each
4. **Use placeholder content** – Replace it with real content later
5. **Keep backups** – Commit to Git regularly
6. **Update regularly** – Add new projects as you complete them
7. **Share your GitHub** – Shows code and version history
8. **Check browser compatibility** – Test Chrome, Firefox, Safari, Edge
9. **Mobile first** – Check mobile layout before desktop
10. **Celebrate** – You've got a professional portfolio!

---

## 🆘 Immediate Help

### "I'm confused, where do I start?"
→ Open `QUICK_EDIT.md` and follow it step-by-step

### "I don't know what to write"
→ Read `CONTENT_TEMPLATES.md` for examples and templates

### "Something's broken"
→ Check `TROUBLESHOOTING.md` for your specific issue

### "How do I deploy this?"
→ Follow `DEPLOYMENT.md` step-by-step

### "Is my site ready?"
→ Run through `CHECKLIST.md` before submission

---

## 📊 Project Timeline Suggestion

### Week 1: Setup & Customization
- [ ] Edit basic info (name, intro)
- [ ] Add your images to assets/
- [ ] Update all project titles
- [ ] Test locally

### Week 2: Content Development
- [ ] Write project descriptions
- [ ] Add YouTube/Vimeo IDs
- [ ] Fill in industry experience
- [ ] Add contact information

### Week 3: Polish & Testing
- [ ] Refine content based on feedback
- [ ] Test on multiple devices
- [ ] Optimize images
- [ ] Run final checklist

### Week 4: Deployment
- [ ] Deploy to GitHub Pages or Netlify
- [ ] Test live website
- [ ] Fix any issues
- [ ] Share with assessors

---

## 🎓 MSc Application Notes

Your portfolio demonstrates:
- ✅ Technical competency
- ✅ Professional communication
- ✅ Industry experience
- ✅ Project complexity
- ✅ Problem-solving ability
- ✅ Passion for the field

**Make sure each project clearly shows:**
1. **What** you created
2. **How** you created it (tools/techniques)
3. **Why** it matters (technical benefit)
4. **What** you learned

---

## 📞 Final Notes

This portfolio website is:
- ✅ Complete and functional
- ✅ Fully documented
- ✅ Easy to customize
- ✅ Ready to deploy
- ✅ Professional quality
- ✅ Assessor-friendly

You have **everything you need** to create a compelling Portfolio of Evidence.

---

## Next Steps

1. **Read QUICK_EDIT.md** (5 minutes)
2. **Customize index.html** with your content (2-3 hours)
3. **Add images to assets/** (30 minutes)
4. **Test locally** with Python server (5 minutes)
5. **Deploy** to GitHub Pages or Netlify (10 minutes)
6. **Run CHECKLIST.md** (30 minutes)
7. **Submit** to MSc program 🚀

---

## Good Luck! 🎉

You've got a professional portfolio website ready for your MSc Technical Art & Visual Effects application.

**Remember:**
- Your portfolio shows your work speaks for itself
- Keep content professional and technical
- Quantify achievements when possible
- Update regularly as you create new work
- Don't stress about perfection (good enough is great!)

Now go make something amazing! ✨

---

**Made with ❤️ for your MSc application**

Questions? Check the relevant guide document. All answers are in there!
