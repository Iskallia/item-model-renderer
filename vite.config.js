import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
// import { EsLinter, linterPlugin } from 'vite-plugin-linter'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsConfigPaths(),
        // linterPlugin({
        //   include: ['./src}/**/*.{ts,tsx}'],
        //   linters: [new EsLinter({ configEnv })],
        // }),
        dts({
            include: ['lib/**/*'],
            beforeWriteFile: function (filePath, content) { return ({
                filePath: filePath.replace('/lib', ''),
                content: content,
            }); },
        }),
    ],
    build: {
        lib: {
            entry: resolve('lib', 'main.tsx'),
            name: 'ReactFeatureFlag',
            formats: ['cjs', 'es', 'umd', 'iife'],
            fileName: function (format) { return "@iskallia-dev/item-model-renderer.".concat(format, ".js"); },
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'jsxRuntime',
                },
            },
        },
    },
});
