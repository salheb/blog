import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'julionogueira.net',
  title: 'Julio Nogueira',
  subtitle: 'Tech and science',
  lang: 'en-US',
  description: 'Powered by Julio N.',
  author: {
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQGDsSsCgfh8HA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719843737453?e=1730332800&v=beta&t=xeSGlnz2yr44l-98TqoZjP15X3-kVbu79CCLH0IwHqo',
    name: 'Julio Nogueira',
    status: '💻',
    bio: 'Software engineering manager and tech enthusiast.'
  },
  themeColor: '#3D4451'
}
