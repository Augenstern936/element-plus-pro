import { defineConfig, loadEnv } from "vite";
import VueMacros from "unplugin-vue-macros/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Inspect from "vite-plugin-inspect";
import mkcert from "vite-plugin-mkcert";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: [path.resolve(__dirname, "..")]
      }
    },
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx()
        }
      }),
      Components({
        dirs: [".vitepress/vitepress/components"],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver()
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      }),
      Icons({
        autoInstall: true
      }),
      Inspect(),
      mkcert()
    ]
  };
});
