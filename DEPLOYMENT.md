# Deployment Guide - Firefly Energy Platform

## Prerequisites

- OpenAI API key
- Replit account (for Replit deployment) or Node.js hosting service

## Environment Variables

The following environment variables must be configured:

### Required
- `OPENAI_API_KEY` - Your OpenAI API key for AI Assistant
- `SESSION_SECRET` - Secret key for session management (use a strong random string)

### Optional
- `NODE_ENV` - Set to `production` for production deployments
- `PORT` - Server port (default: 5000)

## Deployment on Replit

### Step 1: Configure Secrets
1. Open your Replit project
2. Go to "Secrets" (lock icon in the sidebar)
3. Add the following secrets:
   - `OPENAI_API_KEY` - Your OpenAI API key
   - `SESSION_SECRET` - Generate a strong random string

### Step 2: Deploy
1. Click the "Deploy" button in Replit
2. Choose "Production" deployment
3. Configure your domain (optional)
4. Click "Deploy"

Your application will be live at `https://<your-repl>.replit.app`

## Deployment on Other Platforms

### Vercel/Netlify/Railway

1. **Connect Repository**: Link your Git repository to the platform

2. **Configure Build Settings**:
   - Build Command: `npm run build` (if applicable)
   - Start Command: `npm start`
   - Install Command: `npm install`

3. **Set Environment Variables**:
   - Add `OPENAI_API_KEY`
   - Add `SESSION_SECRET`
   - Set `NODE_ENV=production`

4. **Deploy**: Platform will automatically build and deploy

### Docker Deployment

Create a `Dockerfile` (if needed):

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t firefly-platform .
docker run -p 5000:5000 \
  -e OPENAI_API_KEY=your_key \
  -e SESSION_SECRET=your_secret \
  firefly-platform
```

## Post-Deployment Checklist

- [ ] Verify all environment variables are set
- [ ] Test AI Assistant functionality
- [ ] Check all navigation links work
- [ ] Verify theme toggle (dark/light mode)
- [ ] Test lead qualification form submission
- [ ] Verify pricing calculator calculations
- [ ] Check product finder recommendations
- [ ] Test ROI comparison displays correctly
- [ ] Verify pipeline and territory map load properly
- [ ] Check resources library is accessible

## Performance Optimization

### Production Best Practices
1. Enable Vite production build optimizations
2. Configure CDN for static assets
3. Enable gzip/brotli compression
4. Set appropriate cache headers
5. Monitor OpenAI API usage and costs

### Monitoring
- Set up error tracking (Sentry, LogRocket, etc.)
- Monitor API response times
- Track OpenAI API quota usage
- Set up uptime monitoring

## Security Considerations

1. **API Keys**: Never expose API keys in client-side code
2. **HTTPS**: Always use HTTPS in production
3. **CORS**: Configure CORS properly for your domain
4. **Rate Limiting**: Implement rate limiting for API endpoints
5. **Session Security**: Use secure session configuration

## Troubleshooting

### Common Issues

**AI Assistant not responding**
- Verify `OPENAI_API_KEY` is set correctly
- Check OpenAI API quota and billing
- Review server logs for API errors

**Application not loading**
- Check all environment variables are set
- Verify build completed successfully
- Check server logs for startup errors

**Charts not displaying**
- Ensure client-side JavaScript is loading
- Check browser console for errors
- Verify Recharts library is installed

## Rollback Procedure

If deployment issues occur:

1. **Replit**: Use the rollback feature in deployment settings
2. **Git-based platforms**: Revert to previous commit and redeploy
3. **Docker**: Roll back to previous image tag

## Support

For deployment support, contact the development team or refer to platform-specific documentation:
- Replit: https://docs.replit.com/
- Vercel: https://vercel.com/docs
- Railway: https://docs.railway.app/
