import { Link } from 'react-router-dom';
import projectsData from '@/data/projects.json';
import { Project } from '@/types/projects';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import blackJack from '@/assets/blackJack.jpg';
import movie from '@/assets/movie.jpg';
import mri from '@/assets/mri.jpg';

type ImageMap = {
  [key: string]: string;
};

const imageMap: ImageMap = {
  'blackJack.jpg': blackJack,
  'movie.jpg': movie,
  'mri.jpg': mri,
};

interface ProjectsProps {
  projects?: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const projectsToShow = projects || projectsData.projects;

  return (
    <Carousel
      orientation="horizontal"
      className="mx-auto max-w-[202px] pt-8 md:max-w-[400px] lg:mt-20"
    >
      <CarouselContent>
        {projectsToShow.map((project) => (
          <CarouselItem key={project.id}>
            <div className="bg-primary flex flex-col gap-4 rounded-md">
              <img
                src={imageMap[project.image]}
                alt={project.title}
                className="h-48 w-full rounded-t-md object-cover"
              />
              <h3 className="font-title text-step-1 px-2">{project.title}</h3>
              <p className="text-step--1 font-base px-2">
                {project.description}
              </p>
              <Button
                size="sm"
                variant="secondary"
                className="mb-4 self-center md:py-6"
                asChild
              >
                <Link
                  className="font-title text-step-0 md:px-6"
                  to={`/projects/${project.id}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  More Details
                </Link>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Projects;
