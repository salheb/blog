import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'www.julionogueira.net',
  title: 'Julio Nogueira',
  subtitle: 'Tech and science',
  lang: 'en-US',
  description: 'Learning experience archive.',
  author: {
    avatar: '/assets/julio.jpg',
    name: 'Julio Nogueira',
    status: '💻',
    bio: 'Software engineering manager and tech enthusiast.'
  },
  themeColor: '#3D4451'
}
