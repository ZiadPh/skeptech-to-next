/** @type {import('next').NextConfig} */

const nextConfig = {
    
        webpack: (config) => {
          config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  publicPath: '/_next/static/assets', // Adjust this path as needed
                  outputPath: 'static/assets/', // Adjust this path as needed
                },
              },
            ],
          });
      
          return config;
        },

  }
   
  module.exports = nextConfig