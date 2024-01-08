import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';
import { highlight } from '../utils/highlight';

export const mdPlugin = (md) => {
	const docRoot = path.resolve(__dirname, '..', '..');

	md.use(mdContainer, 'demo', {
		validate(params) {
			return !!params.trim().match(/^demo\s*(.*)$/);
		},
		render(tokens, idx) {
			const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
			if (tokens[idx].nesting === 1 /* means the tag is opening */) {
				const description = m && m.length > 1 ? m[1] : '';
				const sourceFileToken = tokens[idx + 2];
				let source = '';
				const sourceFile = sourceFileToken.children?.[0].content ?? '';
				if (sourceFileToken.type === 'inline') {
					source = fs.readFileSync(path.resolve(docRoot, 'examples', `${sourceFile}.vue`), 'utf-8');
					console.log(source, sourceFile, '案例代码');
				}
				if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);

				return `<Demo :demos="demos" path="${sourceFile}" source="${encodeURIComponent(
					source
				)} raw-source="${encodeURIComponent(source)}")}" >`;
			} else {
				return '</Demo>';
			}
		},
	});
};
