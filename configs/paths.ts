import { resolve } from 'path';

export const projRoot = resolve(__dirname, '..');

export const pkgsRoot = resolve(projRoot, 'packages');

export const componentsRoot = resolve(pkgsRoot, 'components');
