import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

// 👇 import your images (place them in /src/assets or /public)
import hackathonImg from '../assets/hackathon.jpg';
import workshopImg from '../assets/workshop.jpg';
import internshipImg from '../assets/internship.jpg';
import ambassadorImg from '../assets/ambassador.jpg';
import activityCenterLeadImg from '../assets/activity-lead.jpg';
import activityCenterSecImg from '../assets/activity-lead.jpg';
import expoImg from '../assets/expo.jpg';
import spaceAmbassadorImg from '../assets/space-ambassador.jpg';
import techClubImg from '../assets/workshop.jpg';
import festImg from '../assets/fest.jpg';

interface AchievementProps {
  title: string;
  role: string;
  organization: string;
  date: string;
  image: string; // 👈 instead of icon
}

const achievementsData: AchievementProps[] = [
  {
    title: "Hackathon, Cybersecurity Club",
    role: "Won 3rd Prize",
    organization: "KL University",
    date: "2022, 2023",
    image: hackathonImg,
  },
  {
    title: "Cybersecurity Workshop",
    role: "Organizer",
    organization: "KL University",
    date: "2023",
    image: workshopImg,
  },
  {
    title: "Cybersecurity Virtual Internship",
    role: "Intern (Supported by Palo Alto)",
    organization: "Palo Alto Networks",
    date: "2024",
    image: internshipImg,
  },
  {
    title: "Campus Ambassador",
    role: "Ambassador",
    organization: "Google",
    date: "2025",
    image: ambassadorImg,
  },
  {
    title: "Student Activity Center (Internal & External)",
    role: "Lead",
    organization: "KL University",
    date: "2024 - 2025",
    image: activityCenterLeadImg,
  },
  {
    title: "Student Activity Center",
    role: "Secretary",
    organization: "KL University",
    date: "2025 - 2026",
    image: activityCenterSecImg,
  },
  {
    title: "DTI Project Expo",
    role: "Lead",
    organization: "KL University",
    date: "2022",
    image: expoImg,
  },
  {
    title: "Campus Ambassador",
    role: "Ambassador",
    organization: "Agnirva.com (Space Community)",
    date: "2024",
    image: spaceAmbassadorImg,
  },
  {
    title: "CyberSecurity Technical Club",
    role: "HR Lead",
    organization: "KL University",
    date: "2023 - 2026",
    image: techClubImg,
  },
  {
    title: "University Fest '#include' HR Dept.",
    role: "Lead",
    organization: "KL University",
    date: "2025",
    image: festImg,
  },
];

const AchievementCard = ({ title, role, organization, date, image, index }: AchievementProps & { index: number }) => {
  return (
    <motion.div
      className="glass-card p-6 rounded-lg flex flex-col h-full hover:shadow-primary/20 hover:scale-105 transition-all duration-300 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      {/* 👇 replaced Lucide icon with img */}
      <img 
        src={image} 
        alt={title} 
        className="w-8 h-8 object-contain mb-4"
      />

      <div className="flex-grow">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-primary font-medium mb-1">{role}</p>
        <p className="text-muted-foreground text-sm">{organization}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-primary/10">
        <span className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="w-4 h-4 mr-2" />
          {date}
        </span>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <AchievementCard 
              key={index} 
              index={index}
              {...item} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
