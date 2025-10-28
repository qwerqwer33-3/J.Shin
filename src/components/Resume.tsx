import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, GraduationCap, Briefcase, Code, Languages } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "기계공학과 학사",
      school: "한밭대학교",
      period: "2020.03 - 2024.08",
      gpa: "3.65/4.5",
      details: ["기계공학 전공", "배터리 시스템 연구실(BSL) 학부연구생", "창의적개념설계 공모전 은상 수상"]
    }
  ];

  const experience = [
    {
      title: "연구원 (파트타임, 계약직)",
      company: "KAIST 조천식 모빌리티 대학원",
      period: "2024.09 - 현재",
      description: "배터리 시스템 연구실(BSL)에서 가속화된 배터리 열화 모델 개발",
      achievements: ["부반응 속도 조절을 통한 배터리 열화 예측 모델 개발", "멀티스케일 배터리 해석 연구"]
    },
    {
      title: "연구 인턴",
      company: "KAIST 조천식 모빌리티 대학원",
      period: "2024.05 - 2024.08",
      description: "배터리 열화 모델 개발 연구",
      achievements: ["배터리 열화 메커니즘 분석", "시뮬레이션 모델 구축"]
    },
    {
      title: "학부연구생",
      company: "한밭대학교 기계공학과",
      period: "2022.02 - 2024.02",
      description: "리튬이온 배터리 분석 연구",
      achievements: ["배터리 형상에 따른 성능 분석", "기계적-전기화학적 결합 모델링"]
    }
  ];

  const skills = {
    "시뮬레이션 도구": ["COMSOL Multiphysics", "MATLAB"],
    "설계 도구": ["CATIA"],
    "프로그래밍": ["Python"],
    "연구 분야": ["배터리 모델링", "멀티스케일 해석", "전기화학 시뮬레이션"]
  };

  const languages = [
    { name: "한국어", level: "원어민" },
    { name: "영어", level: "중급" }
  ];

  const handleDownloadCV = () => {
    // PDF 다운로드 기능 구현
    const link = document.createElement('a');
    link.href = '/cv-jeu-shin.pdf'; // 실제 PDF 파일 경로
    link.download = 'Jeu_Shin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">이력서</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              학력, 경력, 기술 스택을 한눈에 확인하세요
            </p>
            <Button onClick={handleDownloadCV} className="btn-primary">
              <Download className="h-5 w-5 mr-2" />
              PDF 다운로드
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Education */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    학력
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-6 pb-6 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-1">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mb-3">GPA: {edu.gpa}</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {edu.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Briefcase className="h-6 w-6 text-primary" />
                    경력
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-6 pb-6 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground mb-3">{exp.description}</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Skills */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Code className="h-5 w-5 text-primary" />
                    기술 스택
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h5 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                        {category}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Languages className="h-5 w-5 text-primary" />
                    언어 능력
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;