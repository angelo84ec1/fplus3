/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect www → non-www (canonical domain)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fplusglobal.com" }],
        destination: "https://fplusglobal.com/:path*",
        permanent: true,
      },
      // Redirect /certificado → /certificado-de-franquicias (evitar duplicado)
      {
        source: "/certificado",
        destination: "/certificado-de-franquicias",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
      {
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/webp", "image/avif"],
    domains: [
      "fplusglobal.com",
      "www.fplusglobal.com",
      "desarrollo.fplusglobal.com",
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fplusglobal.com",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "www.fplusglobal.com",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "desarrollo.fplusglobal.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
