import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteTsConfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), viteTsConfigPaths(), svgr()],
  server: { host: true },
});
