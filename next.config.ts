import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com'], // Adicione aqui todos os domínios necessários
  },
  /* outras opções de configuração, se houver */
}

export default nextConfig
