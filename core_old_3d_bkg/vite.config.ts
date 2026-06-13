import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development"].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["@mlc-ai/web-llm"],
  },
  build: {
    // web-llm is ~6MB but lazy-loaded on demand — not part of initial load
    chunkSizeWarningLimit: 6500,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js out of the main bundle
          'vendor-three': ['three'],
          // Split React + ecosystem into its own chunk
          'vendor-react': ['react', 'react-dom'],
        },
      },
    },
  },
}));
