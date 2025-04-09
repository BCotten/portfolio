import logo from '../../assets/logo.svg';

const Navigation = () => {
  return (
    <nav className="bg-background p-4">
      <div className="flex flex-row px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className='max-w-32' />
        </a>

        <div className="text-foreground px-8 font-base text-step-0 flex flex-col gap-2">
          <a href="#projects" className="hover:text-accent">
            Projects
          </a>
          <a href="#about" className="hover:text-accent">
            About
          </a>
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
