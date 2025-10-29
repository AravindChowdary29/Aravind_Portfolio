import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Eye, Award } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'

// --- OPTIMIZATION: Added a type for certificate objects ---
interface Certificate {
  title: string;
  organization: string;
  logo: string; // This is now an image path
  url: string;
  description: string;
  color: string;
}

export default function Certificates() {
  // --- OPTIMIZATION: Used the Certificate type for state ---
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  // --- MODIFIED: Logo property now points to image paths in /public/logos/ ---
  const certificates: Certificate[] = [
    {
      title: "Certified Ethical Hacker (CEH)",
      organization: "EC-Council",
      logo: "CEH.jpg",
      url: "https://drive.google.com/file/d/17Etu3NLBb-00HbJ0_RLfy-6AVXUC-c2k/view?usp=sharing",
      description: "Advanced ethical hacking and penetration testing certification covering vulnerability assessment, malware threats, and security analysis.",
      color: "text-cyber-blue"
    },
    {
      title: "Forage JP Morgan Cyber Security",
      organization: "JP Morgan Chase",
      logo: "JPMC.jpg",
      url: "https://drive.google.com/file/d/1vbVz5YcBKtDpoIu28auLyqMys4S1Z24E/view?usp=sharing",
      description: "Financial services cybersecurity simulation focusing on threat intelligence and risk management.",
      color: "text-cyber-purple"
    },
    {
      title: "Coursera Cybersecurity",
      organization: "Coursera",
      logo: "Google.jpg",
      url: "https://drive.google.com/file/d/1ifiiDSnBPfgaA06-9Z0DeDkOTiF-hkFX/view?usp=sharing",
      description: "Professional cybersecurity specialization covering network security, cryptography, and incident response.",
      color: "text-cyber-pink"
    },
    {
      title: "Oracle Cloud Certificate",
      organization: "Oracle",
      logo: "Oracle.jpg",
      url: "https://drive.google.com/file/d/1NaRMcC76iJMjY5rTvkgtDb6nOZCGUfOP/view?usp=sharing",
      description: "Cloud infrastructure and security certification covering Oracle Cloud services and best practices.",
      color: "text-primary"
    },
    {
      title: "Robotic Process Automation (RPA)",
      organization: "RPA Institute",
      logo: "RPA.jpg",
      url: "https://drive.google.com/file/d/1mpiI_7igOtsCk-ZTbhlDrSHAzUyBHmV1/view?usp=sharing",
      description: "Automation technologies and process optimization using RPA tools and methodologies.",
      color: "text-accent"
    },
    {
      title: "Multicloud Network Associate",
      organization: "Cloud Networks",
      logo: "Multi-Cloud.jpg",
      url: "https://drive.google.com/file/d/1Lv34eI7pOwQ0uPJfwMqXTlgOS098s3aT/view?usp=sharing",
      description: "Multi-cloud networking strategies and implementation across different cloud platforms.",
      color: "text-cyber-blue"
    },
    {
      title: "Salesforce AI",
      organization: "Salesforce",
      logo: "Salesforce.jpg",
      url: "https://drive.google.com/file/d/1gJDJCbNAiVVOHTGwIJiUbHgf736-zVbG/view?usp=sharing",
      description: "Artificial Intelligence implementation in CRM systems and business process automation.",
      color: "text-cyber-green"
    },
    {
      title: "Oracle Certified Networking Professional",
      organization: "Oracle",
      logo: "Oracle.jpg",
      url: "https://drive.google.com/file/d/1lIBNlR8fipI2gGCJkKIGi3I6_v-xi75X/view?usp=sharing",
      description: "Networking concepts and Oracle network solutions for enterprise environments.",             
      color: "text-cyber-blue"
    }
  ]

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-cyber-gradient mb-6">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise across cybersecurity, cloud technologies, and emerging tech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              // --- REMOVED: whileHover={{ scale: 1.05 }} ---
              // --- REMOVED: hover:cyber-glow ---
              className="glass-card p-6 cyber-border transition-all duration-300 group"
            >
              {/* Certificate Header */}
              <div className="text-center mb-4">
                {/* --- MODIFIED: Replaced emoji div with img tag --- */}
                <div className="h-16 mb-4 flex items-center justify-center">
                  <img
                    src={cert.logo}
                    alt={`${cert.organization} logo`}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* --- REMOVED: group-hover:animate-glow --- */}
                <h3 className={`text-lg font-bold ${cert.color} mb-2 transition-colors duration-300`}>
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {cert.organization}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => setSelectedCert(cert)}
                  variant="default"
                  size="sm"
                  // --- REMOVED: cyber-glow ---
                  className="w-full"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button
                  onClick={() => window.open(cert.url, '_blank')}
                  variant="outline"
                  size="sm"
                  className="w-full cyber-border"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Certificate
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="glass-card cyber-border max-w-2xl">
            {selectedCert && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-cyber-gradient flex items-center space-x-3">
                    {/* --- MODIFIED: Replaced emoji span with img tag --- */}
                    <img
                      src={selectedCert.logo}
                      alt={`${selectedCert.organization} logo`}
                      className="h-10 w-10 object-contain flex-shrink-0"
                    />
                    <div>
                      <div>{selectedCert.title}</div>
                      <div className="text-sm text-muted-foreground font-normal mt-1">
                        {selectedCert.organization}
                      </div>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCert.description}
                  </p>
                  
                  <div className="bg-secondary/20 rounded-lg p-4 border border-secondary/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-primary">Certificate Details</span>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><strong>Issuing Organization:</strong> {selectedCert.organization}</p>
                      <p><strong>Status:</strong> <span className="text-accent">Verified</span></p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={() => window.open(selectedCert.url, '_blank')}
                      // --- REMOVED: cyber-glow ---
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Certificate
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