# Dokploy Deployment Guide - Separated Services

This guide explains how to deploy MySQL, Ghost, and Astro as independent services on Dokploy.

## Architecture

```
Dokploy Project 1: MySQL Database
  └─ docker-compose.mysql.yml

Dokploy Project 2: Ghost CMS
  └─ docker-compose.ghost.yml
  └─ Connects to MySQL via MYSQL_HOST

Dokploy Project 3: Astro Frontend
  └─ docker-compose.astro.yml
  └─ Connects to Ghost via GHOST_URL
```

## Deployment Order

Deploy in this order: **MySQL → Ghost → Astro**

---

## 1. MySQL Service (Dokploy Project 1)

### File
`docker-compose.mysql.yml`

### Environment Variables
Set these in Dokploy dashboard:

```
MYSQL_ROOT_PASSWORD=<strong_root_password>
MYSQL_USER=ghost
MYSQL_PASSWORD=<strong_ghost_password>
MYSQL_DATABASE=ghost
```

### Notes
- MySQL runs on port 3306 (internal only)
- Data persists in `mysql_data` volume
- Health check verifies connectivity
- **Get the internal hostname** from Dokploy (e.g., `mysql-service.dokploy.local` or similar)

---

## 2. Ghost Service (Dokploy Project 2)

### File
`docker-compose.ghost.yml`

### Environment Variables
Set these in Dokploy dashboard:

```
GHOST_URL=https://ghost.your-domain.com
MYSQL_HOST=<mysql_internal_hostname>
MYSQL_PORT=3306
MYSQL_USER=ghost
MYSQL_PASSWORD=<same_as_mysql_password>
MYSQL_DATABASE=ghost
```

### Steps
1. Deploy Ghost
2. Wait for health check to pass
3. Access Ghost admin: `https://ghost.your-domain.com/ghost`
4. Create admin account
5. Go to **Settings → Integrations → Add custom integration**
6. Copy the **Content API Key**
7. Save this key for the Astro deployment

### Notes
- Ghost will automatically create tables in MySQL
- First startup takes 1-2 minutes
- Volume `ghost_content` persists all Ghost data

---

## 3. Astro Service (Dokploy Project 3)

### File
`docker-compose.astro.yml`

### Environment Variables
Set these in Dokploy dashboard:

```
GHOST_URL=https://ghost.your-domain.com
GHOST_CONTENT_API_KEY=<from_ghost_admin_panel>
```

### Steps
1. Get the Content API Key from Ghost (see step 6 above)
2. Deploy Astro with these environment variables
3. Astro will fetch content from Ghost via the public URL

### Notes
- Astro calls Ghost's public API (not internal)
- Build happens in Dokploy (uses Dockerfile in `astro-app/`)
- Runs on port 3000 (mapped from 4321 internally)

---

## Domain Configuration

### DNS/Routing Setup

```
your-domain.com          → Astro (port 3000)
ghost.your-domain.com    → Ghost (port 2368)
mysql                    → Internal only (no external access)
```

In Dokploy, configure:
- **Astro project**: Route `your-domain.com` to port 3000
- **Ghost project**: Route `ghost.your-domain.com` to port 2368
- **MySQL project**: No external route needed

---

## Troubleshooting

### Ghost can't connect to MySQL
- Check `MYSQL_HOST` is correct (ask Dokploy support for internal hostname)
- Verify `MYSQL_PASSWORD` matches MySQL project
- Check MySQL project is running and healthy

### Astro can't fetch Ghost content
- Verify `GHOST_URL` is correct (should be public HTTPS URL)
- Verify `GHOST_CONTENT_API_KEY` is correct
- Check Ghost is running and accessible from the internet

### MySQL data lost after restart
- Ensure `mysql_data` volume is persistent in Dokploy
- Check Dokploy volume settings

---

## Scaling & Updates

**Update MySQL:**
- Update `docker-compose.mysql.yml`, redeploy
- Ghost/Astro automatically reconnect

**Update Ghost:**
- Update `docker-compose.ghost.yml`, redeploy
- Astro continues working (fetches from Ghost API)

**Update Astro:**
- Update `docker-compose.astro.yml`, redeploy
- No impact on Ghost or MySQL

---

## Backup Strategy

1. **MySQL backups**: Use Dokploy's volume backup or `mysqldump`
2. **Ghost content**: Stored in `ghost_content` volume, back it up regularly
3. **Astro code**: Stored in GitHub, no backup needed (rebuild from source)

---

## Security Notes

- MySQL is internal only (not exposed to internet)
- Ghost is public but requires admin password
- Astro uses read-only Ghost API key
- Use strong passwords for MySQL and Ghost admin
- Enable HTTPS for all public URLs
