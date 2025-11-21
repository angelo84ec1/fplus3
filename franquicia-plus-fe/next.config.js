module.exports = {
  async headers() {
    return [
      {
        // Headers para imágenes locales (tu configuración original)
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
      {
        // Headers para imágenes desde tu dominio principal
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          }
        ],
      },
    ];
  },
  images: {
    // Formatos modernos para mejor SEO y performance
    formats: ['image/webp', 'image/avif'],
    
    // Dominios actualizados (removido S3, añadido tu dominio)
    domains: [
      "fplusglobal.com",
      "www.fplusglobal.com",
      "desarrollo.fplusglobal.com"
    ],
    
    // Configuración adicional para optimización
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 24 horas
    // quality se maneja en el componente Image, no aquí
    
    // Remote patterns (más seguro que domains)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fplusglobal.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https', 
        hostname: 'www.fplusglobal.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'desarrollo.fplusglobal.com',
        port: '',
        pathname: '/media/**',
      }
    ],
  },
};