
import { Award, BookOpen, Users, GraduationCap } from 'lucide-react';

const About = () => {
  const achievements = [
    { 
      icon: <Users className="w-6 h-6 text-techknot-blue" />,
      title: '4+ Years',
      description: 'Leading workshops and training programs'
    },
    { 
      icon: <Award className="w-6 h-6 text-techknot-purple" />,
      title: 'Industry Experts',
      description: 'Professional trainers with teaching excellence'
    },
    { 
      icon: <BookOpen className="w-6 h-6 text-techknot-blue" />,
      title: 'Real Projects',
      description: 'Electric vehicles, IOT smart home, mobile apps'
    },
    { 
      icon: <GraduationCap className="w-6 h-6 text-techknot-purple" />,
      title: 'IEEE Collaboration',
      description: 'Organizing seminars, workshops, and events'
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient-tech">TechKnots</span></h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            TechKnots is a company which ties the knot between theory and practical syllabus
            in engineering. Our mission is to provide students with real-world engineering expertise
            that will benefit them in their future endeavours.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-gray-700">
              From beginner to advanced levels, we provide real-time, hands-on
              training for students. More than four years of expertise leading workshops and
              project trainings for large universities, as well as working with IEEE to organise
              seminars, workshops, hands-on training, and other events.
            </p>
            <p className="text-gray-700">
              Our achievements include training students to create real time projects on electric vehicles, 
              IOT smart home, easy shopping cart mobile app and many more. We provide industry
              trainers who are also good communicators with students, motivating them to keep
              pushing forward in their careers.
            </p>
            <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-techknot-purple">
              <p className="italic text-gray-700">
                "The outcome of our training is not only certification, but also the amount of skills 
                developed by each student that participates."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
