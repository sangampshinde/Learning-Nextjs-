/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
              source: '/old-path',
              destination: '/new-path',
              permanent: true, // 301 redirect
            },
          ];
    }
}

export default nextConfig;
