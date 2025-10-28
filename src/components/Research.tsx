import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Database, Globe, Cpu } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "리튬이온 배터리 & 차세대 배터리",
      description: "전고체 배터리, 리튬 메탈 배터리, K-이온 배터리 등 차세대 배터리 기술 연구",
      tags: ["Li-Ion Battery", "All-solid-state Battery", "Li-metal Battery", "K-Ion Battery"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "멀티스케일 접근법 & 멀티피직스 해석",
      description: "다양한 스케일에서의 배터리 거동 분석 및 복합 물리 현상 해석",
      tags: ["Multi-Scale Analysis", "Multi-Physics", "COMSOL Multiphysics", "Simulation"],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "배터리 열화 & 안전성",
      description: "배터리 열화 메커니즘 분석 및 안전성 향상을 위한 연구",
      tags: ["Battery Degradation", "Battery Safety", "Accelerated Model", "Prediction"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "배터리 최적화",
      description: "배터리 성능 최적화 및 시스템 설계 개선 연구",
      tags: ["Battery Optimization", "Performance Analysis", "System Design", "MATLAB"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    }
  ];

  const currentProjects = [
    {
      title: "가속화된 배터리 열화 모델 개발",
      status: "진행 중",
      description: "부반응 속도 조절을 통한 리튬이온 배터리의 가속화된 열화 예측 방법 연구"
    },
    {
      title: "배터리 형상에 따른 성능 분석",
      status: "완료",
      description: "다양한 배터리 셀 형상이 기계적-전기화학적 성능에 미치는 영향 분석"
    },
    {
      title: "멀티스케일 배터리 최적화",
      status: "계획 중",
      description: "공유 자율 전기차 시스템을 위한 멀티스케일 및 멀티피직스 설계 최적화"
    }
  ];

  return (
    <section id="research" className="py-20">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">연구 관심사</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              제가 집중하고 있는 연구 분야와 현재 진행 중인 프로젝트들입니다
            </p>
          </div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {researchAreas.map((area, index) => (
              <Card key={index} className="card-elegant hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {area.icon}
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Projects */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">현재 연구</h3>
            <div className="grid gap-6">
              {currentProjects.map((project, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold mb-2 md:mb-0">{project.title}</h4>
                      <Badge 
                        variant={project.status === '진행 중' ? 'default' : project.status === '완료' ? 'secondary' : 'outline'}
                        className="w-fit"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;