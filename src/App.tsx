import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { VideoGallery } from './components/sections/VideoGallery';
import { LinksGrid } from './components/sections/LinksGrid';

// Para reordenar, agregar o quitar secciones de la landing,
// solo edita este arreglo/orden. Cada sección es independiente
// y consume su propio archivo en src/content/.
function App() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceTimeline />
      <VideoGallery />
      <LinksGrid />
      <footer className="text-center py-8 text-sm text-brand-400">
        © {new Date().getFullYear()} — Sitio construido con React + Vite + Tailwind
      </footer>
    </main>
  );
}

export default App;
