# Portfolio Website - Troubleshooting & FAQ

Common issues and solutions for your portfolio website.

## Getting Started Issues

### Issue: "Can't find the website files"

**Solution:**
1. Open your file explorer
2. Navigate to: `C:\Users\[YourUsername]\Documents\Unreal Projects\portfolio-website`
3. You should see: `index.html`, `styles.css`, `script.js`, `assets/`, and `.md` files

If the folder doesn't exist, create it:
1. Right-click Desktop → New Folder
2. Name it `portfolio-website`
3. Put all files there

---

### Issue: "How do I open the website in my browser?"

**Solution - Option A (Python):**
```bash
1. Open PowerShell/Command Prompt
2. Navigate to your portfolio folder:
   cd "C:\Users\[YourUsername]\Documents\Unreal Projects\portfolio-website"
3. Run: python -m http.server 8000
4. Open browser and go to: http://localhost:8000
```

**Solution - Option B (VS Code):**
1. Open VS Code
2. Install "Live Server" extension (by Ritwick Dey)
3. Right-click `index.html` → "Open with Live Server"
4. Browser opens automatically

**Solution - Option C (Browser):**
Don't double-click the HTML file (won't work correctly). Use a local server instead.

---

## Content & Editing Issues

### Issue: "Text doesn't appear when I edit it"

**Solutions:**
1. **Save the file** (Ctrl+S)
2. **Refresh the browser** (Ctrl+R or F5)
3. **Hard refresh** to clear cache (Ctrl+Shift+R)
4. **Close and reopen** the browser
5. Check the file is saved in the correct location

If still not showing:
- Check spelling of placeholder text exactly
- Make sure you're editing `index.html` (not another file)
- Check you have write permissions to the file

---

### Issue: "YouTube video won't embed"

**Solution:**
1. **Find your Video ID:**
   - YouTube URL: `https://youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID is: `dQw4w9WgXcQ` (the part after `v=`)

2. **Replace in HTML:**
   ```html
   <!-- WRONG: -->
   <iframe src="https://www.youtube.com/embed/https://youtube.com/watch?v=dQw4w9WgXcQ">
   
   <!-- RIGHT: -->
   <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ">
   ```

3. **For Vimeo:**
   ```html
   <iframe src="https://player.vimeo.com/video/123456789">
   ```
   (Get the video ID from the Vimeo URL)

4. **For Private Videos:**
   YouTube/Vimeo must be set to "Unlisted" or "Public" (not Private)

---

### Issue: "Images not showing"

**Solutions:**
1. **Check file path is correct:**
   ```
   WRONG: assets/myimage.jpg
   RIGHT: assets/myimage.jpg (same case as filename)
   
   If file is: MyImage.JPG
   Path must be: assets/MyImage.JPG (exact case)
   ```

2. **Verify file is in assets folder:**
   - File should be at: `portfolio-website/assets/myimage.jpg`
   - Not at: `portfolio-website/myimage.jpg`

3. **Check filename:**
   - No spaces: `my image.jpg` ❌ → `my-image.jpg` ✅
   - Lowercase better: `myimage.jpg` ✅ → `MyImage.JPG` ⚠️
   - Correct extension: `.jpg` or `.png` (not `.jpeg`)

4. **Reload browser:**
   - Hard refresh: Ctrl+Shift+R (Windows/Linux)
   - Hard refresh: Cmd+Shift+R (Mac)

---

### Issue: "PDF CV won't download"

**Solution:**
1. **Place CV in assets folder:**
   - File: `C:\Users\...\portfolio-website\assets\cv.pdf`
   - Filename: must be exactly `cv.pdf` (lowercase)

2. **Check HTML link is correct:**
   ```html
   <a href="assets/cv.pdf" class="btn btn-primary" download>
       📄 Download Full CV (PDF)
   </a>
   ```

3. **If using different filename:**
   ```html
   <!-- Change cv.pdf to your filename -->
   <a href="assets/my-resume.pdf" download>
       Download CV
   </a>
   ```

4. **Test the link:**
   - Right-click link → "Save link as"
   - Should prompt download, not open in browser

---

## Visual & Layout Issues

### Issue: "Website looks broken on mobile"

**Solutions:**
1. **Test properly:**
   - Press F12 in browser
   - Click device icon (top-left)
   - Select iPhone or Android preset
   - Refresh page

2. **Common issues:**
   - Images too large? → Reduce in assets folder
   - Text too small? → Browser zoom (Ctrl + +)
   - Layout broken? → Clear cache (Ctrl+Shift+Delete)

3. **If buttons are tiny:**
   - This is CSS issue
   - Check styles.css isn't corrupted
   - Try removing custom CSS and revert

---

### Issue: "Colors look wrong"

**Solution:**
1. **Verify CSS file exists:** `styles.css` in root folder
2. **Check HTML links CSS correctly:**
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
   (Should be in the `<head>` section)

3. **If colors still wrong:**
   - Hard refresh: Ctrl+Shift+R
   - Close browser completely and reopen
   - Check CSS file isn't empty

---

### Issue: "Navigation menu doesn't work"

**Solutions:**
1. **Desktop menu:**
   - Check JavaScript file exists: `script.js`
   - Hard refresh: Ctrl+Shift+R

2. **Mobile hamburger menu:**
   - Press F12 → Console tab
   - Look for red error messages
   - If errors, check `script.js` for typos

3. **If links don't scroll to sections:**
   - Check `<section id="home">` tags exist
   - Check `<a href="#home">` links are correct
   - Make sure spelling matches exactly

---

### Issue: "Gallery/Modal doesn't work"

**Solutions:**
1. **Image gallery dots:**
   - F12 → Console → Look for errors
   - Check `script.js` exists and is loaded
   - Verify `onclick="changeProjectImage(event, 'project-1', 0)"` syntax

2. **Modal (full-size image):**
   - Click any project image
   - Should open in dark overlay
   - Close with X button or ESC key
   - If doesn't work, check `script.js`

---

## Browser & Performance Issues

### Issue: "Page loads slowly"

**Solutions:**
1. **Check image sizes:**
   - Each image should be < 200KB
   - Compress at: https://tinypng.com/
   - Use JPG for photos, PNG for graphics

2. **Check browser extensions:**
   - Try incognito/private mode
   - Disable ad blockers
   - Restart browser

3. **Check internet speed:**
   - Open https://speedtest.net
   - Test from different network
   - Try different device

---

### Issue: "Videos buffer/don't load"

**Solutions:**
1. **Check internet connection:**
   - Run speed test: speedtest.net
   - Try different device
   - Restart modem/router

2. **Check YouTube/Vimeo status:**
   - Is video public/unlisted?
   - Can you access it directly?
   - Try different YouTube link

3. **Try different browser:**
   - Chrome, Firefox, Safari all different
   - Try incognito mode
   - Clear cache: Ctrl+Shift+Delete

---

### Issue: "Console shows errors"

**Solution:**
1. **Open console:**
   - Press F12
   - Click "Console" tab
   - Look for red error messages

2. **Common errors & fixes:**

   **Error:** `Uncaught SyntaxError in script.js`
   - **Fix:** Check `script.js` for typos or missing quotes
   - **Or:** Redownload fresh copy

   **Error:** `Failed to load resource: assets/image.jpg`
   - **Fix:** Check image filename and path
   - **Or:** Verify file exists in assets folder

   **Error:** `Cannot read property 'classList' of null`
   - **Fix:** Check HTML IDs match JavaScript
   - **Or:** Ensure elements exist in HTML

3. **If still stuck:**
   - Copy error message
   - Search on Google
   - Check GitHub issues for similar projects

---

## Deployment Issues

### Issue: "GitHub Pages shows 404 error"

**Solutions:**
1. **Check Settings → Pages:**
   - Source: `main` branch
   - Folder: `/ (root)`
   - Click Save

2. **Wait for deployment:**
   - First deployment takes 1-2 minutes
   - Check: https://yourusername.github.io/portfolio-website
   - (replace yourusername with your GitHub username)

3. **Verify index.html exists:**
   - File must be in root, not in subfolder
   - Must be named exactly `index.html`
   - Must be pushed to GitHub

4. **If still broken:**
   - Check repository is Public (not Private)
   - Re-enable Pages in Settings
   - Try clearing browser cache

---

### Issue: "Netlify deployment failed"

**Solution:**
1. **Check build settings:**
   - Build command: (leave empty)
   - Publish directory: `.` (just a dot for root)

2. **Check Git sync:**
   - Push changes to GitHub: `git push`
   - Netlify auto-deploys within 1 minute
   - Check deploy status in Netlify dashboard

3. **Manual deploy:**
   - Drag and drop `portfolio-website` folder into Netlify
   - Wait for upload
   - Should get a URL

---

### Issue: "Custom domain not working"

**Solutions:**
1. **Check DNS settings:**
   - Go to domain registrar (GoDaddy, Namecheap, etc.)
   - Update DNS to point to Netlify (instructions in Netlify)
   - Wait up to 48 hours for propagation

2. **Test DNS:**
   - https://whatsmydns.net
   - Enter your domain
   - Wait for all green checks

3. **Temporary solution:**
   - Use provided Netlify URL while DNS propagates
   - Share `https://your-site.netlify.app` with assessors

---

## Link & URL Issues

### Issue: "Links to projects don't work"

**Solutions:**
1. **Check YouTube/Vimeo links:**
   ```html
   <!-- For YouTube -->
   <a href="https://youtu.be/VIDEOID">Watch Demo</a>
   
   <!-- For GitHub -->
   <a href="https://github.com/username/repo">GitHub</a>
   
   <!-- For custom site -->
   <a href="https://yoursite.com">View Project</a>
   ```

2. **Common mistakes:**
   - Missing `https://` prefix
   - Typo in URL
   - Dead link (project moved/deleted)
   - Link to private repo (make it public)

3. **Test each link:**
   - Click every link in your site
   - Make sure it opens correct page
   - Check it opens in new tab if external

---

### Issue: "Email link doesn't work"

**Solution:**
```html
<!-- Correct format -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Don't use -->
<a href="email: your.email@example.com">...</a>
<a href="your.email@example.com">...</a>
```

Click test: Should open default email client

---

## Accessibility Issues

### Issue: "Website fails accessibility check"

**Solutions:**
1. **Check color contrast:**
   - Test at: https://webaim.org/resources/contrastchecker/
   - Light text on dark background ✓
   - Dark text on light background ✓

2. **Check alt text:**
   - All images should have `alt="description"`
   - Alt text not visible but in HTML

3. **Check keyboard navigation:**
   - Tab through page
   - All buttons/links should be reachable
   - Focus visible (outline shown)

4. **Check form labels:**
   - Inputs have associated labels
   - Links have descriptive text (not "Click here")

---

## Advanced Troubleshooting

### Issue: "Can't push to GitHub"

**Solution:**
```bash
# If you get authentication error:
git config --global user.email "your.email@github.com"
git config --global user.name "Your GitHub Username"

# Then try again:
git add .
git commit -m "Update portfolio"
git push origin main
```

---

### Issue: "CSS/JavaScript changes not appearing"

**Solutions:**
1. **Hard refresh:** Ctrl+Shift+R (or Cmd+Shift+R on Mac)
2. **Clear browser cache:**
   - Chrome: Ctrl+Shift+Delete
   - Firefox: Ctrl+Shift+Delete
   - Safari: Develop → Empty Caches
3. **Close browser completely** and reopen
4. **Check file is saved** (Ctrl+S in editor)
5. **Restart local server** if running one

---

### Issue: "Can't edit files"

**Solutions:**
1. **Windows won't let me edit:**
   - Right-click file → Properties
   - Uncheck "Read-only"
   - Click Apply → OK

2. **File locked by another program:**
   - Close VS Code completely
   - Restart it
   - Try editing again

3. **Permission denied:**
   - Run editor as Administrator
   - Or move files to Documents folder
   - Or disable antivirus temporarily

---

## FAQ

### Q: Can I use this template commercially?

**A:** Yes! This is your website. Use it for your portfolio. Customize everything.

### Q: Do I need to credit you?

**A:** Not required, but appreciated! You can mention it was handcrafted.

### Q: Can I share this with friends?

**A:** Yes! Share the GitHub repo or tell them to create their own version.

### Q: How often should I update my portfolio?

**A:** Update when you:
- Complete new projects
- Add to your showreel
- Get new work experience
- Improve your CV
- Change goals/focus

**Minimum:** Every semester or before applications

### Q: What file format should images be?

**A:** 
- **Photos:** JPG (smaller file size)
- **Screenshots:** PNG (preserves quality)
- **Compress everything:** https://tinypng.com/

### Q: Can I use this with custom domain?

**A:** Yes! Works with GitHub Pages, Netlify, Vercel, or web host.

### Q: How do I change the color scheme?

**A:** Edit `styles.css` lines 7-16. Use https://colorhexa.com/ to find colors.

### Q: Is this SEO-friendly?

**A:** For a portfolio on GitHub Pages, not much SEO needed. Assessors access directly via link.

### Q: Can I add more sections?

**A:** Yes! Copy a section in HTML, add CSS styling, and add nav link.

### Q: How do I track portfolio visits?

**A:** Add Google Analytics (optional, ask if needed).

### Q: What if I get a 403/404 error?

**A:** 
- GitHub Pages: Wait 5 minutes, hard refresh
- Netlify: Check deploy status in dashboard
- Web host: Check file is in correct folder

---

## Getting More Help

### Resources
- **HTML/CSS Help:** https://developer.mozilla.org/
- **GitHub Help:** https://docs.github.com
- **Netlify Help:** https://docs.netlify.com
- **General:** Stack Overflow (google your error)

### Report Issues
If you find bugs:
1. Document what happened
2. Note browser/OS
3. Screenshot the error
4. Search similar issues online
5. Post to Stack Overflow if stuck

---

## Still Stuck?

**Checklist before asking for help:**

- [ ] Restarted browser completely?
- [ ] Hard refreshed (Ctrl+Shift+R)?
- [ ] Checked browser console (F12)?
- [ ] Verified file exists and is spelled correctly?
- [ ] Checked file path uses forward slashes: `assets/image.jpg`?
- [ ] Saved the file (Ctrl+S)?
- [ ] Closed and reopened editor?
- [ ] Cleared browser cache?
- [ ] Tried different browser?
- [ ] Googled the error message?

If all of these pass, post your issue with:
- Error message (exact text)
- Screenshot of problem
- What you were trying to do
- What you changed
- Browser/OS you're using

---

**Good luck with your portfolio!** 

You've got this! 🚀

If all else fails, remember: The basic website works. Start from that and make small changes one at a time.
