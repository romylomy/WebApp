/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add the alias for both client and server
      config.resolve.alias['@'] = __dirname;
  
      // Add another alias if needed
      // config.resolve.alias['@components'] = path.join(__dirname, 'components');
  
      // Additional webpack configurations can be added here
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  