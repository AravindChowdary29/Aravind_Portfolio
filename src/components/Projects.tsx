import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, X, Shield, Brain } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: "AI Powered Phishing Detection",
      description: "Advanced machine learning system that detects phishing attempts with high accuracy using natural language processing and URL analysis.",
      fullDescription: "This cutting-edge project implements state-of-the-art AI algorithms to identify phishing websites and malicious emails. The system uses machine learning models trained on extensive datasets to analyze URL patterns, content structure, and linguistic features. It provides real-time protection with a user-friendly interface and comprehensive reporting dashboard.",
      technologies: ["Python", "Machine Learning", "NLP", "TensorFlow", "React", "Node.js"],
      liveUrl: "https://nk-phishingdetection.netlify.app/",
      githubUrl: "#",
      image: "🛡️",
      status: "Completed",
      icon: Shield
    },
    {
      title: "AI Powered Deep Fake Detection",
      description: "Revolutionary deep learning solution for detecting AI-generated fake videos and images using advanced computer vision techniques.",
      fullDescription: "This innovative project tackles the growing threat of deepfake technology by implementing sophisticated neural networks for media authentication. The system analyzes facial expressions, temporal inconsistencies, and digital artifacts to identify manipulated content. It features a robust API for integration with social media platforms and content management systems.",
      technologies: ["Python", "Deep Learning", "Computer Vision", "PyTorch", "OpenCV", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      image: "🧠",
      status: "In Progress",
      icon: Brain
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-cyber-gradient mb-6">
            Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 cyber-border hover:cyber-glow transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{project.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-cyber-blue transition-colors">
                      {project.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-accent/20 text-accent border border-accent/30' 
                        : 'bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <project.icon className="h-8 w-8 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded border border-secondary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => setSelectedProject(project)}
                  variant="default"
                  className="cyber-glow"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Overview
                </Button>
                
                {project.liveUrl !== "#" && (
                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    variant="outline"
                    className="cyber-border"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                )}
                
                <Button
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  variant="outline"
                  className="cyber-border"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="glass-card cyber-border max-w-2xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-cyber-gradient flex items-center space-x-3">
                    <span className="text-3xl">{selectedProject.image}</span>
                    <span>{selectedProject.title}</span>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    {selectedProject.liveUrl !== "#" && (
                      <Button
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        className="cyber-glow"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Project
                      </Button>
                    )}
                    <Button
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      variant="outline"
                      className="cyber-border"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}