# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `MohammedAlrozzi/cinema`
4. Select the branch: `copilot/create-children-cinema-website` (or main after merging)
5. Vercel will automatically detect Vite configuration
6. Click "Deploy"
7. Your site will be live in minutes!

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd cinema

# Deploy
vercel

# Follow the prompts to link to your account
# For production deployment:
vercel --prod
```

### Option 3: One-Click Deploy Button

Add this to your README.md:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MohammedAlrozzi/cinema)

## Environment Variables

This project doesn't require any environment variables for basic operation.

## Build Commands

The following commands are used by Vercel (configured in `vercel.json`):

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Custom Domain

After deployment, you can add a custom domain in Vercel dashboard:

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimization

The site is already optimized with:
- Code splitting
- Lazy loading
- CSS minification
- Asset optimization
- Gzip compression

## Monitoring

After deployment, you can monitor your site in Vercel dashboard:
- Analytics
- Real-time logs
- Performance metrics
- Error tracking

## Updating Content

To update character data:

1. Edit `src/data/characters.ts`
2. Commit and push changes
3. Vercel will automatically redeploy

## Troubleshooting

### Build Fails

- Check Node.js version (recommended: 18+)
- Ensure all dependencies are installed
- Run `npm run build` locally to test

### Language Not Switching

- Clear browser cache and localStorage
- Check browser console for errors

### Theme Not Persisting

- Ensure localStorage is enabled in browser
- Check for privacy/incognito mode

## Support

For issues or questions, open an issue on GitHub or contact support.
