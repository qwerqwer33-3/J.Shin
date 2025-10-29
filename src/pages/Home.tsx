import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';
import profile from "/public/images/profile.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container-max section-padding">
          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* 텍스트 영역 (좌측) */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Hello, I'm <br />
                <span className="gradient-text">Jeu Shin</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Researcher at Cho Chun Shik Graduate School of Mobility, KAIST
              </p>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl md:max-w-none">
                I hold a Bachelor's degree in Mechanical Engineering. During my undergraduate studies, I focused on analyzing
                the mechanical-electrochemical performance differences based on battery geometry, systematically investigating
                how various design parameters affect battery performance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center mb-8">
                <Link to="/research">
                  <Button className="btn-primary text-lg px-8 py-4">
                    View Research
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="text-lg px-8 py-4 border-2">
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex md:justify-start justify-center space-x-6">
                {/* Email */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 rounded-full"
                  aria-label="Email"
                  onClick={() => (window.location.href = 'mailto:colorcircle33@gmail.com')}
                >
                  <Mail className="h-5 w-5" />
                </Button>

                {/* Google Scholar */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 rounded-full"
                  aria-label="Google Scholar"
                  onClick={() =>
                    window.open(
                      'https://scholar.google.co.kr/citations?user=PYnRaHYAAAAJ&hl=ko&oi=ao',
                      '_blank',
                      'noopener,noreferrer'
                    )
                  }
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 12.53 14.978 11.5 12 11.5c-2.977 0-5.548 1.03-6.758 2.269zM12 13.5c2.485 0 4.5 2.015 4.5 4.5S14.485 22.5 12 22.5 7.5 20.485 7.5 18s2.015-4.5 4.5-4.5z"/>
                  </svg>
                </Button>
              </div>
            </div>

            {/* 사진 영역 (우측) */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Current Research Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Current Research</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Currently, as a researcher at the Battery System Laboratory (BSL), I am involved in research on 
              optimization considering battery degradation phenomena and the development of an accelerated 
              simulation model for faster degradation prediction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-elegant hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Li-Ion & Next-gen Batteries</h3>
                <p className="text-muted-foreground">
                  All-solid-state Battery, Li-metal Battery, K-Ion Battery research
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Multi-Scale Analysis</h3>
                <p className="text-muted-foreground">
                  Multi-Scale Approaches & Multi-Physics Analysis
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Battery Degradation</h3>
                <p className="text-muted-foreground">
                  Degradation mechanisms and predictive modeling
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Battery Safety</h3>
                <p className="text-muted-foreground">
                  Safety improvement and reliability research
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Battery Optimization</h3>
                <p className="text-muted-foreground">
                  Performance optimization and system design
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/research">
              <Button className="btn-primary">
                Learn More About My Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">Explore My Work</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/publications" className="group">
                <Card className="card-elegant h-full hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <ExternalLink className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Publications</h3>
                    <p className="text-sm text-muted-foreground">Journal papers, conference presentations, and patents</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/awards" className="group">
                <Card className="card-elegant h-full hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                      <svg className="h-6 w-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Awards</h3>
                    <p className="text-sm text-muted-foreground">Recognition and honors</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/resume" className="group">
                <Card className="card-elegant h-full hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                      <svg className="h-6 w-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Resume</h3>
                    <p className="text-sm text-muted-foreground">Education and experience</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;