import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Battery, Layers, TrendingDown, Shield, Settings } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Li-Ion Batteries & Next-generation Batteries",
      description: "Research on All-solid-state Battery, Li-metal Battery, K-Ion Battery, and other next-generation battery technologies",
      tags: ["Li-Ion Battery", "All-solid-state Battery", "Li-metal Battery", "K-Ion Battery", "Next-gen Batteries"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Multi-Scale Approaches & Multi-Physics Analysis",
      description: "Battery behavior analysis at various scales and complex physical phenomenon interpretation",
      tags: ["Multi-Scale Analysis", "Multi-Physics", "COMSOL Multiphysics", "Simulation", "Modeling"],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: "Battery Degradation",
      description: "Analysis of battery degradation mechanisms and development of predictive models",
      tags: ["Battery Degradation", "Accelerated Model", "Prediction", "Side Reactions", "Lifetime Analysis"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Battery Safety",
      description: "Research for improving battery safety and reliability in various operating conditions",
      tags: ["Battery Safety", "Reliability", "Thermal Management", "Risk Assessment", "Safety Analysis"],
      color: "bg-red-500/10 text-red-600 border-red-200"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Battery Optimization",
      description: "Battery performance optimization and system design improvement research",
      tags: ["Battery Optimization", "Performance Analysis", "System Design", "MATLAB", "Parameter Tuning"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    }
  ];

  const currentProjects = [
    {
      title: "Development of Accelerated Battery Degradation Model",
      status: "In Progress",
      description: "Research on accelerated lithium-ion battery degradation prediction method through side reaction rate control"
    },
    {
      title: "Battery Performance Analysis Based on Geometry",
      status: "Completed",
      description: "Analysis of the impact of various battery cell geometries on mechanical-electrochemical performance"
    },
    {
      title: "Multi-scale Battery Optimization",
      status: "In Progress",
      description: "Multi-scale and multi-physics design optimization for shared autonomous electric vehicle systems"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Research Interests</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My research focuses on improving the safety, reliability, and performance of batteries, 
              advancing the efficiency of battery technologies through systematic investigation and innovative approaches.
            </p>
          </div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
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

          {/* Current Research */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Current Research Projects</h2>
            <div className="grid gap-6">
              {currentProjects.map((project, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold mb-2 md:mb-0">{project.title}</h3>
                      <Badge 
                        variant={project.status === 'In Progress' ? 'default' : project.status === 'Completed' ? 'secondary' : 'outline'}
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

          {/* Research Philosophy */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-3xl font-bold text-center mb-6">Research Philosophy</h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              My research aims to bridge the gap between theoretical understanding and practical applications 
              in battery technology. By employing multi-scale approaches and multi-physics analysis, 
              I strive to develop innovative solutions that address real-world challenges in energy storage systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;