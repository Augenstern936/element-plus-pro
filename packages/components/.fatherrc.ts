import { defineConfig } from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  umd: {
    name: 'ProComponents',
    output: 'dist',
    externals: {
      vue: 'Vue',
      '^/element-plus/.*': 'element-plus',
    },
  },
});
