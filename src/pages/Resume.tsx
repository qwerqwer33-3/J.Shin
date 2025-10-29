import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, GraduationCap, Briefcase, Code, Languages, Mail, Phone, MapPin } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "B.S. in Mechanical Engineering",
      school: "Hanbat National University",
      period: "Mar. 2020 - Aug. 2024",
      location: "Daejeon, Korea",
      details: ["Battery System Laboratory (BSL) under Prof. Yoon Koo Lee", "Focus on battery geometry analysis", "Creative concept design competition silver prize"]
    }
  ];

  const experience = [
    {
      title: "Researcher (Part-time, Contract)",
      company: "KAIST - Cho Chun Shik Graduate School of Mobility",
      period: "Sep. 2024 - Present",
      location: "Daejeon, Korea",
      description: "Development of accelerated battery degradation model\nDesign optimization considering battery degradation",
      achievements: ["Accelerated lithium-ion battery degradation prediction research", "Multi-scale, multi-physics battery analysis and optimization"]
    },
    {
      title: "Research Intern",
      company: "KAIST - Cho Chun Shik Graduate School of Mobility",
      period: "May 2024 - Aug. 2024",
      location: "Daejeon, Korea",
      description: "Battery degradation model development research",
      achievements: ["Battery degradation mechanism analysis", "Simulation model development"]
    },
    {
      title: "Research Student",
      company: "Hanbat National University - Mechanical Engineering",
      period: "Feb. 2022 - Feb. 2024",
      location: "Daejeon, Korea",
      description: "Lithium-ion battery analysis research",
      achievements: ["Battery geometry impact analysis", "Mechanical-electrochemical coupled modeling"]
    }
  ];

  const skills = {
    "Simulation Tools": ["COMSOL Multiphysics", "MATLAB"],
    "Design Tools": ["CATIA"],
    "Programming": ["Python"],
    "Research Areas": ["Battery Modeling", "Multi-scale & Multi-physics Analysis", "Physics-Based Simulation"]
  };

  const languages = [
    { name: "Korean", level: "Native" },
    //{ name: "English", level: "Intermediate" }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      value: "jshin01@kaist.ac.kr"
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Personal Email",
      value: "colorcircle33@gmail.com"
    },
    // {
    //   icon: <Phone className="h-4 w-4" />,
    //   label: "Phone",
    //   value: "+82-10-5513-0665"
    // },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Location",
      value: "Daejeon, South Korea"
    }
  ];


  const handleDownloadCV = () => {
    const a = document.createElement('a');
    a.href = `${import.meta.env.BASE_URL}cv_jeu_shin.pdf`; // /J.Shin/ 환경에서도 OK
    a.download = 'Jeu_Shin_CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };


  // const handleDownloadCV = () => {
  //   // PDF download functionality
  //   const link = document.createElement('a');
  //   link.href = '/public/cv_jeu_shin.pdf';
  //   link.download = 'Jeu_Shin_CV.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div className="min-h-screen py-20">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Education, experience, and technical skills overview
            </p>
            <Button onClick={handleDownloadCV} className="btn-primary">
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Education */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-1">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mb-1">{edu.location}</p>
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
                    Research Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-6 pb-6 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
                      <p className="text-muted-foreground whitespace-pre-line mb-3">{exp.description}</p>
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

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Code className="h-5 w-5 text-primary" />
                    Technical Skills
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
                    Languages
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
    </div>
  );
};

export default Resume;