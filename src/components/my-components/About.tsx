import content from '@/data/content.json';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import html5 from '../../assets/html5.svg';
import css3 from '../../assets/css3.svg';
import sass from '../../assets/sass.svg';
import tailwind from '../../assets/tailwind.svg';
import javascript from '../../assets/javascript.svg';
import react from '../../assets/react.svg';
import git from '../../assets/git.svg';
import github from '../../assets/github.svg';

type ImageMap = {
  [key: string]: string;
};

const imageMap: ImageMap = {
  'html5.svg': html5,
  'css3.svg': css3,
  'sass.svg': sass,
  'tailwind.svg': tailwind,
  'javascript.svg': javascript,
  'react.svg': react,
  'git.svg': git,
  'github.svg': github,
};

const About = () => {
  return (
    <>
    {/* BCIT Card */}
      <Card className="mx-auto mt-4 max-w-xl">
        <CardHeader>
          <CardTitle className="font-title text-step-1">
            {content.about.cards[0].title}
          </CardTitle>
          <CardDescription>
            {content.about.cards[0].year ?? 'Year.. seems to be missing'}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-step--1">
          <p>
            {content.about.cards[0].content ?? 'Content... seems to be missing'}
          </p>
        </CardContent>
      </Card>
      {/* SKills & Tools Card */}
      <Card className="mx-auto mt-4 max-w-xl">
        <CardHeader>
          <CardTitle className="font-title text-step-1">
            {content.about.cards[1].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-step--1 grid grid-cols-2 gap-4 md:grid-cols-4">
          {content.about.cards[1].skills?.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 p-2">
              <img
                src={imageMap[skill.icon]}
                alt={skill.name ?? 'Skill'}
                className="h-12 w-12 object-contain md:h-16 md:w-16"
              />
              <p className="font-title text-center ">{skill.name ?? 'SKill'}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      {/* UFV Card */}
      <Card className="mx-auto mt-4 max-w-xl">
        <CardHeader>
          <CardTitle className="font-title text-step-1">
            {content.about.cards[2].title}
          </CardTitle>
          <CardDescription>
            {content.about.cards[2].year ?? 'Year.. seems to be missing'}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-step--1">
          <p>
            {content.about.cards[2].content ?? 'Content... seems to be missing'}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default About;
