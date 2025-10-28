import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, FileText } from 'lucide-react';

const Patents = () => {
  const patents = [
    {
      title: "Accelerated Lithium-Ion Battery Degradation Prediction Method Through Control of Side Reaction Rate, Prediction System Utilizing Said Method, and Computer-Readable Recording Medium",
      titleKorean: "부반응의 반응속도 조절을 통해 가속화된 리튬이온 배터리의 열화 예측 방법 및 이를 이용한 예측 시스템 및 컴퓨터 판독 가능 기록매체",
      inventors: ["J. Shin", "Y.K. Lee"],
      applicationNumber: "10-2025-0076896",
      applicationDate: "2025-06-12",
      status: "Filed",
      type: "Domestic Patent Application",
      abstract: "This patent describes a novel method for predicting lithium-ion battery degradation through controlled side reaction rates, enabling accelerated testing and more accurate lifetime predictions.",
      technicalField: "Battery Technology, Degradation Modeling, Electrochemical Systems"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Filed':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Filed</Badge>;
      case 'Published':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Published</Badge>;
      case 'Granted':
        return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Granted</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Patents</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Intellectual property and innovative solutions in battery technology
            </p>
          </div>

          {/* Patents List */}
          <div className="space-y-8 mb-16">
            {patents.map((patent, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <Badge variant="outline">{patent.type}</Badge>
                        {getStatusBadge(patent.status)}
                      </div>
                      <CardTitle className="text-xl mb-3 leading-tight">{patent.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-4 italic">{patent.titleKorean}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span><strong>Inventors:</strong> {patent.inventors.join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span><strong>Filed:</strong> {patent.applicationDate}</span>
                        </div>
                        <div className="md:col-span-2">
                          <span><strong>Application No:</strong> {patent.applicationNumber}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Abstract</h4>
                      <p className="text-muted-foreground leading-relaxed">{patent.abstract}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technical Field</h4>
                      <p className="text-muted-foreground">{patent.technicalField}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Patent Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <p className="text-muted-foreground">Total Patents</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <p className="text-muted-foreground">Filed Applications</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">2025</div>
                <p className="text-muted-foreground">Latest Filing Year</p>
              </CardContent>
            </Card>
          </div>

          {/* Innovation Focus */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-3xl font-bold text-center mb-6">Innovation Focus</h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              My patent work focuses on developing innovative solutions for battery technology challenges, 
              particularly in the areas of degradation prediction and accelerated testing methodologies. 
              These innovations aim to improve the reliability and efficiency of battery systems through 
              advanced modeling and simulation techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patents;