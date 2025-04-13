import content from '../../data/content.json';

import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Projects = () => {
  return (
    <Carousel orientation="horizontal" className="mx-auto max-w-[202px] pt-8">
      <CarouselContent>
        {content.projects.cards.map((card, index) => (
          <CarouselItem key={index}>
            <div className="bg-primary flex flex-col gap-4 rounded-md">
              <img src={card.image} alt={card.title} className="rounded-t-md" />
              <h3 className="font-title px-2 text-step-1">{card.title}</h3>
              <p className="px-2 text-step--1">{card.description}</p>
              <Button
                size="sm"
                variant="secondary"
                className="mb-4 self-center p-4"
              >
                <a href={card.link}>More Details</a>
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
