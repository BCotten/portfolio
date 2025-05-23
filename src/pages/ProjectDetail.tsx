import { useParams } from 'react-router-dom';
import projectsData from '@/data/projects.json';
import content from '@/data/content.json';
import { Project } from '@/types/projects';
import { Button } from '@/components/ui/button';
import Projects from '@/components/my-components/Projects';
import { useState } from 'react';

import linkedin from '@/assets/linkedin.svg';
import github from '@/assets/github.svg';

import blackJack1 from '@/assets/blackJack1.jpg';
import blackJack2 from '@/assets/blackJack2.jpg';
import movie1 from '@/assets/movie1.jpg';
import movie2 from '@/assets/movie2.jpg';
import mri1 from '@/assets/mri1.jpg';
import mri2 from '@/assets/mri2.jpg';

type ImageMap = {
  [key: string]: string;
};

const imageMap: ImageMap = {
  'blackJack1.jpg': blackJack1,
  'blackJack2.jpg': blackJack2,
  'movie1.jpg': movie1,
  'movie2.jpg': movie2,
  'mri1.jpg': mri1,
  'mri2.jpg': mri2,
};

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
    <main
      id="main"
      tabIndex={-1}
      className="mx-auto max-w-[1200px] outline-none"
    >
      <section className="mx-4">
        <h1 className="text-step-3 font-title">{project.title}</h1>
        <h2 className="text-step-0 font-title">{project.tools}</h2>
        <Accordion
          type="single"
          collapsible
          className="mt-8 w-full max-w-[800px] lg:mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-step-1 font-title">
              {project.overview.title}
            </AccordionTrigger>
            <AccordionContent className="text-step--1 max-w-[700px] space-y-1">
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
            <AccordionContent className="text-step--1 max-w-[700px] space-y-1">
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
            <AccordionContent className="text-step--1 max-w-[700px] space-y-1">
              <div className="space-y-6">
                <div>
                  <h4 className="font-title text-step-0 mb-2 font-semibold">
                    {project.reflections.sectionTitle1}
                  </h4>
                  <p>{project.reflections.sectionContent}</p>
                </div>
                <div>
                  <h4 className="font-title text-step-0 mb-2 font-semibold">
                    {project.reflections.sectionTitle2}
                  </h4>
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
        {(project.button1Link?.trim() || project.button2Link?.trim()) && (
          <div className="mx-auto mt-8 flex max-w-[800px] justify-between">
            {project.button1Link?.trim() && (
              <Button variant={'secondary'} className="md:py-6">
                <a
                  href={project.button1Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-title text-step-0 md:px-6"
                >
                  Live Site
                </a>
              </Button>
            )}
            {project.button2Link?.trim() && (
              <Button variant={'outline'} className="md:py-6">
                <a
                  href={project.button2Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-title text-step-0 md:px-6"
                >
                  GitHub
                </a>
              </Button>
            )}
          </div>
        )}
        <div className="mx-auto mt-8 max-w-[800px] md:flex md:justify-between md:gap-4">
          {project.image1 && (
            <img
              src={imageMap[project.image1]}
              alt="Project screenshot 1"
              className="mx-auto mb-4 max-w-[300px] md:mx-0"
            />
          )}
          {project.image2 && (
            <img
              src={imageMap[project.image2]}
              alt="Project screenshot 2"
              className="mx-auto mb-4 max-w-[300px] md:mx-0"
            />
          )}
        </div>
      </section>
      <section id="projects" className="mx-4 pt-18">
        <h2 className="text-step-2 font-title">
          More {content.projects.title}
        </h2>
        <Projects projects={otherProjects} />
      </section>
      <div className="mx-4 mt-18 max-w-[800px] md:mx-auto">
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
            className="font-title text-step-0 md:p-6"
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
      </div>
    </main>
  );
};

export default ProjectDetail;
