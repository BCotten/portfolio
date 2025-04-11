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
    <Carousel
      opts={{ loop: true, dragFree: false, align: 'center' }}
      className="pt-8"
    >
      <CarouselContent>
        {content.projects.cards.map((card, index) => (
          <CarouselItem
            className="bg-primary flex flex-col gap-4 rounded-md"
            key={index}
          >
            <img src={card.image} alt={card.title} className="rounded-md" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Button size="sm" variant="secondary" className="p-4">
              <a href={card.link}>View Project</a>
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Projects;
