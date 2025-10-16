# Portfolio Website

A modern portfolio website built with React, powered by Bun, and automatically deployed to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- **Node.js 22.x or later** (managed via nvm recommended)
- **[Bun](https://bun.sh/)** 1.2.0 or later

### Installation

#### Step 1: Set up Node.js (using nvm)
```bash
# Install nvm if you haven't already
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Use Node.js version specified in .nvmrc
nvm use

# Or install and use Node.js 22.x
nvm install 22
nvm use 22

# Verify Node.js version
node --version  # Should be v22.20.0 or later
```

> **Note:** This project includes an `.nvmrc` file that automatically specifies Node.js 22.20.0. Simply run `nvm use` to switch to the correct version.

#### Step 2: Install Bun
```bash
# Install Bun (if you haven't already)
curl -fsSL https://bun.sh/install | bash
```

#### Step 3: Install Dependencies
```bash
# Install project dependencies
bun install
```

### Development
```bash
# Start development server
bun start
```
The site will be available at [http://localhost:3000/portfolio-website](http://localhost:3000/portfolio-website)

### Production Build
```bash
# Create production build
bun run build
```
The built files will be in the `build` directory.

## 🔧 Available Scripts

```bash
bun start          # Start development server
bun run build      # Build for production
bun run lint       # Run linter
bun run lint:fix   # Fix linting issues
bun run format     # Check formatting
bun run format:fix # Fix formatting issues
bun run deploy     # Deploy to GitHub Pages
bun test           # Run tests
```

## 🔄 Automatic Deployment

This repository is configured with GitHub Actions for automatic deployment to GitHub Pages:

1. Every push to the `main` branch triggers the deployment workflow
2. The workflow:
   - Sets up Bun
   - Installs dependencies using Bun
   - Builds the project
   - Deploys to GitHub Pages

The deployed site will be available at: https://lcsvcn.github.io/

### Manual Deployment
You can also trigger the deployment manually:
1. Go to the repository's Actions tab
2. Select "Deploy static content to Pages"
3. Click "Run workflow"

Or deploy manually from your local machine:
```bash
bun run deploy
```

## � Analytics

This project uses PostHog for analytics. To set up:

1. Get your PostHog API key from [PostHog](https://app.posthog.com/)
2. Create a `.env.local` file:
   ```bash
   REACT_APP_POSTHOG_KEY=phc_your_api_key_here
   REACT_APP_POSTHOG_HOST=https://us.i.posthog.com
   ```
3. See [POSTHOG_QUICK_START.md](POSTHOG_QUICK_START.md) for complete guide

## 🧹 Code Quality

This project uses:
- **Biome** - Fast linter and formatter
- **Husky** - Git hooks for pre-commit checks

Pre-commit hooks automatically:
- Lint your code
- Format your code
- Fix auto-fixable issues

## �📝 Development Notes

- The site is configured to deploy to `https://lcsvcn.github.io/`
- Static assets and resources are automatically served from the correct base path
- The GitHub Actions workflow handles all deployment steps automatically
- Uses Bun as the package manager and runtime for faster builds

## 🛠 Tech Stack

- **React 19** - UI framework
- **Bun** - Fast JavaScript runtime and package manager
- **Biome** - Linter and formatter
- **PostHog** - Analytics and event tracking
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting
- **Husky** - Git hooks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.