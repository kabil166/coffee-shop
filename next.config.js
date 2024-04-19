/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["images.unsplash.com",'http://localhost:3000/api']
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api' // development api
        : 'http://localhost:3000/api' // production api
},
//  async redirects() {
//   return [
//     {
//       source: '/login',
//       destination: '/',
//       permanent: true,
//     },
//   ]
// },
}

module.exports = nextConfig
