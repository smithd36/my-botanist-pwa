// Import the required module using ES Module syntax
import nextPWA from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your next.js specific configurations
};

// Initialize withPWA with specific PWA options
const withPWA = nextPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,  // Corrected typo from 'realoadOnOnline' to 'reloadOnOnline'
  swMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: false,
  }
});

// Export the configuration using ES Module syntax
export default withPWA(nextConfig);