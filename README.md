# Vanilla HTML/CSS/JavaScript Portfolio

## Files Created:
- **portfolio.html** - Main HTML file with all sections
- **styles.css** - Combined CSS from all React components
- **script.js** - JavaScript for interactivity (navbar, form, animations)

## How to Use:

### 1. Local Development:
Simply open **portfolio.html** in your browser.

### 2. Deploy to GitHub Pages:

#### Option A: Simple GitHub Pages (Recommended)
1. Rename `portfolio.html` to `index.html`:
   ```
   Rename-Item portfolio.html index.html
   ```

2. Push to GitHub:
   ```
   git add .
   git commit -m "Convert to vanilla HTML/CSS/JS"
   git push origin main
   ```

3. Go to GitHub Settings → Pages → Select "main" branch → Save

4. Your site will be live at: `https://rasikashree.github.io/Portfolio/`

#### Option B: Keep Both Versions
- Keep React version in main branch
- Create `gh-pages` branch with vanilla version
- GitHub Pages will use the gh-pages branch

## Features:
✅ Fully responsive design
✅ Mobile hamburger menu
✅ Smooth scrolling navigation
✅ Animated skill bars
✅ Professional navbar with scroll effects
✅ Working contact form (logs to console)
✅ No dependencies - pure vanilla JavaScript

## Image Path:
Make sure your image path `src/assets/Picture2.jpeg` is correct. 
If deploying, you may need to adjust the path in portfolio.html.

## Browser Support:
Works in all modern browsers (Chrome, Firefox, Safari, Edge)
