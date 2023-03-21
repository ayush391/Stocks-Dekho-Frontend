import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build' // Changed output folder, like in CRA
  },
  plugins: [
    react()
    // viteTsconfigPaths(),
    // svgrPlugin() // optional
  ]
});
