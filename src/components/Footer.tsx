
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-8 text-slate border-t border-slate/20">
      <div className="container text-center">
        <p className="flex items-center justify-center gap-1">
          <span>Designed & Built with</span>
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
        </p>
        <p className="mt-2 text-sm">© {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
        
        <div className="mt-6 text-xs font-mono">
          <a 
            href="#home" 
            className="inline-block py-2 px-3 hover:text-teal transition-colors"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
