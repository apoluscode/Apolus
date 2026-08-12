import { Header } from './components/sections/header';
import { Hero } from './components/sections/hero';
import { About } from './components/sections/about';
import { Technologies } from './components/sections/technologies';
import { Services } from './components/sections/services';
import { Portfolio } from './components/sections/portfolio';
import { Process } from './components/sections/process';
import { Contact } from './components/sections/contact';
import { Footer } from './components/sections/footer';

export default function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
