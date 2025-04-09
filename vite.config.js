import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Gryork_Frontend/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // Expose to all network interfaces
    proxy: {
      // Proxy requests to your ngrok tunnel
      "/api":
        "https://5e59-2409-4050-2d17-7982-9576-fbc4-25aa-6721.ngrok-free.app",
    },
    cors: {
      // Allow access from the ngrok tunnel origin
      host: "0.0.0.0",
      origin:
        "https://5e59-2409-4050-2d17-7982-9576-fbc4-25aa-6721.ngrok-free.app",
    },
    hmr: {
      clientPort: 5173, // If using HTTPS ngrok tunnel, set to 443
    },
  },
});
