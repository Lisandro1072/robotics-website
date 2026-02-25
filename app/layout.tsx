// app/page.tsx

// Primero, importa todas las secciones que creaste
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import FeaturedProducts from './components/sections/FeaturedProducts';
import Trust from './components/sections/Trust';
import Location from './components/sections/Location';

// Luego, crea el componente de la página principal
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <FeaturedProducts />
      <Trust />
      <Location />
    </main>
  );
}
