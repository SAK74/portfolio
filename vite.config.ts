import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteTsConfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [react(), viteTsConfigPaths(), svgr(), ViteImageOptimizer()],
  server: { host: true, port: 3000 },
});
