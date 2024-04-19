/*
 * @Description:
 * @Date: 2024-04-19 17:42:08
 * @LastEditTime: 2024-04-19 18:02:59
 */
const typescript = require("rollup-plugin-typescript2");
const vuePlugin = require("rollup-plugin-vue");
const vueJsx = require("rollup-plugin-vue-jsx-compat");
const autoprefixer = require("autoprefixer");
const postcss = require("rollup-plugin-postcss");
// 如果依赖模块中存在 es 模块，需要使用 @rollup/plugin-node-resolve 插件进行转换
const nodeResolve = require("@rollup/plugin-node-resolve");
// const copy = require("rollup-plugin-copy")

module.exports = {
	input: "./src/index.ts",
	output: {
		name: "ljp-ui-h5",
		file: "common",
		format: "cjs", // 编译模式
	},
	plugins: [
		nodeResolve(),
		typescript({
			tsconfigOverride: {
				compilerOptions: { declaration: true }, // 是否创建 typescript 声明文件
				exclude: [
					// 排除项
					"node_modules",
					"src/App.vue",
					"src/main.ts",
				],
			},
		}),
		vuePlugin(),
		vueJsx({
			jsxFactory: "vueJsxCompat",
		}),
		postcss({
			plugins: [autoprefixer()],
			extract: "bundle.css",
		}),
	],
	external: ["vue"], // 依赖模块
};
