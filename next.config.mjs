/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  // PostHog via ons eigen domein (EU), zodat adblockers de metingen niet blokkeren
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      { source: '/ingest/static/:path*', destination: 'https://eu-assets.i.posthog.com/static/:path*' },
      { source: '/ingest/:path*', destination: 'https://eu.i.posthog.com/:path*' },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};
export default nextConfig;
