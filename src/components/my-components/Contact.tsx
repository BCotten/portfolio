import { Button } from '@/components/ui/button';
import { useState } from 'react';
import content from '@/data/content.json';

import linkedin from '@/assets/linkedin.svg';
import github from '@/assets/github.svg';

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(content.contact.email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <>
      <h3 className="text-step-0 font-title mt-4">
        {content.contact.statement}
      </h3>
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
    </>
  );
};

export default Contact;
