import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',  // Automatically updates the PWA when a new version is available
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png', 'pwa-192x192.png', 'pwa-512x512.png'],  // Additional assets to be cached
      manifest: {
        name: 'Burberry Clone',  // Update the app name for PWA
        short_name: 'Burberry',  // Short name for mobile devices
        description: 'A clone of the Burberry website built with React',  // Custom description
        theme_color: '#ffffff',  // The theme color for your PWA
        background_color: '#ffffff',  // Background color for splash screens
        display: 'standalone',  // Ensures the app opens in standalone mode (like a native app)
        start_url: '/',  // Entry point of the app
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/Burberry-Clone/'  // Adjust base URL for deployment on GitHub Pages
});
