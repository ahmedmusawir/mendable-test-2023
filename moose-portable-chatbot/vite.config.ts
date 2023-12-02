import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx', // Adjust this to point to your library's entry file
      name: 'MooseChatbotLib', // This is the global variable name in UMD builds
      fileName: (format) => `moose-chatbot-lib.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
});
