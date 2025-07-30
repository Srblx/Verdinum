import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    // TODO: Pré-bundling des dépendances fréquentes pour accélérer le démarrage
    include: ['react', 'react-dom', 'three'],
    // TODO: Force le pré-bundling même si les dépendances changent
    force: false,
  },
  // TODO: Optimisations du serveur de développement
  server: {
    hmr: {
      overlay: false, 
    },
    fs: {
      strict: false,
    },
  },
  // TODO: Optimisations de build pour le développement
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        // TODO: Optimisation du tree shaking pour éliminer le code inutilisé
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three'],
          icons: ['lucide-react'],
        },
      },
      // TODO: Configuration du tree shaking pour éliminer les exports inutilisés
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
  },
});
