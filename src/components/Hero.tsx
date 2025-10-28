import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            JS
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            안녕하세요, <br />
            <span className="gradient-text">Jeu Shin</span>입니다
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            KAIST 조천식 모빌리티 대학원 연구원으로서 리튬이온 배터리 및 차세대 배터리 기술 연구에 전념하고 있습니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' })}
            >
              연구 보기
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-4 border-2"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              연락하기
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-12 h-12 rounded-full"
              onClick={() => window.open('https://scholar.google.co.kr/citations?user=PYnRaHYAAAAJ&hl=ko&oi=ao', '_blank')}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 12.53 14.978 11.5 12 11.5c-2.977 0-5.548 1.03-6.758 2.269zM12 13.5c2.485 0 4.5 2.015 4.5 4.5S14.485 22.5 12 22.5 7.5 20.485 7.5 18s2.015-4.5 4.5-4.5z"/>
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="animate-bounce w-12 h-12 rounded-full"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;