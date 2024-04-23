/*
 * @Description:
 * @Date: 2024-04-22 14:15:12
 * @LastEditTime: 2024-04-23 11:07:21
 */
import mime from "mime";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import url from "node:url";
import pc from "picocolors";
import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts", "src/**/*.tsx"],
	format: ["esm"],
	target: "es2018",
	bundle: true,
	outDir: "./build",
	clean: true,
	sourcemap: false,
	dts: {
		//resolve: true,
		compilerOptions: {
			//outDir: "dist",
			target: "ES2018",
			module: "ESNext",
			// sourceMap: false,
			moduleResolution: "node",
			// allowJs: false,
			// strict: true,
			// noUnusedLocals: true,
			resolveJsonModule: true,
			// allowSyntheticDefaultImports: true,
			esModuleInterop: true,
			removeComments: false,
			// composite: true,
			lib: ["ES2018"],
			jsx: "preserve",
		},
	},
	// jsxFactory: "",
	// jsxFragment: "h",
	external: ["@element-plus/pro-utils", "vue"],
	async onSuccess() {
		const server = http.createServer((req, res) => {
			console.log(pc.green(`${req.method} ${req.url}`));
			let filepath = path.join(__dirname, "dist", url.parse(req.url).pathname);
			// 目标路径不存在的情况，如：/favicon.ico
			if (!fs.existsSync(filepath)) {
				res.statusCode = 404;
				res.setHeader("Content-type", "text/plain;charset=utf-8");
				res.end("404 not found");
			}
			const stat = fs.statSync(filepath);
			// 目标路径指向文件夹的情况应指向 index.html
			if (stat.isDirectory()) {
				const index = path.join(filepath, "index.html");
				res.setHeader("Content-type", "text/html;charset=utf-8");
				fs.createReadStream(index).pipe(res);
			} else {
				// 目标路径指向具体文件可使用 mime 模块获取响应类型片段
				const mimeType = mime.getType(filepath);
				res.setHeader("Content-type", `${mimeType};charset=utf-8`);
				fs.createReadStream(filepath).pipe(res);
			}
		});
		server.listen(8080, () => {
			console.log(pc.green(`Service started successfully`));
		});
		return () => {
			server.close();
		};
	},
});
