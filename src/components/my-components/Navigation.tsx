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
    <nav className="bg-background p-4">
      <div className="flex flex-row px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="max-w-32" />
        </Link>

        <div className="text-foreground px-8 font-base text-step-0 flex flex-col gap-2">
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