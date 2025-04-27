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
    <nav className="bg-background p-4 md:mx-auto md:p-0 md:py-4 md:max-w-[1200px]">
      <div className="flex flex-row px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="max-w-32 lg:max-w-48" />
        </Link>

        <div className="text-foreground px-8 font-base text-step-0 flex flex-col gap-2 md:flex-row md:px-0 md:items-center md:gap-6 md:justify-end md:w-full
        ">
          <Link
            to={isHomePage ? '#projects' : '/#projects'}
            onClick={(e) => {
              handleScroll('projects');
              if (isHomePage) e.preventDefault();
            }}
            className="font-title hover:text-accent"
          >
            Projects
          </Link>
          <Link
            to={isHomePage ? '#about' : '/#about'}
            onClick={(e) => {
              handleScroll('about');
              if (isHomePage) e.preventDefault();
            }}
            className="font-title hover:text-accent"
          >
            About
          </Link>
          <Link
            to={isHomePage ? '#contact' : '/#contact'}
            onClick={(e) => {
              handleScroll('contact');
              if (isHomePage) e.preventDefault();
            }}
            className="font-title hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;