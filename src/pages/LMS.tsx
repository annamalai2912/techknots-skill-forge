
import { useState } from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { BookOpen, Clock, Award, Users, CheckCircle, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LMS = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample courses
  const courses = [
    {
      id: 1,
      title: 'IoT Fundamentals and Development',
      description: 'Learn the basics of IoT architecture, protocols, and device connectivity.',
      level: 'Beginner',
      duration: '15 hours',
      lessons: 12,
      instructor: 'Dr. Ramesh Kumar',
      category: 'IoT',
      credits: 1,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    },
    {
      id: 2,
      title: 'PCB Designing and Fabrication',
      description: 'Master the art of PCB design, layout optimization, and fabrication techniques.',
      level: 'Intermediate',
      duration: '30 hours',
      lessons: 18,
      instructor: 'Priya Singh',
      category: 'Electronics',
      credits: 2,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    },
    {
      id: 3,
      title: 'Drone Technology using Image Processing',
      description: 'Build autonomous drones with advanced image processing capabilities.',
      level: 'Advanced',
      duration: '45 hours',
      lessons: 24,
      instructor: 'Arjun Patel',
      category: 'Robotics',
      credits: 3,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    },
    {
      id: 4,
      title: 'Blynk Mobile App Development',
      description: 'Create powerful IoT mobile applications using the Blynk platform and cloud computing.',
      level: 'Intermediate',
      duration: '30 hours',
      lessons: 15,
      instructor: 'Meera Rao',
      category: 'Programming',
      credits: 2,
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    },
    {
      id: 5,
      title: 'Electric Vehicle and Their Advancements',
      description: 'Explore the world of electric vehicles, from basic principles to cutting-edge technologies.',
      level: 'Beginner',
      duration: '15 hours',
      lessons: 10,
      instructor: 'Vikram Sharma',
      category: 'Automotive',
      credits: 1,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    },
    {
      id: 6,
      title: 'Smart Home with Latest Sensor Modules',
      description: 'Build integrated smart home systems using advanced sensors and control mechanisms.',
      level: 'Intermediate',
      duration: '30 hours',
      lessons: 16,
      instructor: 'Lakshmi Venkat',
      category: 'IoT',
      credits: 2,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
  ];

  const categories = ['All', 'IoT', 'Electronics', 'Robotics', 'Programming', 'Automotive'];
  
  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <>
      <Navbar />
      
      <div className="pt-24 bg-techknot-ivory min-h-screen">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-techknot-purple mb-4">Learning Management Portal</h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Access our comprehensive courses designed to bridge the gap between theory and practical 
                implementation in engineering education.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center">
                <Filter size={20} className="text-techknot-purple mr-2" />
                <h3 className="text-lg font-semibold">Filter Courses:</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={activeCategory === category ? "bg-techknot-blue" : "border-techknot-blue text-techknot-blue"}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredCourses.map((course, index) => (
              <RevealOnScroll key={course.id} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium px-2 py-1 bg-techknot-lightpurple/20 text-techknot-purple rounded-full">
                        {course.category}
                      </span>
                      <span className="flex items-center text-xs text-gray-500">
                        <Award size={14} className="mr-1" /> {course.credits} {course.credits === 1 ? 'Credit' : 'Credits'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock size={14} className="mr-1 text-techknot-blue" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen size={14} className="mr-1 text-techknot-blue" />
                        <span>{course.lessons} Lessons</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users size={14} className="mr-1 text-techknot-blue" />
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={14} className="mr-1 text-techknot-blue" />
                        <span>Certificate</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-700">Instructor: {course.instructor}</span>
                      <Button className="bg-techknot-blue hover:bg-techknot-purple">Enroll Now</Button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No courses found for this category.</p>
            </div>
          )}

          {filteredCourses.length > 0 && (
            <div className="text-center pb-12">
              <Button className="bg-techknot-blue hover:bg-techknot-purple">
                Load More Courses
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default LMS;
