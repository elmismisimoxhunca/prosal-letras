# Quick Start Guide

## 1. Start the Stack

```bash
docker compose up -d
```

Wait 1-2 minutes for MySQL and Ghost to initialize.

## 2. Access Ghost Admin

Open http://localhost:2368/ghost and complete setup:
- Create admin account
- Set site name and description

## 3. Get Content API Key

1. Go to Ghost Admin → Settings → Integrations
2. Click "Add custom integration"
3. Name it "Astro"
4. Copy the **Content API Key**

## 4. Configure API Key

Add the key to `.env` file in project root:
```bash
echo "GHOST_CONTENT_API_KEY=<paste_your_key_here>" >> .env
```

## 5. Restart Astro

```bash
docker compose restart astro
```

## 6. Create Your First Post

1. Go to http://localhost:2368/ghost
2. Click "New post"
3. Add title and content
4. Add tags (these become categories)
5. Click "Publish"

## 7. View Your Blog

- Home: http://localhost:3000
- Posts: http://localhost:3000/blog/post-slug
- Categories: http://localhost:3000/categories/tag-slug

## Useful Commands

```bash
# View logs
docker-compose logs -f astro
docker-compose logs -f ghost
docker-compose logs -f mysql

# Stop services
docker-compose down

# Stop and remove volumes (clean slate)
docker-compose down -v

# Rebuild Astro
docker-compose restart astro

# Access MySQL
docker exec -it ghost_mysql mysql -u ghost -p
# Password: ghostpassword
```

## Troubleshooting

**Posts not showing?**
- Verify Ghost Content API Key is correct
- Restart Astro: `docker-compose restart astro`
- Check browser cache (Ctrl+Shift+Delete)

**Ghost not loading?**
- Wait 2-3 minutes for MySQL to initialize
- Check logs: `docker-compose logs mysql`

**Astro showing errors?**
- Check logs: `docker-compose logs astro`
- Verify GHOST_CONTENT_API_KEY is set
- Verify GHOST_URL is correct

## Next: Production Deployment

See README.md for deployment options to Netlify, Vercel, or self-hosted.
