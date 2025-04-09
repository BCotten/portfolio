import content from '../../data/content.json';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { AspectRatio } from '../ui/aspect-ratio';

// Import all images and create a mapping object
import code from '../../assets/code.jpg';
import aboutMe from '../../assets/about-me.webp';
import letter from '../../assets/letter.jpg';

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
    <section className="text-foreground mx-4 pt-8">
      <h1 className="text-step-3 font-title">{content.hero.name}</h1>
      <h2 className="text-step-2 font-title max-w-44">{content.hero.title}</h2>
      <div className="grid gap-4 pt-4">
        {content.hero.cards.map((card, index) => (
          <Card key={index}>
            <AspectRatio ratio={4 / 1}>
              <img
                src={imageMap[card.img]}
                alt={card.title}
                className="rounded-md object-cover w-full h-full"
              />
            </AspectRatio>
            <Button size="sm" variant="secondary">
              <a href={card.link}>
                {card.title}
              </a>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Hero;