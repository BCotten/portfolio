import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/Logo.svg';

const Navigation = () => {
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
    <>
      <nav className="bg-background relative p-4 md:mx-auto md:max-w-[1200px] md:p-0 md:py-4">
        <a
          href="#main"
          tabIndex={1}
          className="focus:bg-primary focus:text-foreground absolute -m-px h-px w-px overflow-hidden border-0 p-0 break-normal [clip-path:inset(50%)] [clip:rect(1px,1px,1px,1px)] focus:top-[5px] focus:left-[5px] focus:z-[100000] focus:block focus:h-auto focus:w-auto focus:rounded-[3px] focus:p-[15px_23px_14px] focus:text-sm focus:leading-normal focus:font-[1000] focus:no-underline focus:shadow-[0_0_2px_2px_rgba(0,0,0,0.6)] focus:[clip-path:none] focus:[clip:auto]"
        >
          Skip to main content
        </a>
        <div className="flex flex-row px-4">
          <Link
            to="/"
            className="home-link focus:ring-accent-bright flex items-center gap-2 rounded p-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
            aria-label="Home page"
            tabIndex={2}
          >
            <img
              src={logo}
              alt="Website logo"
              className="max-w-32 lg:max-w-48"
            />
          </Link>

          <div className="text-foreground font-base text-step-0 flex flex-col gap-2 px-8 md:w-full md:flex-row md:items-center md:justify-end md:gap-6 md:px-0">
            {['projects', 'about', 'contact'].map((section) => (
              <Link
                key={section}
                to={isHomePage ? `#${section}` : `/#${section}`}
                onClick={(e) => {
                  handleScroll(section);
                  if (isHomePage) e.preventDefault();
                }}
                className="font-title hover:text-accent focus:ring-accent-bright rounded-sm px-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                aria-label={`Go to ${section}`}
                tabIndex={3}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
