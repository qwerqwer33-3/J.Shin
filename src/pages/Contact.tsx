import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Primary Email",
      value: "colorcircle33@gmail.com",
      link: "mailto:colorcircle33@gmail.com"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Personal Email",
      value: "colorcircle33@gmail.com",
      link: "mailto:colorcircle33@gmail.com"
    },
    // {
    //   icon: <Phone className="h-5 w-5" />,
    //   label: "Phone",
    //   value: "+82-10-5513-0665",
    //   link: "tel:+821055130665"
    // },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Suwon, South Korea",
      link: null
    }
  ];

  const socialLinks = [
    // {
    //   icon: <Github className="h-5 w-5" />,
    //   label: "GitHub",
    //   username: "@jeushin",
    //   link: "https://github.com/jeushin",
    //   color: "hover:text-gray-900 dark:hover:text-gray-100"
    // },
    // {
    //   icon: <Linkedin className="h-5 w-5" />,
    //   label: "LinkedIn",
    //   username: "jeu-shin",
    //   link: "https://linkedin.com/in/jeu-shin",
    //   color: "hover:text-blue-600"
    // },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 12.53 14.978 11.5 12 11.5c-2.977 0-5.548 1.03-6.758 2.269zM12 13.5c2.485 0 4.5 2.015 4.5 4.5S14.485 22.5 12 22.5 7.5 20.485 7.5 18s2.015-4.5 4.5-4.5z"/>
        </svg>
      ),
      label: "Google Scholar",
      username: "Jeu Shin",
      link: "https://scholar.google.co.kr/citations?user=PYnRaHYAAAAJ&hl=ko&oi=ao",
      color: "hover:text-blue-500"
    },
    // {
    //   icon: <Twitter className="h-5 w-5" />,
    //   label: "Twitter",
    //   username: "@jeushin_dev",
    //   link: "https://twitter.com/jeushin_dev",
    //   color: "hover:text-blue-400"
    // }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Contact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss research collaboration opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Quick Email Button */}
                <div className="pt-4">
                  <Button 
                    className="w-full btn-primary"
                    onClick={() => window.open('mailto:colorcircle33@gmail.com?subject=Research Collaboration Inquiry', '_blank')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Connect Online</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground mb-6">
                  Follow my research activities and connect with me on various platforms
                </p>
                
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-colors ${social.color}`}>
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(social.link, '_blank')}
                    >
                      Visit
                    </Button>
                  </div>
                ))}

                {/* Additional Info */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    For research collaboration or academic inquiries,<br />please email me.<br />
                    I typically respond within 24 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Collaboration CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Research Collaboration</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always interested in discussing research opportunities in battery technology, 
                <p>
                multi-scale & multi-physics analysis, battery modeling, and related fields. 
                <p>
                Let's explore how we can work together to advance battery science.
                </p>
                </p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-primary"
                  onClick={() => window.open('mailto:colorcircle33@gmail.com?subject=Research Collaboration Proposal', '_blank')}
                >
                  Propose Collaboration
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://scholar.google.co.kr/citations?user=PYnRaHYAAAAJ&hl=ko&oi=ao', '_blank')}
                >
                  View Publications
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;