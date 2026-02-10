# Astro + Ghost CMS Starter Kit

A dockerized proof of concept combining **Astro** (frontend) with **Ghost** (content management) for a modern, performant blog platform. Perfect for NGOs and organizations that need non-technical content editors.

## Architecture

- **Ghost**: Headless CMS for content creation and management (admin layer)
- **Astro**: Static site generator that fetches content from Ghost's Content API
- **MySQL**: Database for Ghost
- **Docker Compose**: Orchestrates all services

## Features

- 📝 **Ghost Admin UI**: Intuitive interface for creating and managing posts
- 🚀 **Pre-built Static Pages**: Instant loading with Astro's static generation
- 🏷️ **Categories/Tags**: Automatic category pages from Ghost tags
- 🔄 **Scheduled Builds**: Daily automated rebuilds at 3 AM to publish scheduled posts
- 🐳 **Fully Dockerized**: One command to spin up the entire stack
- 📱 **Responsive Design**: Modern, mobile-friendly UI

## Quick Start

### Prerequisites

- Docker and Docker Compose installed
- Git

### Setup

1. **Clone and navigate to the project:**
   ```bash
   cd prosal-letras
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

3. **Start the services:**
   ```bash
   docker-compose up -d
   ```

4. **Wait for services to be ready** (2-3 minutes):
   - Ghost: http://localhost:2368
   - Astro: http://localhost:3000

### Initial Ghost Setup

1. Open http://localhost:2368 in your browser
2. Complete the Ghost setup wizard:
   - Create admin account
   - Set site title and description
3. Create your first post in Ghost admin

### Get Ghost Content API Key

1. Go to Ghost Admin → Settings → Integrations
2. Click "Add custom integration"
3. Name it "Astro"
4. Copy the **Content API Key**
5. Update `.env` file:
   ```
   GHOST_CONTENT_API_KEY=your_key_here
   ```
6. Restart Astro container:
   ```bash
   docker-compose restart astro
   ```

## Usage

### Creating Posts in Ghost

1. Go to http://localhost:2368/ghost
2. Click "New post"
3. Write your content
4. Add tags (these become categories in Astro)
5. Publish or schedule for later

### Viewing Your Blog

- **Home**: http://localhost:3000
- **Blog Post**: http://localhost:3000/blog/post-slug
- **Category**: http://localhost:3000/categories/tag-slug

## Scheduled Builds

The GitHub Actions workflow (`.github/workflows/scheduled-build.yml`) automatically rebuilds your site daily at **3 AM UTC** (6 AM Chile time).

This ensures:
- Scheduled posts go live automatically
- Latest content is always available
- Static pages remain fast and cached

### To enable scheduled builds:

1. Push this repository to GitHub
2. Add secrets in GitHub repository settings:
   - `GHOST_URL`: Your Ghost instance URL
   - `GHOST_CONTENT_API_KEY`: Your Ghost Content API key
3. Configure deployment step in the workflow file

## Project Structure

```
prosal-letras/
├── docker-compose.yml          # Docker services configuration
├── .env.example                # Environment variables template
├── .github/
│   └── workflows/
│       └── scheduled-build.yml  # Daily build automation
└── astro-app/
    ├── src/
    │   ├── pages/              # Astro pages
    │   │   ├── index.astro      # Home page
    │   │   ├── blog/[slug].astro # Individual post pages
    │   │   └── categories/[slug].astro # Category pages
    │   ├── components/          # Reusable components
    │   │   └── PostCard.astro   # Post card component
    │   ├── layouts/
    │   │   └── Layout.astro     # Main layout with header/footer
    │   └── lib/
    │       └── ghost.ts         # Ghost API integration
    ├── astro.config.mjs         # Astro configuration
    ├── package.json             # Dependencies
    └── Dockerfile               # Astro container image
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `GHOST_URL` | Ghost instance URL | `http://localhost:2368` |
| `GHOST_CONTENT_API_KEY` | Ghost Content API key | (required) |
| `MYSQL_ROOT_PASSWORD` | MySQL root password | `rootpassword` |
| `MYSQL_DATABASE` | MySQL database name | `ghost` |
| `MYSQL_USER` | MySQL user | `ghost` |
| `MYSQL_PASSWORD` | MySQL user password | `ghostpassword` |

## Development

### Astro Development Server

The Astro container runs in development mode with hot reload:

```bash
docker-compose logs -f astro
```

### Ghost Admin

Access Ghost admin at: http://localhost:2368/ghost

### MySQL Database

Connect to MySQL:
```bash
docker exec -it ghost_mysql mysql -u ghost -p
# Password: ghostpassword
```

## Deployment

### Option 1: Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `cd astro-app && npm run build`
4. Set publish directory: `astro-app/dist`
5. Add environment variables in Netlify settings

### Option 2: Vercel

1. Push to GitHub
2. Import project to Vercel
3. Set root directory: `astro-app`
4. Add environment variables
5. Deploy

### Option 3: Self-hosted

1. Build the Astro site: `docker-compose exec astro npm run build`
2. Deploy the `astro-app/dist` folder to your server
3. Keep Ghost running on your VPS

## Customization

### Styling

Edit `src/layouts/Layout.astro` and component files to customize the design.

### Ghost API Integration

Modify `src/lib/ghost.ts` to add more Ghost API features:
- Authors
- Custom fields
- Comments
- Members

### Adding Pages

Create new `.astro` files in `src/pages/` following Astro conventions.

## Troubleshooting

### Ghost not starting

```bash
docker-compose logs ghost
```

Check MySQL is running:
```bash
docker-compose logs mysql
```

### Astro not fetching posts

1. Verify `GHOST_CONTENT_API_KEY` is set correctly
2. Check Ghost is accessible: `curl http://localhost:2368`
3. Verify API key in Ghost admin

### Posts not appearing

1. Make sure posts are published (not draft)
2. Rebuild Astro: `docker-compose restart astro`
3. Check browser cache (Ctrl+Shift+Delete)

## Next Steps

This is a proof of concept. To develop into production:

1. **Customize design** to match your NGO branding
2. **Add more content types** (pages, testimonials, etc.)
3. **Set up proper hosting** (Netlify, Vercel, or self-hosted)
4. **Configure domain** and SSL certificate
5. **Set up email** for Ghost notifications
6. **Add analytics** (Google Analytics, Plausible, etc.)
7. **Implement search** functionality
8. **Add comments** system if needed

## Support

- [Astro Documentation](https://docs.astro.build)
- [Ghost Documentation](https://ghost.org/docs)
- [Docker Documentation](https://docs.docker.com)

## License

MIT - Feel free to use this starter kit for your projects.
