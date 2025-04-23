import { Link } from 'react-router-dom';
import projectsData from '@/data/projects.json';
import { Project } from '@/types/projects';
import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';


interface ProjectsProps {
  projects?: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const projectsToShow = projects || projectsData.projects;

  return (
    <Carousel orientation="horizontal" className="mx-auto max-w-[202px] pt-8">
      <CarouselContent>
        {projectsToShow.map((project) => (
          <CarouselItem key={project.id}>
            <div className="bg-primary flex flex-col gap-4 rounded-md">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full rounded-t-md object-cover"
              />
              <h3 className="font-title text-step-1 px-2">{project.title}</h3>
              <p className="text-step--1 px-2">{project.description}</p>
              <Button
                size="sm"
                variant="secondary"
                className="mb-4 self-center p-4"
                asChild
              >
                <Link to={`/projects/${project.id}`}>More Details</Link>
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
