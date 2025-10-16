# Portfolio Website

A modern portfolio website built with React and automatically deployed to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 22.x or later
- pnpm (automatically enabled via corepack)

### Setup
```bash
# Enable corepack for pnpm
corepack enable

# Install dependencies
pnpm install
```

### Development
```bash
# Start development server
pnpm start
```
The site will be available at [http://localhost:3000/portfolio-website](http://localhost:3000/portfolio-website)

### Production Build
```bash
# Create production build
pnpm run build
```
The built files will be in the `build` directory.

## 🔄 Automatic Deployment

This repository is configured with GitHub Actions for automatic deployment to GitHub Pages:

1. Every push to the `main` branch triggers the deployment workflow
2. The workflow:
   - Sets up Node.js 22.x
   - Installs dependencies using pnpm
   - Builds the project
   - Deploys to GitHub Pages

The deployed site will be available at: https://lcsvcn.github.io/portfolio-website

### Manual Deployment
You can also trigger the deployment manually:
1. Go to the repository's Actions tab
2. Select "Deploy static content to Pages"
3. Click "Run workflow"

## 📝 Development Notes

- The site is configured to deploy to `https://lcsvcn.github.io/portfolio-website`
- Static assets and resources are automatically served from the correct base path
- The GitHub Actions workflow handles all deployment steps automatically

## 🛠 Tech Stack

- React
- GitHub Actions (CI/CD)
- GitHub Pages (Hosting)
- pnpm (Package Management)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.