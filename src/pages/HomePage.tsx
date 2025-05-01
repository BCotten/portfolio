import { useEffect } from 'react';
import Hero from '@/components/my-components/Hero';
import Projects from '@/components/my-components/Projects';
import About from '@/components/my-components/About';
import Contact from '@/components/my-components/Contact';
import content from '@/data/content.json';

const HomePage = () => {
  useEffect(() => {
    const scrollToSection = (hash: string) => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const hash = window.location.hash.replace('#', '');
    if (hash) scrollToSection(hash);

    return () => {
      window.history.replaceState(null, '', ' ');
    };
  }, []);

  return (
    <main id="main" tabIndex={-1} className='max-w-[1200px] mx-auto grid gap-30 md:gap-50 lg:gap-70 outline-none'>
      <section className="text-foreground mx-4 pt-20">
        <h1 className="text-step-3 font-title">{content.hero.name}</h1>
        <h2 className="text-step-2 font-title max-w-44">
          {content.hero.title}
        </h2>
        <Hero />
      </section>
      <section id="projects" className="mx-4">
        <h2 className="text-step-2 font-title">{content.projects.title}</h2>
        <Projects />
      </section>
      <section id="about" className="mx-4">
        <h2 className="text-step-2 font-title">{content.about.title}</h2>
        <About />
      </section>
      <section id="contact" className="mx-4">
        <h2 className="text-step-2 font-title">{content.contact.title}</h2>
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;
