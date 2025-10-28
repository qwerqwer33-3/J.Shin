import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Calendar, Trophy, Star } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "Excellence Award for Outstanding Research Report Review",
      titleKorean: "국립대학육성사업 학생융합연구동아리(HaIM) 우수결과보고서심사 우수상",
      organization: "Hanbat National University",
      year: "2024",
      month: "Jan",
      description: "Recognition for outstanding performance in the HaIM (student convergence research club) activities and research achievements",
      category: "Research Excellence",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Silver Prize in 12th Creative Concept Design Competition",
      titleKorean: "12회 창의적개념설계 공모전 은상",
      organization: "Hanbat National University",
      year: "2020",
      month: "Dec",
      description: "Recognition for creative design ideas and innovative engineering solutions",
      category: "Design Competition",
      icon: <Trophy className="h-6 w-6" />
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Research Excellence':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Design Competition':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Academic Achievement':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Awards & Honors</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognition for academic excellence and research achievements
            </p>
          </div>

          {/* Awards List */}
          <div className="space-y-8 mb-16">
            {awards.map((award, index) => (
              <Card key={index} className="card-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Award Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                        {award.icon}
                      </div>
                    </div>

                    {/* Award Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3 italic">{award.titleKorean}</p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Award className="h-4 w-4" />
                              <span className="font-medium">{award.organization}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{award.month} {award.year}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(award.category)}`}>
                            {award.category}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Awards Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <p className="text-muted-foreground">Total Awards</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <p className="text-muted-foreground">Different Categories</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <p className="text-muted-foreground">Years of Recognition</p>
              </CardContent>
            </Card>
          </div>

          {/* Achievement Philosophy */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-3xl font-bold text-center mb-6">Recognition Journey</h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              These awards represent milestones in my academic and research journey, from early recognition 
              for creative design thinking to recent acknowledgment of research excellence. Each honor has 
              motivated me to continue pushing the boundaries of innovation in battery technology and 
              engineering solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;