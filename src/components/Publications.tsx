import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';

const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const publications = [
    {
      title: "Multi-scale mechanical-electrochemical coupled modeling of stress generation and its impact on different battery cell geometries",
      authors: ["J. Shin", "Y.K. Lee"],
      venue: "Journal of Power Sources",
      year: "2024",
      type: "journal",
      status: "published",
      abstract: "본 연구에서는 다양한 배터리 셀 형상에서 응력 생성과 그 영향을 분석하는 멀티스케일 기계적-전기화학적 결합 모델을 개발했습니다. (IF: 8.1)",
      keywords: ["Multi-scale modeling", "Battery geometry", "Stress analysis", "Electrochemical coupling"],
      link: "https://doi.org/10.1016/j.jpowsour.2024.234064"
    },
    {
      title: "Development of an accelerated side reaction-electrochemical coupled modeling for lithium-ion batteries via controlled side reaction rates",
      authors: ["J. Shin", "Y. Jang", "D. Kim", "D.W. Kim", "Y.K. Lee"],
      venue: "준비 중",
      year: "2024",
      type: "journal",
      status: "under_review",
      abstract: "제어된 부반응 속도를 통한 리튬이온 배터리의 가속화된 부반응-전기화학적 결합 모델링을 개발했습니다.",
      keywords: ["Accelerated modeling", "Side reactions", "Battery degradation", "Electrochemical coupling"],
      link: "#"
    },
    {
      title: "Multi-scale and multi-physics design optimization for EVs",
      authors: ["D. Lee", "U. Lee", "J. Shin", "Y.K. Lee", "N. Kang"],
      venue: "준비 중",
      year: "2024",
      type: "journal",
      status: "under_review",
      abstract: "전기차를 위한 멀티스케일 및 멀티피직스 설계 최적화 연구입니다.",
      keywords: ["Multi-scale optimization", "Multi-physics", "Electric vehicles", "Design optimization"],
      link: "#"
    }
  ];

  const awards = [
    {
      title: "국립대학육성사업 학생융합연구동아리 우수결과보고서심사 우수상",
      organization: "한밭대학교",
      year: "2024",
      description: "HaIM 동아리 활동 우수 성과 인정"
    },
    {
      title: "12회 창의적개념설계 공모전 은상",
      organization: "한밭대학교",
      year: "2020",
      description: "창의적 설계 아이디어 우수성 인정"
    },
    {
      title: "특허 출원",
      organization: "한국특허청",
      year: "2025",
      description: "배터리 열화 예측 방법 관련 특허 출원"
    }
  ];

  
  const conferences = [
    {
      title: "Development of a Physics-Based Accelerated Degradation Model for Predicting Lithium-Ion Battery Degradation",
      authors: ["J. Shin", "Y.K. Lee"],
      venue: "2025 Spring Academic Conference, The Korean Electrochemical Society",
      year: "2025",
      month: "Apr"
    },
    {
      title: "Development of an Accelerated Simulation Model for Predicting Degradation and Optimizing Performance of Lithium-Ion Batteries",
      authors: ["J. Shin", "Y.K. Lee"],
      venue: "2024 Fall Academic Conference, CAE and Applied Mechanics Division, Korean Society of Mechanical Engineers",
      year: "2024",
      month: "Nov"
    },
    {
      title: "Impact of battery structural geometry on battery performance: A mechanical-electrochemical performance analysis",
      authors: ["J. Shin", "Y.K. Lee"],
      venue: "2024 Spring Academic Conference, Chungcheong Branch, Korean Society of Mechanical Engineers",
      year: "2024",
      month: "Jun"
    },
    {
      title: "Study on the impact of the geometric shape of lithium-ion battery on mechanical and electrochemical performance",
      authors: ["J. Shin", "Y.K. Lee"],
      venue: "2023 Spring Academic Conference, CAE and Applied Mechanics Division, Korean Society of Mechanical Engineers",
      year: "2023",
      month: "May"
    }
  ];

  const categories = [
    { id: 'all', label: '전체' },
    { id: 'journal', label: '저널' },
    { id: 'conference', label: '학회' },
    { id: 'workshop', label: '워크샵' }
  ];

  const filteredPublications = selectedCategory === 'all' 
    ? publications 
    : publications.filter(pub => pub.type === selectedCategory);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-800 border-green-200">게재</Badge>;
      case 'under_review':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">심사 중</Badge>;
      case 'accepted':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">게재 확정</Badge>;
      default:
        return <Badge variant="secondary">준비 중</Badge>;
    }
  };

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">학술 업적</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              연구 논문, 학회 발표, 수상 경력을 소개합니다
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="px-6 py-2"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Publications */}
          <div className="space-y-8 mb-16">
            {filteredPublications.map((pub, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 leading-tight">{pub.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{pub.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{pub.year}</span>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-primary mb-2">{pub.venue}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {getStatusBadge(pub.status)}
                      <Button variant="outline" size="sm" className="w-fit">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        링크
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{pub.abstract}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword, keyIndex) => (
                      <Badge key={keyIndex} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Awards */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">수상 경력</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="card-elegant text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{award.title}</h4>
                    <p className="text-primary font-medium mb-1">{award.organization}</p>
                    <p className="text-sm text-muted-foreground mb-3">{award.year}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Conference Presentations */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">학회 발표</h3>
            <div className="space-y-6">
              {conferences.map((conf, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2 leading-tight">{conf.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{conf.authors.join(', ')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{conf.month} {conf.year}</span>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-primary">{conf.venue}</p>
                      </div>
                    </div>
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

export default Publications;