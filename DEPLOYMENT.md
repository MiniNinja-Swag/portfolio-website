# Deployment Guide

Deploy your Portfolio of Evidence website in minutes using one of these services.

## Option 1: GitHub Pages (Recommended - Free)

Perfect for hosting on GitHub. Your portfolio will be live at:
`https://yourusername.github.io/portfolio-website`

### Steps:

1. **Create GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up with your email

2. **Create a New Repository**
   - Click "+" → "New repository"
   - Name: `portfolio-website`
   - Choose "Public" (so it's visible)
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop these files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
     - `QUICK_EDIT.md`
   - Drag and drop `assets/` folder with all images

4. **Enable GitHub Pages**
   - Go to repository "Settings"
   - Scroll down to "GitHub Pages"
   - Source: select `main` branch
   - Folder: select `/ (root)`
   - Click "Save"

5. **Wait 1-2 minutes**
   - Your site will be live at:
   - `https://yourusername.github.io/portfolio-website`

### Update Your Site
Every time you edit files and push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Changes appear within 1 minute.

---

## Option 2: Netlify (Recommended - Free)

Super simple, free tier includes custom domains. No GitHub required.

### Steps:

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "Sign up" → Choose "GitHub" or email

2. **Deploy from Git**
   - Click "New site from Git"
   - Select "GitHub" (connect your GitHub account)
   - Choose your `portfolio-website` repository
   - Build settings: leave blank (it's a static site)
   - Click "Deploy site"

3. **Wait for Build**
   - Netlify will build your site (1-2 minutes)
   - Your site URL will appear (e.g., `https://random-name-123.netlify.app`)

4. **Custom Domain (Optional)**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Use your own domain or Netlify's free subdomain

### Update Your Site
Push changes to GitHub, Netlify auto-deploys:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Changes appear within 1 minute.

---

## Option 3: Vercel (Free)

Another excellent option with instant global CDN.

### Steps:

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Select your GitHub repository
   - Leave build settings as default
   - Click "Deploy"

3. **Site is Live**
   - URL: `https://yourname.vercel.app`
   - Auto-deploys on push

---

## Option 4: Web Host (FTP Upload)

If you have web hosting (GoDaddy, Hostinger, etc.):

### Steps:

1. **Connect via FTP**
   - Use FileZilla or your host's file manager
   - Upload these files to `public_html/` or `www/`:
     - `index.html`
     - `styles.css`
     - `script.js`
   - Upload `assets/` folder
   - Upload `README.md`

2. **Set index.html as Home**
   - Most hosts do this automatically
   - If not, check your control panel

3. **Your site is live**
   - Visit your domain in browser

### Update Your Site
- Edit files locally
- Re-upload via FTP
- Changes appear within 1 minute

---

## Option 5: Local Hosting (Testing Only)

For testing before deployment:

### Python
```bash
cd portfolio-website
python -m http.server 8000
# Visit http://localhost:8000
```

### Node.js
```bash
cd portfolio-website
npx http-server
# Visit http://localhost:8080
```

### VS Code Live Server
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"
- Opens automatically in browser

---

## Comparison Table

| Service | Cost | Setup Time | Custom Domain | CDN | Auto-Deploy |
|---------|------|-----------|---------------|----|-------------|
| **GitHub Pages** | Free | 5 min | Free | Yes | Yes |
| **Netlify** | Free | 3 min | Free tier | Yes | Yes |
| **Vercel** | Free | 3 min | Free tier | Yes | Yes |
| **Web Host** | $3-10/mo | 10 min | Yes (paid) | Maybe | Manual |

---

## Checklist Before Going Live

- [ ] All placeholder text replaced
- [ ] Video IDs added (YouTube/Vimeo)
- [ ] All images in `assets/` folder
- [ ] CV PDF in `assets/cv.pdf`
- [ ] Contact email is correct
- [ ] All links working (test locally first)
- [ ] No console errors (F12 → Console)
- [ ] Tested on mobile (F12 → device icon)
- [ ] No broken image links

---

## After Deployment

### Make Changes
1. Edit files in your code editor
2. Save locally
3. Test in browser (refresh F5)
4. Push to GitHub/Netlify
5. Changes go live within 1-2 minutes

### Troubleshooting

**Site showing "Not Found"**
- Make sure `index.html` is in the root directory
- Check file names are lowercase
- Wait 5 minutes for GitHub Pages

**Images not loading**
- Check image paths use `assets/` folder
- Ensure filenames match exactly (case-sensitive)
- Compress large images at [tinypng.com](https://tinypng.com)

**Videos not playing**
- Verify video ID is correct
- Check network tab (F12) for errors
- Try different browser

**Custom domain not working**
- Check DNS settings in domain registrar
- Wait up to 48 hours for DNS propagation
- Contact hosting support

---

## Security Notes

- This is a **static website** (no server-side code)
- No sensitive data stored
- Safe to put on public GitHub
- All code is viewable (that's fine for portfolios!)

---

## Performance Tips

### Optimize Images
- Use [tinypng.com](https://tinypng.com) to compress
- Keep under 200KB per image
- Use JPG for photos, PNG for graphics

### Monitor Speed
- Use [pagespeed.web.dev](https://pagespeed.web.dev)
- Check "Insights" → Mobile & Desktop
- Aim for 80+ score

### Cache Strategy
- Netlify/GitHub Pages handle caching automatically
- Add cache headers for custom hosting:
  ```
  Cache-Control: public, max-age=31536000
  ```

---

## Next Steps

1. **Deploy** using Option 1, 2, or 3 above
2. **Share your link** with friends/mentors for feedback
3. **Customize content** based on feedback
4. **Submit to MSc program** with your portfolio URL

---

Good luck with your application! 🚀

For questions:
- **GitHub Pages Help:** https://docs.github.com/en/pages
- **Netlify Help:** https://docs.netlify.com
- **Vercel Help:** https://vercel.com/docs
