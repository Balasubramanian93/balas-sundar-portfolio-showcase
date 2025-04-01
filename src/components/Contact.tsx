
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+353 (0) XX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">contact@balasundararajan.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Dublin, Ireland</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-gray-700 mb-6">
                I'm always open to discussing new projects, innovative ideas, 
                or opportunities to be part of your vision.
              </p>
            </div>
          </div>

          <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="How can I help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 btn-primary w-full justify-center disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
