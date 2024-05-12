import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/img",
          dest: "src/",
        },
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },

    server: {
        proxy: {
        "/api": {
            target: "http://localhost:8080",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
        },
        },
    },
});
