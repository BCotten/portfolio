import { useParams } from 'react-router-dom';
import projectsData from '@/data/projects.json';
import content from '@/data/content.json';
import { Project } from '@/types/projects';
import { Button } from '@/components/ui/button';
import Projects from '@/components/my-components/Projects';
import { useState } from 'react';

import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ProjectDetail = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { id } = useParams<{ id: string }>();
  const project = projectsData.projects.find((p: Project) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(content.contact.email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const otherProjects = projectsData.projects.filter(
    (p: Project) => p.id !== id
  );

  return (
    <main>
      <section className="mx-4">
        <h1 className="text-step-3 font-title">{project.title}</h1>
        <p className="text-step-0 font-title">{project.tools}</p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-step-1 font-title">
              {project.overview.title}
            </AccordionTrigger>
            <AccordionContent>
              <p>{project.overview.duration}</p>
              <p>{project.overview.collaboration}</p>
              <p>{project.overview.rolesTitle}</p>
              <ul className="list-disc space-y-2 pl-6">
                {project.overview.overviewPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-step-1 font-title">
              {project.requirements.title}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-2 pl-6">
                {project.requirements.requirementsPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-step-1 font-title">
              {project.reflections.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {project.reflections.sectionTitle1}
                  </h3>
                  <p>{project.reflections.sectionContent}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {project.reflections.sectionTitle2}
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    {project.reflections.sectionContent2.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div>
          <Button variant={'secondary'}>
            <a
              href={project.button1Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </Button>
          <Button variant={'outline'}>
            <a
              href={project.button2Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
        <div>
          <img src={project.image1} alt="Project screenshot 1" />
          <video></video>
          <img src={project.image2} alt="Project screenshot 2" />
        </div>
      </section>
      <section id="projects" className="mx-4 pt-18">
        <h2 className="text-step-2 font-title">
          More {content.projects.title}
        </h2>
        <Projects projects={otherProjects} />
      </section>
      <footer>
        <div className="mt-4 mb-8 flex items-center justify-between">
          <a
            href={content.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt={content.contact.linkedin}
              className="w-12 md:w-16"
            />
          </a>
          <Button
            variant={isCopied ? 'default' : 'secondary'}
            onClick={handleCopyEmail}
          >
            {isCopied ? 'Copied!' : 'Copy Email'}
          </Button>
          <a
            href={content.contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt={content.contact.github}
              className="w-12 md:w-16"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default ProjectDetail;
