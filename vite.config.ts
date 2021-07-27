import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import styleImport from "vite-plugin-style-import";
import { resolve } from "path"; // 需要引入@types/node

function pathResolve(dir: string) {
    return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        styleImport({
            libs: [
                {
                    libraryName: "element-plus",
                    esModule: true,
                    ensureStyleFile: true,
                    resolveStyle: (name) => {
                        name = name.slice(3);
                        return `element-plus/packages/theme-chalk/src/${name}.scss`;
                    },
                    resolveComponent: (name) => {
                        return `element-plus/lib/${name}`;
                    },
                },
            ],
        }),
    ],
    resolve: {
        alias: [
            {
                find: /@\//,
                replacement: pathResolve("src") + "/",
            },
            {
                find: /#\//,
                replacement: pathResolve("types") + "/",
            },
        ],
    },
});
