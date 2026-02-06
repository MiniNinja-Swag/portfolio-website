# Portfolio Website - Final Checklist & Verification

Use this checklist to ensure your portfolio is production-ready before submission.

## Content Verification

### Hero Section
- [ ] Your name is displayed (replaced "Your Name Here")
- [ ] Subtitle says "Portfolio of Evidence – MSc Technical Art & Visual Effects"
- [ ] Intro paragraph is personalized and compelling
- [ ] Both hero buttons are visible and clickable

### Showreels
- [ ] 3D Showreel video ID is correct (YouTube or Vimeo)
- [ ] Game Creation Showreel video ID is correct
- [ ] Videos play without errors
- [ ] Video descriptions are accurate and concise
- [ ] Both videos are 1080p or higher quality

### Projects Section
- [ ] All 5 project titles are replaced with real project names
- [ ] Project descriptions are clear and technical
- [ ] Tools/tags accurately reflect what was used
- [ ] At least 2 images per project
- [ ] Project links point to real demos/GitHub repos
- [ ] All images load correctly
- [ ] No broken image paths
- [ ] Gallery navigation works (click dots to see different images)
- [ ] Clicking image opens modal/full-size view

### Industry Experience
- [ ] Myrkur Games case study is filled in
  - [ ] Role is clearly described
  - [ ] Technical skills are listed
  - [ ] 2 images are in place
  - [ ] NDA disclaimer is visible (if applicable)
- [ ] RÍSÍ case study is filled in
  - [ ] Broadcast role is described
  - [ ] Technical approach is explained
  - [ ] Stream examples link is provided
  - [ ] 3 images are in place

### Contact Section
- [ ] Email address is correct and clickable
- [ ] Location is set to Iceland (or updated as needed)
- [ ] LinkedIn profile link is correct
- [ ] GitHub profile link is correct
- [ ] CV PDF is uploaded to `assets/cv.pdf`
- [ ] CV download button works

---

## Technical Verification

### Browser Compatibility
- [ ] Site loads in Chrome
- [ ] Site loads in Firefox
- [ ] Site loads in Safari
- [ ] Site loads in Edge

### Responsive Design
- [ ] Desktop (1920px+) looks good
- [ ] Tablet (768px-1024px) looks good
- [ ] Mobile (320px-768px) looks good
- [ ] No horizontal scrolling on mobile
- [ ] Navigation menu hamburger works on mobile
- [ ] All buttons are clickable on mobile
- [ ] Images scale properly on all screen sizes

### Performance
- [ ] Page loads in under 3 seconds (on 4G)
- [ ] No console errors (F12 → Console tab)
- [ ] No console warnings
- [ ] All images optimized (<200KB each)
- [ ] No broken image links
- [ ] No broken video embeds
- [ ] PageSpeed score: 80+ (Google PageSpeed Insights)

### Navigation
- [ ] All navbar links work
- [ ] Smooth scrolling to sections
- [ ] Active state shows current section (optional, but nice)
- [ ] Mobile menu closes after clicking link
- [ ] Mobile menu hamburger toggles correctly
- [ ] No dead links

### Interactivity
- [ ] Image galleries work (click dots to change images)
- [ ] Modal opens when clicking images
- [ ] Modal closes when clicking X
- [ ] Modal closes when clicking outside image
- [ ] Modal closes with ESC key
- [ ] All links open in correct target (new tab if external)
- [ ] Hover effects work on buttons/links

---

## Design Verification

### Visual Design
- [ ] Color scheme is consistent
- [ ] Typography is readable
- [ ] Sufficient contrast (light text on dark background)
- [ ] Spacing looks balanced
- [ ] No unnecessary visual clutter
- [ ] Professional appearance
- [ ] Suitable for academic review

### Content Organization
- [ ] Information hierarchy is clear
- [ ] Most important content is prominent
- [ ] Sections are logically ordered
- [ ] Related content is grouped together
- [ ] White space is used effectively

### Accessibility
- [ ] All images have alt text (not visible, but in HTML)
- [ ] Color contrast meets WCAG standards (test: https://webaim.org/resources/contrastchecker/)
- [ ] Navigation is keyboard-accessible (Tab key)
- [ ] Form elements are labeled
- [ ] Videos have captions (if applicable)

---

## File Structure Verification

```
portfolio-website/
├── index.html ✓
├── styles.css ✓
├── script.js ✓
├── README.md ✓
├── QUICK_EDIT.md ✓
├── DEPLOYMENT.md ✓
├── .gitignore ✓
└── assets/
    ├── project-1-1.jpg ✓
    ├── project-1-2.jpg ✓
    ├── project-1-3.jpg ✓
    ├── project-2-1.jpg ✓
    ├── project-2-2.jpg ✓
    ├── project-3-1.jpg ✓
    ├── project-3-2.jpg ✓
    ├── project-3-3.jpg ✓
    ├── project-3-4.jpg ✓
    ├── project-4-1.jpg ✓
    ├── project-4-2.jpg ✓
    ├── project-5-1.jpg ✓
    ├── project-5-2.jpg ✓
    ├── project-5-3.jpg ✓
    ├── myrkur-1.jpg ✓
    ├── myrkur-2.jpg ✓
    ├── risi-1.jpg ✓
    ├── risi-2.jpg ✓
    ├── risi-3.jpg ✓
    └── cv.pdf ✓
```

---

## Before Deployment

### Local Testing
```bash
# Test locally with Python
python -m http.server 8000

# Then visit http://localhost:8000 in your browser
```

Verify all of the above checklists pass locally before deploying.

### Clean Up
- [ ] Remove all placeholder text
- [ ] Remove all test images
- [ ] Delete backup files
- [ ] No sensitive information in HTML comments

---

## Deployment Verification

### GitHub Pages
- [ ] Repository is public
- [ ] All files are committed and pushed
- [ ] GitHub Pages is enabled in Settings
- [ ] Site builds without errors
- [ ] Site is accessible at: `https://yourusername.github.io/portfolio-website`
- [ ] All content visible and working

### Netlify
- [ ] Site is deployed from GitHub
- [ ] Build succeeds
- [ ] Site is accessible at deployed URL
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate is active (green lock)

### Web Host
- [ ] All files uploaded via FTP
- [ ] index.html is set as home page
- [ ] Site accessible at your domain
- [ ] SSL certificate installed (HTTPS)
- [ ] All assets loading correctly

---

## Final Quality Check

### Content Quality
- [ ] No spelling or grammar errors
- [ ] Professional tone throughout
- [ ] Technical terms used correctly
- [ ] Descriptions are clear and concise
- [ ] No placeholder text remaining
- [ ] No Lorem Ipsum remaining

### Image Quality
- [ ] All images are relevant
- [ ] All images are high quality
- [ ] All images are properly compressed
- [ ] No watermarks (unless intentional)
- [ ] Consistent image style/tone
- [ ] Good composition and framing

### Links Quality
- [ ] All external links work
- [ ] Links open in appropriate context
- [ ] No broken links
- [ ] LinkedIn profile is current
- [ ] GitHub profile is active
- [ ] Email address is monitored

---

## Assessor-Friendly Features

- [ ] Site loads fast (under 3 seconds)
- [ ] No confusion about where to start
- [ ] Clear navigation menu
- [ ] Professional appearance
- [ ] Content is easy to scan
- [ ] Technical skills are highlighted
- [ ] Projects are well-organized
- [ ] Industry experience is credible
- [ ] Contact information is visible
- [ ] CV is easily downloadable

---

## Pre-Submission Week

### 3 Days Before
- [ ] Final content review
- [ ] Ask friend/mentor to review
- [ ] Fix any feedback
- [ ] Test on multiple devices

### 1 Day Before
- [ ] Final visual polish
- [ ] Test all links one more time
- [ ] Verify images are optimized
- [ ] Check on multiple browsers

### Day Of Submission
- [ ] Copy portfolio URL
- [ ] Test link one final time
- [ ] Verify all content is visible
- [ ] Check email is correct
- [ ] Submit with confidence! 🚀

---

## Quick Test Script

Use this to quickly verify everything:

```
1. Open portfolio in 3 browsers (Chrome, Firefox, Safari)
2. Click every button and link
3. Scroll through entire page on desktop
4. View on mobile (F12 → device icon)
5. Test hamburger menu on mobile
6. Click gallery dots to change images
7. Click image to open modal
8. Close modal with X and ESC key
9. Open F12 → Console → check for errors
10. Check PageSpeed: https://pagespeed.web.dev
```

All checks should pass ✓

---

## Sign-Off Checklist

- [ ] I have verified all content is accurate
- [ ] I have tested on desktop, tablet, and mobile
- [ ] I have checked for spelling/grammar errors
- [ ] I have verified all links work
- [ ] I have optimized all images
- [ ] I have tested in multiple browsers
- [ ] I have run PageSpeed test (80+ score)
- [ ] I have no console errors
- [ ] I am ready to deploy
- [ ] I am ready to submit

---

**Ready for submission?** ✓

If all checkboxes are marked, your portfolio is ready to go!

**Good luck with your MSc Technical Art & Visual Effects application!** 🎬✨

---

## Support

If something breaks or doesn't work:

1. **Check F12 Console** (Developer Tools)
2. **Read error message** carefully
3. **Search the error** on Google
4. **Review relevant section** in README.md
5. **Check file paths** are correct
6. **Clear browser cache** (Ctrl+Shift+Delete)
7. **Restart local server** if testing locally

Most issues are fixed by:
- Checking file paths
- Clearing cache
- Restarting server
- Checking spelling
