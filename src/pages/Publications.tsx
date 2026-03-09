import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Users } from 'lucide-react';
const MY_NAME = "Jeu Shin";
const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const publications = [
  // Journal Papers
  {
    title: "Multi-scale mechanical-electrochemical coupled modeling of stress generation and its impact on different battery cell geometries",
    authors: ["Jeu Shin†", "Yoon Koo Lee*"],
    venue: "Journal of Power Sources (IF: 8.1)",
    year: "2024",
    type: "journal",
    status: "published",
    abstract: "This study develops a multi-scale mechanical-electrochemical coupled model to analyze stress generation and its impact on various battery cell geometries.",
    keywords: ["Multi-scale modeling", "Battery geometry", "Stress analysis", "Electrochemical coupling", "Performance analysis"],
    link: "https://doi.org/10.1016/j.jpowsour.2024.234064"
  }, {
    title: "Development of an accelerated side reaction-electrochemical coupled modeling for lithium-ion batteries via controlled side reaction rates",
    authors: ["Jeu Shin†", "Yeonghwan Jang", "D. Kim", "D.W. Kim", "Yoon Koo Lee*"],
    venue: "In Preparation",
    year: "-",
    type: "journal",
    status: "in_preparation",
    abstract: "Development of accelerated side reaction-electrochemical coupled modeling for lithium-ion batteries through controlled side reaction rates.",
    keywords: ["Accelerated modeling", "Side reactions", "Battery degradation", "Electrochemical coupling", "Prediction method"],
    link: "#"
  }, {
    title: "Multi-scale & multi-physics design optimization for shared autonomous electric vehicle system considering dynamic battery degradation",
    authors: ["Dongeon Lee†", "Ungki Lee†", "Jeu Shin", "Yoon Koo Lee*", "Namwoo Kang*"],
    venue: "In Preparation",
    year: "-",
    type: "journal",
    status: "in_preparation",
    abstract: "Multi-scale and multi-physics design optimization research for electric vehicles.",
    keywords: ["Multi-scale optimization", "Multi-physics", "Electric vehicles", "Design optimization", "System integration"],
    link: "#"
  },
  // Conference Papers
  {
    title: "Multi-Method Screening of Chemically Inert Oxide Anode Coating Layers for Lithium Metal and All-Solid-State Batteries",
    authors: ["Jeu Shin", "Dong Won Jeon", "Sung Beom Cho"],
    venue: "2026 Spring Academic Conference, The Korean Ceramic Society",
    year: "2026",
    type: "conference",
    status: "pre_presentation",
    abstract: "A multi-method high-throughput screening framework is used to identify chemically inert oxide coating layers for lithium metal and all-solid-state batteries, with experimental validation of promising candidates.",
    keywords: ["All-solid-state battery", "Anode coating", "High-throughput screening", "Lithium metal", "Oxide materials"],
    link: "#"
  }, {
    title: "Multiscale Understanding of Solvent-Free Dry Electrode Processing",
    authors: ["Jeu Shin", "Jun Hyuk Kang", "Sung Beom Cho"],
    venue: "2026 Spring Academic Conference, The Korean Ceramic Society",
    year: "2026",
    type: "conference",
    status: "pre_presentation",
    abstract: "A multiscale framework combining FEM, Gaussian process regression, and Bayesian optimization is developed to understand and optimize PTFE fibrillation in solvent-free dry electrode processing.",
    keywords: ["Dry electrode", "PTFE fibrillation", "Multiscale modeling", "Bayesian optimization", "Electrode processing"],
    link: "#"
  }, {
    title: "Role of Ion Distribution in Droplet-Based Hydrovoltaic Energy Harvesting",
    authors: ["Jeu Shin", "Min Sung Kang", "Sung Beom Cho"],
    venue: "2026 Spring Academic Conference, The Korean Energy Society",
    year: "2026",
    type: "conference",
    status: "pre_presentation",
    abstract: "A coupled multiphysics model shows that ion concentration distribution is the key driver of voltage generation in droplet-based hydrovoltaic systems and provides design guidance across porosity and humidity conditions.",
    keywords: ["Hydrovoltaic", "Ion distribution", "Porous media", "Electrostatics", "Energy harvesting"],
    link: "#"
  }, {
    title: "Multiscale insights into PTFE Fibrillation in Dry Electrode Processing",
    authors: ["Jeu Shin", "Jun Hyuk Kang", "Sung Beom Cho"],
    venue: "2026 Spring Academic Conference, The Korean Energy Society",
    year: "2026",
    type: "conference",
    status: "pre_presentation",
    abstract: "A multiscale FEM-GPR-Bayesian optimization framework reveals how particle size and particle-loaded pressure govern PTFE fibrillation in dry electrode processing, identifying optimal conditions that were validated by improved electrochemical performance.",
    keywords: ["Dry electrode", "PTFE fibrillation", "Multiscale optimization", "Bayesian optimization", "Electrochemical validation"],
    link: "#"
  }, {
    title: "Development of a Cell-Vehicle-Operations Multi-scale Design Optimization Framework for SAEVs",
    authors: ["Jeu Shin", "Dongeon Lee", "Ungki Lee", "Namwoo Kang", "Yoon Koo Lee"],
    venue: "2025 Fall Academic Conference, The Korean Society of Automotive Engineers",
    year: "2025",
    type: "conference",
    status: "presented",
    abstract: "Development of a multi-scale design optimization framework linking cell, vehicle, and operation levels for SAEV systems.",
    keywords: ["SAEV", "Multi-scale optimization", "Battery design", "Vehicle-operation co-design", "Framework development"],
    link: "#"
  }, {
    title: "Phase-Field Modeling of Lithium Dendrite Growth Morphology Depending on Surface Patterning in Li-Metal Batteries",
    authors: ["Yeonghwan Jang", "Jeu Shin", "Yoon Koo Lee"],
    venue: "2025 Spring Academic Conference, The Korean Electrochemical Society",
    year: "2025",
    type: "conference",
    status: "presented",
    abstract: "Investigation of lithium dendrite growth morphology using phase-field modeling with surface patterning effects in Li-metal batteries.",
    keywords: ["Phase-field modeling", "Lithium dendrite", "Surface patterning", "Li-metal battery", "Growth morphology"],
    link: "#"
  }, {
    title: "Development of a Physics-Based Accelerated Degradation Model for Predicting Lithium-Ion Battery Degradation",
    authors: ["Jeu Shin", "Yoon Koo Lee"],
    venue: "2025 Spring Academic Conference, The Korean Electrochemical Society",
    year: "2025",
    type: "conference",
    status: "presented",
    abstract: "Development of physics-based accelerated degradation model for accurate lithium-ion battery degradation prediction.",
    keywords: ["Physics-based model", "Accelerated degradation", "Battery prediction", "Degradation mechanism", "Modeling approach"],
    link: "#"
  }, {
    title: "Development of an Accelerated Simulation Model for Predicting Degradation and Optimizing Performance of Lithium-Ion Batteries",
    authors: ["Jeu Shin", "Yoon Koo Lee"],
    venue: "2024 Fall Academic Conference, CAE and Applied Mechanics Division, The Korean Society of Mechanical Engineers",
    year: "2024",
    type: "conference",
    status: "presented",
    abstract: "Development of accelerated simulation model for predicting battery degradation and optimizing performance.",
    keywords: ["Accelerated simulation", "Degradation prediction", "Performance optimization", "Battery modeling", "Simulation framework"],
    link: "#"
  }, {
    title: "Impact of battery structural geometry on battery performance: A mechanical-electrochemical performance analysis",
    authors: ["Jeu Shin", "Yoon Koo Lee"],
    venue: "2024 Spring Academic Conference, Chungcheong Branch, The Korean Society of Mechanical Engineers",
    year: "2024",
    type: "conference",
    status: "presented",
    abstract: "Analysis of how battery structural geometry impacts performance through mechanical-electrochemical coupling.",
    keywords: ["Battery geometry", "Structural analysis", "Performance impact", "Mechanical-electrochemical", "Design optimization"],
    link: "#"
  }, {
    title: "Study on the impact of the geometric shape of lithium-ion battery on mechanical and electrochemical performance",
    authors: ["Jeu Shin", "Yoon Koo Lee"],
    venue: "2023 Spring Academic Conference, CAE and Applied Mechanics Division, The Korean Society of Mechanical Engineers",
    year: "2023",
    type: "conference",
    status: "presented",
    abstract: "Investigation of geometric shape effects on lithium-ion battery mechanical and electrochemical performance.",
    keywords: ["Geometric shape", "Battery performance", "Mechanical analysis", "Electrochemical analysis", "Shape optimization"],
    link: "#"
  },
  // Patents
  {
    title: "Accelerated Lithium-Ion Battery Degradation Prediction Method Through Control of Side Reaction Rate, Prediction System Utilizing Said Method, and Computer-Readable Recording Medium",
    authors: ["Jeu Shin", "Yoon Koo Lee"],
    venue: "Korean Patent Application No. 10-2025-0076896",
    year: "2025",
    type: "patent",
    status: "filed",
    abstract: "This patent describes a novel method for predicting lithium-ion battery degradation through controlled side reaction rates, enabling accelerated testing and more accurate lifetime predictions.",
    keywords: ["Patent application", "Degradation prediction", "Side reaction control", "Accelerated testing", "Battery lifetime"],
    link: "#"
  }];
  const categories = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'journal',
    label: 'Journal'
  }, {
    id: 'conference',
    label: 'Conference'
  }, {
    id: 'patent',
    label: 'Patent'
  }];
  const filteredPublications = selectedCategory === 'all' ? publications : publications.filter(pub => pub.type === selectedCategory);
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Published</Badge>;
      case 'under_review':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Under Review</Badge>;
      case 'accepted':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Accepted</Badge>;
      case 'pre_presentation':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Upcoming</Badge>;
      case 'filed':
        return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Filed</Badge>;
      case 'presented':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Presented</Badge>;
      default:
        return <Badge variant="secondary">In Preparation</Badge>;
    }
  };
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'journal':
        return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Journal</Badge>;
      case 'conference':
        return <Badge className="bg-sky-100 text-sky-800 border-sky-200">Conference</Badge>;
      case 'patent':
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Patent</Badge>;
      default:
        return <Badge variant="secondary">Other</Badge>;
    }
  };
  return <div className="min-h-screen py-20">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Publications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Journal articles, conference presentations, and patent applications
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => <Button key={category.id} variant={selectedCategory === category.id ? "default" : "outline"} onClick={() => setSelectedCategory(category.id)} className="px-6 py-2">
                {category.label}
              </Button>)}
          </div>

          {/* Publications List */}
          <div className="space-y-8">
            {filteredPublications.map((pub, index) => <Card key={index} className="card-elegant">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 leading-tight">{pub.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>
                          {pub.authors.map((a, i) => {
                            const m = a.match(/^(.*?)([†*]+)?$/);   // 끝의 †/* 분리 (표식은 그대로, sup 안 씀)
                            const name  = (m?.[1] ?? a).trim();
                            const marks = m?.[2] ?? "";
                            const isMe  = name === MY_NAME;

                            return (
                              <React.Fragment key={i}>
                                {i > 0 && ", "}
                                <>
                                  <span className={isMe ? "font-bold underline underline-offset-2" : undefined}>
                                    {name}
                                  </span>
                                  {marks && <span>{marks}</span>} {/* 표식은 일반 텍스트로 그대로 */}
                                </>
                              </React.Fragment>
                            );
                          })}
                        </span>
                      </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{pub.year}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-sm font-medium text-primary">{pub.venue}</p>
                        {selectedCategory === 'all' && <span className="inline-flex">{getTypeBadge(pub.type)}</span>}
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end gap-2">
                      <span className="inline-flex">{getStatusBadge(pub.status)}</span>
                      {pub.link !== "#" && (
                        <Button variant="outline" className="self-end w-fit" onClick={() => window.open(pub.link, '_blank')}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{pub.abstract}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword, keyIndex) => <Badge key={keyIndex} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Publication Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">14</div>
                <p className="text-muted-foreground">Total Publications</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">Journal Papers<br />(Including in progress)</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10</div>
                <p className="text-muted-foreground">Conference Presentations</p>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <p className="text-muted-foreground">Patent Applications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Publications;

