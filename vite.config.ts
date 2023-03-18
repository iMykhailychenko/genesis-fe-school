import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@app', replacement: path.resolve(__dirname, 'src') },
            { find: 'hls.js', replacement: 'hls.js/dist/hls.min.js' },
        ],
    },
});
