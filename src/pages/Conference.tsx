import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin } from 'lucide-react';

const Conference = () => {
  const conferences = [
    {
      title: "Phase-Field Modeling of Lithium Dendrite Growth Morphology Depending on Surface Patterning in Li-Metal Batteries",
      authors: ["Y. Jang", "J. Shin", "Y.K. Lee"],
      venue: "2025 Spring Academic Conference, The Korean Electrochemical Society",
      year: "2025",
      month: "Apr",
      status: "Upcoming",
      type: "Conference Presentation"
    },
    {
      title: "Development of a Physics-Based Accelerated Degradation Model for Predicting Lithium-Ion Battery Degradation",
      authors: ["J. Shin", "Y.K. Lee"],
      venue: "2025 Spring Academic Conference, The Korean Electrochemical Society",
      year: "2025",
      month: "Apr",
      status: "Upcoming",
      type: "Conference Presentation"
    },
    {
      title: "Development of an Accelerated Simulation Model for Predicting Degradation and Optimizing Performance of Lithium-Ion Batteries",
      authors: ["J. Shin", "Y.K. Lee"],
      venue: "2024 Fall Academic Conference, CAE and Applied Mechanics Division, Korean Society of Mechanical Engineers",
      year: "2024",
      month: "Nov",
      status: "Presented",
      type: "Conference Presentation"
    },
    {
      title: "Impact of battery structural geometry on battery performance: A mechanical-electrochemical performance analysis",
      authors: ["J. Shin", "Y.K. Lee"],
      venue: "2024 Spring Academic Conference, Chungcheong Branch, Korean Society of Mechanical Engineers",
      year: "2024",
      month: "Jun",
      status: "Presented",
      type: "Conference Presentation"
    },
    {
      title: "Study on the impact of the geometric shape of lithium-ion battery on mechanical and electrochemical performance",
      authors: ["J. Shin", "Y.K. Lee"],
      venue: "2023 Spring Academic Conference, CAE and Applied Mechanics Division, Korean Society of Mechanical Engineers",
      year: "2023",
      month: "May",
      status: "Presented",
      type: "Conference Presentation"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Presented':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Presented</Badge>;
      case 'Upcoming':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Upcoming</Badge>;
      case 'Accepted':
        return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Accepted</Badge>;
      default:
        return <Badge variant="secondary">Scheduled</Badge>;
    }
  };

  const getYearColor = (year: string) => {
    switch (year) {
      case '2025':
        return 'text-blue-600 bg-blue-50';
      case '2024':
        return 'text-green-600 bg-green-50';
      case '2023':
        return 'text-purple-600 bg-purple-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  // Group conferences by year
  const conferencesByYear = conferences.reduce((acc, conf) => {
    if (!acc[conf.year]) {
      acc[conf.year] = [];
    }
    acc[conf.year].push(conf);
    return acc;
  }, {} as Record<string, typeof conferences>);

  return (
    <div className="min-h-screen py-20">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Conference Presentations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic conference presentations and research dissemination
            </p>
          </div>

          {/* Conference Timeline */}
          <div className="space-y-12">
            {Object.entries(conferencesByYear)
              .sort(([a], [b]) => parseInt(b) - parseInt(a))
              .map(([year, yearConferences]) => (
                <div key={year} className="relative">
                  {/* Year Header */}
                  <div className="flex items-center mb-8">
                    <div className={`px-4 py-2 rounded-full font-bold text-lg ${getYearColor(year)}`}>
                      {year}
                    </div>
                    <div className="flex-1 h-px bg-border ml-4"></div>
                  </div>

                  {/* Conferences for this year */}
                  <div className="space-y-6 ml-8">
                    {yearConferences.map((conf, index) => (
                      <Card key={index} className="card-elegant relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-12 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                        
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="outline">{conf.type}</Badge>
                                {getStatusBadge(conf.status)}
                              </div>
                              <h3 className="text-lg font-semibold mb-3 leading-tight">{conf.title}</h3>
                              
                              <div className="space-y-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4" />
                                  <span><strong>Authors:</strong> {conf.authors.join(', ')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  <span><strong>Venue:</strong> {conf.venue}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  <span><strong>Date:</strong> {conf.month} {conf.year}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Conference Statistics */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <p className="text-muted-foreground">Total Presentations</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">Years Active</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <p className="text-muted-foreground">Professional Societies</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <p className="text-muted-foreground">Upcoming in 2025</p>
              </CardContent>
            </Card>
          </div>

          {/* Research Impact */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-3xl font-bold text-center mb-6">Research Dissemination</h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              Through these conference presentations, I have shared my research findings with the academic community, 
              contributing to the advancement of battery technology and fostering collaboration with fellow researchers. 
              Each presentation represents a milestone in my research journey and demonstrates the evolution of my work 
              from fundamental studies to advanced modeling techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;