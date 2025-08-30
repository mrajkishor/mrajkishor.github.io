import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();


  const handleClickNotes = () => {
    navigate('/notes');
  };

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">Rajkishor Maharana
              </h3>
              <p className="text-muted-foreground">
                Engineering modern, scalable web experiences with a balance of design, performance, and code clarity.
                Let's build something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link}
                  </button>
                ))}
                <button
                  key={4}
                  onClick={handleClickNotes}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  My Notes
                </button>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mrajkishor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/mrajkishor331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:mrajkishor331@gmail.com"
                  className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Rajkishor Maharana. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
              Built using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;