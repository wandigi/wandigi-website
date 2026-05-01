// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // WAJIB: Mengubah output menjadi 'server' agar bisa menjalankan logic di server
  output: 'server', 
  
  vite: {
    plugins: [tailwindcss()]
  }
});