import content from '@/data/content.json';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScroll = (hash: string) => {
    if (isHomePage) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-4 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-2">
      {content.hero.cards.map((card, index) => (
        <div
          key={index}
          className={clsx('relative h-full w-full justify-self-center', {
            // Mobile layout (2x2)
            'col-start-1 row-start-2': index === 2,
            'col-start-2 row-start-1': index === 0,
            'col-start-2 row-start-2': index === 1,

            // Medium screens (3x2)
            'md:col-start-3 md:row-start-1': index === 0, // Rightmost top
            'md:col-start-2 md:row-start-2': index === 2, // Left bottom 1
            'md:col-start-3 md:row-start-2': index === 1, // Left bottom 2

            // Large screens (5x2)
            'lg:col-start-5 lg:row-start-1': index === 0, // Far right top
            'lg:col-start-4 lg:row-start-2': index === 2, // Far left bottom
            'lg:col-start-5 lg:row-start-2': index === 1, // Second left bottom
          })}
        >
          <AspectRatio ratio={1 / 1} className="h-full max-w-[300px]">
            <img
              src={imageMap[card.img]}
              alt={card.title}
              className="absolute inset-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2">
              <Button
                size="sm"
                variant="secondary"
                className="w-fit px-4"
              >
                <Link
                  to={isHomePage ? `#${card.link}` : `/${card.link}`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault();
                      handleScroll(card.link);
                      window.history.replaceState(null, '', `#${card.link}`);
                    }
                  }}
                  className="font-title text-step-0"
                >
                  {card.title}
                </Link>
              </Button>
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  );
};

export default Hero;
