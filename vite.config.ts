import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { githubPagesSpa } from "@sctg/vite-plugin-github-pages-spa";

export default defineConfig({
  base: "/online-library/",
  plugins: [react(), githubPagesSpa()],
});
