# Secret Agents HQ Demo

A fun, interactive web application featuring spy-themed content including mission generators, agent profiles, gadgets, and code-breaking challenges.

## 🚀 Deploy to Cloudflare Pages

This project is configured for easy deployment to Cloudflare Pages. Choose one of the deployment methods below:

### Method 1: Deploy via Git Integration (Recommended)

1. Push this repository to GitHub, GitLab, or Bitbucket
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Go to "Pages" in the sidebar
4. Click "Create a project"
5. Connect your Git provider and select this repository
6. Use these build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
7. Click "Save and Deploy"

### Method 2: Deploy via Wrangler CLI

1. Install dependencies:

   ```bash
   npm install
   ```

2. Login to Cloudflare:

   ```bash
   npx wrangler login
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Deploy to Cloudflare Pages:
   ```bash
   npm run deploy
   ```

### Method 3: Direct Upload

1. Build the project:

   ```bash
   npm run build
   ```

2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project" → "Upload assets"
4. Upload the contents of the `dist` folder

## 🛠 Development

To run the project locally:

```bash
npm run dev
```

This will start a local server at `http://localhost:8080`.

## 📁 Project Structure

```
secret-agents-demo/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # CSS styling
├── package.json        # NPM configuration
├── wrangler.toml       # Cloudflare Wrangler config
└── README.md          # This file
```

## ✨ Features

- **Mission Generator**: Randomly generates spy missions
- **Agent Profiles**: Showcase of different secret agents
- **Spy Gadgets**: Interactive display of spy equipment
- **Code Breaker**: Decrypt secret messages
- **Self-Destruct Timer**: Countdown timer for added atmosphere

## 🌟 Live Demo

After deployment, your site will be available at:
`https://secret-agents-demo.pages.dev` (or your custom domain)

## 📝 Notes

- This is a static site with no backend dependencies
- All data is stored in JavaScript arrays (client-side only)
- The project uses modern CSS animations and ES6+ JavaScript
- Mobile responsive design included
