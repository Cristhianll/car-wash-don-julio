import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" permite publicar en Vercel, Netlify o GitHub Pages sin cambios
export default defineConfig({ base: "./", plugins: [react()] });
