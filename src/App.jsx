import Hero from './Components/Hero';
import About from './Components/about';
import Stack from './Components/stacks';
import Contact from './Components/contact';
import End from './Components/end';
import Nav from './Components/nav';

function App() {
  return (
    <div className="max-w-[1200px] m-auto overflow-hidden scroll-smooth">
     <div className="lg:block hidden">
       <Nav />
     </div>


      <section id="home">
        <Hero />
      </section>

      <div className="sticky z-10 left-3.5 top-6">
        <h2 className="text-4xl font-bold text-center w-full">About Me</h2>
      </div>

      <section id="about">
        <About />
      </section>

      <section id="stack">
        <Stack />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <End />
    </div>
  );
}

export default App;
