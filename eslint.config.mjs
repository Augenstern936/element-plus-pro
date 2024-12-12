export default [
  {
    // Note: there should be no other properties in this object
    ignores: [
      "node_modules",
      "pnpm-lock.yaml",
      "dist",
      "play",
      "docs/components.d.ts",
      "docs/.vitepress/cache/*",
      "**/*.d.ts",
      "!.*"
    ]
  }
];
