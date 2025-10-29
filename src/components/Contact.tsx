import { Mail, Phone, MapPin, Linkedin, Github, Instagram, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export default function Contact() {
  const contactInfo = {
    email: "aravindn959@gmail.com",
    phone: "+91 89196 78462",
    location: "Khammam, Telangana, India"
  }

  // --- MODIFIED: Removed hover effects from color definitions ---
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tummalapalliaravind/",
      icon: Linkedin,
      color: "text-cyber-blue",
      description: "Professional Network"
    },
    {
      name: "GitHub",
      url: "https://github.com/AravindChowdary29",
      icon: Github,
      color: "text-cyber-purple",
      description: "Code Repository"
    },
    {
      name: "Email",
      url: `mailto:${contactInfo.email}`,
      icon: Mail,
      color: "text-cyber-green",
      description: "Direct Contact"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aravindtummalapalli/",
      icon: Instagram,
      color: "text-cyber-pink",
      description: "Personal Updates"
    }
  ]

  return (
    // --- MODIFIED: Removed background gradient ---
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* --- MODIFIED: Removed motion wrapper and gradient text --- */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge cybersecurity projects or discuss innovative solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          {/* --- MODIFIED: Removed motion wrapper and cyber-border --- */}
          <div
            className="bg-card p-8 mb-12 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Contact Information</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* --- MODIFIED: Removed motion, hover, and transition --- */}
              <div
                className="text-center p-4 rounded-lg bg-secondary/20 border border-secondary/30"
              >
                <Mail className="h-8 w-8 text-cyber-green mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
              </div>
              
              {/* --- MODIFIED: Removed motion, hover, and transition --- */}
              <div
                className="text-center p-4 rounded-lg bg-secondary/20 border border-secondary/30"
              >
                <Phone className="h-8 w-8 text-cyber-blue mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
              </div>
              
              {/* --- MODIFIED: Removed motion, hover, and transition --- */}
              <div
                className="text-center p-4 rounded-lg bg-secondary/20 border border-secondary/30"
              >
                <MapPin className="h-8 w-8 text-cyber-purple mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          {/* --- MODIFIED: Removed motion wrapper and cyber-border --- */}
          <div
            className="bg-card p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Connect on Social Platforms</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((link) => (
                // --- MODIFIED: Removed motion wrapper ---
                <div
                  key={link.name}
                  className="text-center"
                >
                  <Button
                    onClick={() => window.open(link.url, '_blank')}
                    variant="outline"
                    // --- MODIFIED: Removed border, transition, and group ---
                    className="w-full h-auto flex-col space-y-3 p-6"
                  >
                    {/* --- MODIFIED: Removed transition --- */}
                    <link.icon className={`h-8 w-8 ${link.color}`} />
                    <div>
                      <div className="font-semibold">{link.name}</div>
                      <div className="text-xs text-muted-foreground">{link.description}</div>
                    </div>
                    {/* --- MODIFIED: Removed group-hover and transition --- */}
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          {/* --- MODIFIED: Removed motion wrapper --- */}
          <div
            className="text-center mt-12"
          >
            {/* --- MODIFIED: Removed cyber-border and gradient text --- */}
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're looking for cybersecurity expertise, full-stack development,
                I'm here to bring your vision to life with security-first approach.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button
                  onClick={() => window.open("https://www.linkedin.com/in/tummalapalliaravind/", '_blank')}
                  variant="outline"
                  // --- MODIFIED: Removed cyber-border ---
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}