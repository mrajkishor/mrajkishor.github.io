import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiPhone } from 'react-icons/fi';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';



const Contact = () => {
  const { toast } = useToast();


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: "Email",
      value: "mrajkishor331@gmail.com",
      link: "mailto:mrajkishor331@gmail.com"
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7683922389",
      link: "tel:+919876543210"
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/mrajkishor",
      link: "https://github.com/mrajkishor"
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mrajkishor331",
      link: "https://linkedin.com/in/mrajkishor331"
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: "Location",
      value: "Hyderabad, IN",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let’s connect and build something impactful. Whether it's frontend system design, product UI modernization, or a performance challenge — I’d love to contribute.

            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello,
                  I'm always excited to connect with fellow developers and potential clients.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/mrajkishor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mrajkishor331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary transition-smooth resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gradient-primary hover:shadow-primary transition-smooth"
                    size="lg"
                  >
                    <FiSend className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;