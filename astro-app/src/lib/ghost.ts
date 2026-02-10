interface GhostPost {
  id: string;
  title: string;
  slug: string;
  html: string;
  excerpt: string;
  feature_image: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  authors: Array<{ name: string; slug: string }>;
  tags: Array<{ name: string; slug: string }>;
}

interface GhostTag {
  id: string;
  name: string;
  slug: string;
  description: string;
  feature_image: string;
  post_count: number;
}

export async function getPosts(): Promise<GhostPost[]> {
  const GHOST_URL = process.env.GHOST_URL || 'http://localhost:2368';
  const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY || '';
  
  if (!GHOST_CONTENT_API_KEY) {
    console.warn('GHOST_CONTENT_API_KEY not set');
    return [];
  }

  try {
    const response = await fetch(
      `${GHOST_URL}/ghost/api/v3/content/posts/?key=${GHOST_CONTENT_API_KEY}&include=authors,tags&limit=100`,
      { method: 'GET' }
    );

    if (!response.ok) {
      throw new Error(`Ghost API error: ${response.status}`);
    }

    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error('Error fetching posts from Ghost:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<GhostPost | null> {
  const GHOST_URL = process.env.GHOST_URL || 'http://localhost:2368';
  const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY || '';
  
  if (!GHOST_CONTENT_API_KEY) {
    console.warn('GHOST_CONTENT_API_KEY not set');
    return null;
  }

  try {
    const response = await fetch(
      `${GHOST_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${GHOST_CONTENT_API_KEY}&include=authors,tags`,
      { method: 'GET' }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.posts?.[0] || null;
  } catch (error) {
    console.error(`Error fetching post ${slug} from Ghost:`, error);
    return null;
  }
}

export async function getTags(): Promise<GhostTag[]> {
  const GHOST_URL = process.env.GHOST_URL || 'http://localhost:2368';
  const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY || '';
  
  if (!GHOST_CONTENT_API_KEY) {
    console.warn('GHOST_CONTENT_API_KEY not set');
    return [];
  }

  try {
    const response = await fetch(
      `${GHOST_URL}/ghost/api/v3/content/tags/?key=${GHOST_CONTENT_API_KEY}&limit=100`,
      { method: 'GET' }
    );

    if (!response.ok) {
      throw new Error(`Ghost API error: ${response.status}`);
    }

    const data = await response.json();
    return data.tags || [];
  } catch (error) {
    console.error('Error fetching tags from Ghost:', error);
    return [];
  }
}

export async function getPostsByTag(tagSlug: string): Promise<GhostPost[]> {
  const GHOST_URL = process.env.GHOST_URL || 'http://localhost:2368';
  const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY || '';
  
  if (!GHOST_CONTENT_API_KEY) {
    console.warn('GHOST_CONTENT_API_KEY not set');
    return [];
  }

  try {
    const response = await fetch(
      `${GHOST_URL}/ghost/api/v3/content/posts/?key=${GHOST_CONTENT_API_KEY}&filter=tag:${tagSlug}&include=authors,tags&limit=100`,
      { method: 'GET' }
    );

    if (!response.ok) {
      throw new Error(`Ghost API error: ${response.status}`);
    }

    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error(`Error fetching posts for tag ${tagSlug}:`, error);
    return [];
  }
}
