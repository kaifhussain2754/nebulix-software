import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enables access from the network
    port: 3000, // You can specify the port you want to use
    strictPort: true, // Prevents Vite from changing the port if the specified port is already in use
    open: false, // Set to true if you want to open the browser automatically
    // Optional: You can also specify additional options like https, etc.
    // https: true, // Uncomment if you want to use https
  },
});
