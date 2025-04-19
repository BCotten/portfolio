import content from '@/data/content.json';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const About = () => {
  return (
    <>
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
      <Card className="mx-auto mt-4 max-w-xl">
        <CardHeader>
          <CardTitle className="font-title text-step-1">
            {content.about.cards[1].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-step--1">
          <p>{content.about.cards[1].skills?.[0]?.name ?? 'SKill'}</p>
          <p>{content.about.cards[1].skills?.[0]?.icon ?? 'Icon'}</p>
        </CardContent>
      </Card>
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
