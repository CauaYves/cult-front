/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cad-acesso',
        permanent: true,
      },
    ]
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
