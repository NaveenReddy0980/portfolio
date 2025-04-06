
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="bg-navy-dark text-slate-light">
      <div className="container max-w-screen-xl opacity-0" ref={sectionRef}>
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p>
              Hello! My name is John and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try 
              editing custom Tumblr themes — turns out hacking together a custom reblog 
              button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at 
              an advertising agency, a start-up, a huge corporation, and a student-led 
              design studio. My main focus these days is building accessible, inclusive 
              products and digital experiences for a variety of clients.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm pt-4">
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                JavaScript (ES6+)
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                React
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                TypeScript
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                Node.js
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                Next.js
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                Tailwind CSS
              </div>
            </div>
          </div>
          
          <div className="relative group mx-auto">
            <div className="relative z-10 rounded-md overflow-hidden w-64 h-64 md:w-80 md:h-80">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Portrait of John Doe" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 border-2 border-teal rounded-md translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
