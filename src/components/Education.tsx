import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

interface EducationItemProps {
  title: string;
  institution: string;
  period: string;
  score: string;
  isLast?: boolean;
}

const EducationItem = ({ title, institution, period, score, isLast = false }: EducationItemProps) => {
  return (
    <motion.div 
      className="flex"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center mr-4">
        <div className="w-4 h-4 rounded-full bg-primary" />
        {!isLast && <div className="w-1 h-full bg-primary/30 mt-1" />}
      </div>
      <div className={`glass-card p-5 mb-8 w-full transition-all hover:scale-105 duration-300 ${isLast ? 'mb-0' : ''}`}>
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground mb-3">{institution}</p>
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <span className="flex items-center text-sm">
            <CalendarDays className="w-4 h-4 mr-2 text-primary" />
            {period}
          </span>
          <span className="font-medium text-primary">{score}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology",
      institution: "Koneru Lakshmaiah College of Engineering",
      period: "2022-2026",
      score: "CGPA: 8.1"
    },
    {
      title: "Intermediate (12th Class)",
      institution: "Sri Chaitanya Junior College",
      period: "2020-2022",
      score: "Percentage: 70%"
    },
    {
      title: "High School (10th Class)",
      institution: "New Vision High School",
      period: "2019-2020",
      score: "GPA: 10/10"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Educational Journey
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <EducationItem 
              key={index}
              title={edu.title}
              institution={edu.institution}
              period={edu.period}
              score={edu.score}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;