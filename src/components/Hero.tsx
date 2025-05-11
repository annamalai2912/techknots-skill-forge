
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-techknot-blue/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-techknot-purple/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tying the knot between <span className="text-gradient-tech">theory</span> and <span className="text-gradient-tech">practice</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              TechKnots provides hands-on engineering training from beginner to advanced levels, empowering students with real-world skills and industry expertise.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-tech hover:opacity-90 transition-opacity">
                Explore Programs <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-techknot-blue text-techknot-blue hover:bg-techknot-blue/10">
                Contact Us
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-techknot-blue flex items-center justify-center text-white text-xs">4+</div>
                <div className="w-10 h-10 rounded-full bg-techknot-purple flex items-center justify-center text-white text-xs">U</div>
                <div className="w-10 h-10 rounded-full bg-techknot-lightblue flex items-center justify-center text-white text-xs">I</div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">4+ years of expertise</span> working with universities & IEEE
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-right">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Students in technical training" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-semibold">Real-time, Hands-on Training</p>
                  <p className="text-sm opacity-80">From beginner to advanced levels</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-techknot-purple/20 rounded-full flex items-center justify-center text-techknot-purple">
                  1K+
                </div>
                <div>
                  <p className="text-sm font-medium">Trained Students</p>
                  <p className="text-xs text-gray-600">Across multiple universities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
