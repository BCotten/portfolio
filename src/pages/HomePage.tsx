import Hero from '../components/my-components/Hero';
import Projects from '../components/my-components/Projects';
import About from '../components/my-components/About';
import Contact from '../components/my-components/Contact';
import content from '../data/content.json';

const HomePage = () => {
  return (
    <main>
      <section className="text-foreground mx-4 pt-8">
        <h1 className="text-step-3 font-title">{content.hero.name}</h1>
        <h2 className="text-step-2 font-title max-w-44">
          {content.hero.title}
        </h2>
        <Hero />
      </section>
      <section className="mx-4 pt-18">
        <h2 className="text-step-2 font-title">{content.projects.title}</h2>
        <Projects />
      </section>
      <section className="mx-4 pt-18">
        <h2 className="text-step-2 font-title">{content.about.title}</h2>
        <About />
      </section>
      <section className="mx-4 pt-18">
        <h2 className="text-step-2 font-title">{content.contact.title}</h2>
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;
