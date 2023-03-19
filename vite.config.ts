import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: process.env.NODE_ENV === 'production' ? '/genesis-fe-school/' : '/',
    resolve: {
        alias: [
            { find: '@app', replacement: path.resolve(__dirname, 'src') },
            { find: 'hls.js', replacement: 'hls.js/dist/hls.min.js' },
        ],
    },
});
