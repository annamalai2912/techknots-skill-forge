
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    { 
      icon: <Mail className="h-5 w-5" />, 
      title: "Email", 
      value: "info@techknots.com",
      link: "mailto:info@techknots.com"
    },
    { 
      icon: <Phone className="h-5 w-5" />, 
      title: "Phone", 
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    { 
      icon: <MapPin className="h-5 w-5" />, 
      title: "Location", 
      value: "Chennai, Tamil Nadu, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-gradient-tech">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-tech mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Contact us for more information about our programs, workshops, or to discuss collaboration opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-gray-700">
              Reach out to us for any inquiries about our courses, workshops, or to discuss how we can help your institution.
            </p>
            
            <div className="space-y-4 mt-8">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-techknot-blue transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-techknot-blue/10 text-techknot-blue flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{item.title}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="pt-6">
              <h4 className="font-bold mb-2">Connect with us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-techknot-blue text-white flex items-center justify-center hover:bg-techknot-purple transition-colors">
                  F
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-techknot-blue text-white flex items-center justify-center hover:bg-techknot-purple transition-colors">
                  T
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-techknot-blue text-white flex items-center justify-center hover:bg-techknot-purple transition-colors">
                  L
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-techknot-blue text-white flex items-center justify-center hover:bg-techknot-purple transition-colors">
                  I
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full bg-gradient-tech hover:opacity-90 transition-opacity">
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
