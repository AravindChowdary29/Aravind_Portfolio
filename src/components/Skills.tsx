import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Database, 
  Globe, 
  Languages, 
  Trophy, 
  Braces, 
  Server, 
  Palette, 
  Shield
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const Skills = () => {
  // --- CHANGED HERE ---
  // Set the default active category to "cybersecurity"
  const [activeCategory, setActiveCategory] = useState("cybersecurity");
  
  const categories: SkillCategory[] = [
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: <Shield className="w-5 h-5" />,
      color: "from-red-400 to-orange-400",
      skills: [
        { name: "Wireshark", icon: <Shield className="w-5 h-5 text-blue-400" /> },
        { name: "Nmap", icon: <Shield className="w-5 h-5 text-green-400" /> },
        { name: "Burp Suite", icon: <Shield className="w-5 h-5 text-orange-400" /> },
        { name: "Metasploit", icon: <Shield className="w-5 h-5 text-red-400" /> },
        { name: "Kali Linux", icon: <Shield className="w-5 h-5 text-purple-400" /> },
        { name: "FTK Imager", icon: <Shield className="w-5 h-5 text-yellow-400" /> },
        { name: "TROJAN", icon: <Shield className="w-5 h-5 text-black-400" /> },
        { name: "Autopsy", icon: <Shield className="w-5 h-5 text-blue-400" /> }
      ]
    },
    {
      id: "coding",
      title: "Coding",
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-400 to-purple-400",
      skills: [
        { name: "Python", icon: <Code className="w-5 h-5 text-blue-400" /> },
        { name: "Java", icon: <Code className="w-5 h-5 text-orange-400" /> },
        { name: "C", icon: <Code className="w-5 h-5 text-gray-400" /> }
      ]
    },
    {
      id: "fullstack",
      title: "Full Stack",
      icon: <Server className="w-5 h-5" />,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "MERN Stack", icon: <Globe className="w-5 h-5 text-green-400" /> },
        { name: "Python Full Stack", icon: <Server className="w-5 h-5 text-blue-400" /> },
        { name: "Java Full Stack", icon: <Server className="w-5 h-5 text-orange-400" /> }
      ]
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: <Palette className="w-5 h-5" />,
      color: "from-pink-400 to-red-400",
      skills: [
        { name: "HTML/CSS", icon: <Braces className="w-5 h-5 text-orange-400" /> },
        { name: "ReactJS", icon: <Code className="w-5 h-5 text-cyan-400" /> },
        { name: "TypeScript", icon: <Code className="w-5 h-5 text-blue-400" /> },
        { name: "Tailwind CSS", icon: <Palette className="w-5 h-5 text-teal-400" /> }
      ]
    },
    {
      id: "database",
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      color: "from-green-400 to-teal-400",
      skills: [
        { name: "MySQL", icon: <Database className="w-5 h-5 text-blue-400" /> },
        { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-green-400" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5 text-lime-400" /> }
      ]
    },
    {
      id: "communication",
      title: "Communication",
      icon: <Languages className="w-5 h-5" />,
      color: "from-yellow-400 to-orange-400",
      skills: [
        { name: "English", icon: <Languages className="w-5 h-5 text-blue-400" /> },
        { name: "Telugu", icon: <Languages className="w-5 h-5 text-orange-400" /> },
        { name: "Hindi", icon: <Languages className="w-5 h-5 text-red-400" /> },
        { name: "Germany", icon: <Languages className="w-5 h-5 text-yellow-400" /> }
      ]
    },
    {
      id: "external",
      title: "External Skills",
      icon: <Trophy className="w-5 h-5" />,
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "Leadership", icon: <Trophy className="w-5 h-5 text-red-400" /> },
        { name: "Teamwork", icon: <Trophy className="w-5 h-5 text-green-400" /> },
        { name: "Problem Solving", icon: <Trophy className="w-5 h-5 text-blue-400" /> },
        { name: "Cricket", icon: <Trophy className="w-5 h-5 text-yellow-400" /> }
        
      ]
    }
  ];
  
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];
  
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        {/* Category selector */}
        <motion.div 
          className="flex overflow-x-auto pb-4 gap-3 mb-12 justify-center flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-3 rounded-full transition-all duration-300 flex items-center gap-3 whitespace-nowrap font-medium text-sm md:text-base ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-background/80 hover:bg-background border border-primary/10 text-foreground/80 hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.title}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Skills display */}
        <motion.div 
          className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-background/30 border border-primary/10 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          layout
        >
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-10 text-center"
              layout
            >
              <span className={`bg-gradient-to-r ${currentCategory.color} bg-clip-text text-transparent`}>
                {currentCategory.title} Skills
              </span>
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-background/50 transition-all duration-300"
                >
                  {skill.icon}
                  <span className="text-lg font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-primary/10 blur-3xl"></div>
    </section>
  );
};

export default Skills;