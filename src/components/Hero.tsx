
import { ArrowRight, GitHub, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-12">
      <div className="container max-w-screen-xl">
        <div className="space-y-4 animate-fade-in">
          <p className="text-teal font-mono">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-light">
            John Doe.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate">
            I build things for the web.
          </h2>
          <p className="text-slate max-w-lg py-4">
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="group bg-transparent border border-teal text-teal hover:bg-teal/10">
              Check out my work 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <div className="flex space-x-4 items-center">
              <a href="#" className="text-slate hover:text-teal transition-colors">
                <GitHub size={20} />
              </a>
              <a href="#" className="text-slate hover:text-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate hover:text-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate hover:text-teal transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-slate text-sm">Scroll Down</span>
        <div className="w-1 h-12 mt-2 relative">
          <span className="absolute w-full bg-teal h-1/3 top-0 left-0 animate-bounce rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
