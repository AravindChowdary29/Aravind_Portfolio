import { motion } from 'framer-motion'
// Import Github and Linkedin icons (removed MapPin and GraduationCap)
import { Download, Phone, Mail, Github, Linkedin } from 'lucide-react'
import { Button } from './ui/button'
import cyberHeroBg from '@/assets/cyber-hero-bg.jpg'

export default function Hero() {
  // Removed unused properties (location, degree, gpa)
  const personalInfo = {
    name: "Tummalapalli Aravind",
    title: "CyberSecurity Professional & Full Stack Developer",
    phone: "+91 89196 78462",
    email: "aravindn959@gmail.com",
  }

  // --- ADD YOUR LINKS HERE ---
  // Replace '#' with your actual profile URLs
  const socialLinks = {
    github: "https://github.com/AravindChowdary29", 
    linkedin: "https://www.linkedin.com/in/tummalapalliaravind/"
  }

  // --- FIX ---
  // Store your resume path in a variable. 
  // Make sure "Aravind_Resumes (1).pdf" is in your /public directory.
  const resumePath = "/Aravind-Resume.pdf";

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cyberHeroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-cyber-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {personalInfo.name.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {personalInfo.title}
            </motion.p>

            {/* --- Icon buttons --- */}
            <motion.div
              className="flex space-x-3 pt-4" // Kept pt-4 for spacing
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button variant="outline" size="icon" className="cyber-border transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30" asChild>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="cyber-border transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30" asChild>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="cyber-border transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30" asChild>
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="cyber-border transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30" asChild>
                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} aria-label="Phone">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            {/* --- END OF BUTTONS --- */}


            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                className="cyber-glow"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              
              {/* --- FIX: CHANGED TO AN <a> TAG FOR DOWNLOADING --- */}
              <Button
                variant="outline"
                className="cyber-border"
                asChild // Use asChild to pass styles to the <a> tag
              >
                <a
                  href={resumePath}
                  download="Aravind_Resume.pdf" // This forces download and suggests a new filename
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              {/* --- END OF FIX --- */}
              
            </motion.div>
          </motion.div>

          {/* Animated Elements (Unchanged) */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-96 h-96 mx-auto">
              {/* Rotating Border */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Circle */}
              <motion.div
                className="absolute inset-8 rounded-full glass-card cyber-glow animate-float"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-primary animate-glow">
                      Security
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Expert
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              {['🛡️', '🔒', '💻', '🔍'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 glass-card rounded-full flex items-center justify-center text-2xl"
                  style={{
                    top: `${20 + Math.sin((index * Math.PI) / 2) * 30}%`,
                    left: `${20 + Math.cos((index * Math.PI) / 2) * 30}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}