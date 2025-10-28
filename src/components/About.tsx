import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "학업 배경",
      description: "한밭대학교 기계공학과 학사 졸업 (GPA: 3.65/4.5), 현재 KAIST 연구원으로 활동 중입니다."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "연구 목표",
      description: "배터리 시스템의 안전성, 신뢰성, 성능 향상을 통해 배터리 기술의 효율성을 발전시키고자 합니다."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "전문 분야",
      description: "리튬이온 배터리 및 차세대 배터리, 멀티스케일 해석, 배터리 열화 및 최적화 연구에 집중하고 있습니다."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">소개</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              저에 대해 더 자세히 알아보세요
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">안녕하세요!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                저는 한밭대학교 기계공학과를 졸업하고 현재 KAIST 조천식 모빌리티 대학원에서 
                연구원으로 활동하고 있습니다. 배터리 시스템 연구실(BSL)에서 리튬이온 배터리의 
                기계적-전기화학적 성능 분석과 배터리 열화 현상을 고려한 최적화 연구를 수행하고 있습니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                학부 과정에서는 배터리 형상에 따른 기계적-전기화학적 성능 차이를 분석하며 
                다양한 설계 매개변수가 배터리 성능에 미치는 영향을 체계적으로 연구했습니다. 
                현재는 더 빠른 열화 예측을 위한 가속 시뮬레이션 모델 개발에 집중하고 있습니다.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/50">JS</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="card-elegant p-6 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;