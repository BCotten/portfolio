import content from '@/data/content.json';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import clsx from 'clsx';

import code from '@/assets/code.jpg';
import aboutMe from '@/assets/about-me.webp';
import letter from '@/assets/letter.jpg';

type ImageMap = {
  [key: string]: string;
};

const imageMap: ImageMap = {
  'code.jpg': code,
  'about-me.webp': aboutMe,
  'letter.jpg': letter,
};

const Hero = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-4">
      {content.hero.cards.map((card, index) => (
        <div
          key={index}
          className={clsx('relative h-full w-full', {
            'col-start-1 row-start-2': index === 2,
            'col-start-2 row-start-1': index === 0,
            'col-start-2 row-start-2': index === 1,
          })}
        >
          <AspectRatio ratio={1 / 1} className="h-full">
            <img
              src={imageMap[card.img]}
              alt={card.title}
              className="absolute inset-0 h-full w-[full] rounded-md object-cover"
            />
          </AspectRatio>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Button size="sm" variant="secondary" className="md:py-6">
              <a className='font-title text-step-0 md:px-6' href={card.link}>{card.title}</a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
