
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CourseTopics = () => {
  const [activeTab, setActiveTab] = useState("vac");

  const topics = {
    vac: {
      title: "Value Added Course Topics",
      subtitle: "Applicable for students interested in circuit & hardware with logical software programming",
      departments: "(EEE, ECE, EIE, IOT, CSE, IT, AI/DS, Robotics, Mechanical, Mechatronics)",
      list: [
        "IOT Fundamentals and Development",
        "PCB Designing and fabrication",
        "Drone technology using image processing",
        "Blynk mobile app development with cloud computing",
        "Electric vehicle and their advancements",
        "Smart Home with latest sensor modules",
        "RFID & NFC communication in real time"
      ]
    },
    skill: {
      title: "Additional Skill Development Courses",
      subtitle: "Applicable for all departments",
      departments: "",
      list: [
        "Fault analysis in home appliances",
        "Mobile and Laptop repair from basic to chip level"
      ]
    },
    oneday: {
      title: "One Day Workshop Topics",
      subtitle: "Applicable for all departments",
      departments: "Topics are subject to change based on management or student demands and requirements.",
      list: [
        "Basic Component testing and value identification",
        "Soldering training with circuit debugging",
        "Series and parallel connection with various components and their functions",
        "The ability to install cables, conduits, tubing, and switching devices",
        "Installing electrical devices and safety training",
        "Basics of Blynk Mobile app development",
        "Introduction to cloud computing",
        "Identification and troubleshooting of basic errors in IOT programming",
        "Exploring various tools and gadgets for accurate value measurements"
      ]
    },
    twoday: {
      title: "Two Days Workshop Topics",
      subtitle: "Applicable for all departments",
      departments: "Topics are subject to change based on management or student demands and requirements.",
      list: [
        "Introduction to Arduino and Microcontrollers",
        "Basic IOT sensors and Algorithm testing",
        "LED blinking using more than 1 sensor",
        "PIR Tracker robot with limited components",
        "DIY Smart Home modules",
        "Robotics and automation projects",
        "A mini project using Blynk",
        "Prototype development with Cloud and IOT modules",
        "RFID Integration at low cost"
      ],
      note: "Day 1 includes basic level training on electrical components. Day 2 includes hands-on guidance for mini project implementation."
    }
  };

  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Course <span className="text-gradient-tech">Topics</span></h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Explore our wide range of course topics designed to enhance your technical skills and practical knowledge.
          </p>
        </div>
        
        <Tabs defaultValue="vac" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="vac">Value Added Courses</TabsTrigger>
              <TabsTrigger value="skill">Skill Development</TabsTrigger>
              <TabsTrigger value="oneday">One Day Workshop</TabsTrigger>
              <TabsTrigger value="twoday">Two Days Workshop</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(topics).map((key) => {
            const topic = topics[key as keyof typeof topics];
            return (
              <TabsContent key={key} value={key} className="animate-fade-in">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-bold mb-4 text-techknot-blue">{topic.title}</h3>
                  <p className="text-lg mb-2 font-medium">{topic.subtitle}</p>
                  {topic.departments && (
                    <p className="text-sm text-gray-600 italic mb-6">{topic.departments}</p>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <ul className="space-y-4">
                        {topic.list.slice(0, Math.ceil(topic.list.length / 2)).map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-flex items-center justify-center rounded-full bg-techknot-purple/10 text-techknot-purple h-6 w-6 mr-3 shrink-0">{i + 1}</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-4">
                        {topic.list.slice(Math.ceil(topic.list.length / 2)).map((item, i) => (
                          <li key={i + Math.ceil(topic.list.length / 2)} className="flex items-start">
                            <span className="inline-flex items-center justify-center rounded-full bg-techknot-purple/10 text-techknot-purple h-6 w-6 mr-3 shrink-0">{i + Math.ceil(topic.list.length / 2) + 1}</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {(key === "twoday" && topics[key as keyof typeof topics].note) && (
                    <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-techknot-blue/30">
                      <p className="text-gray-700">{topics[key as keyof typeof topics].note}</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default CourseTopics;
