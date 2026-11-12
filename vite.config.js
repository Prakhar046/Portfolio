import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["portfolio-oju1.onrender.com"],
  },
  preview: {
    allowedHosts: ["portfolio-oju1.onrender.com"],
  },
});
