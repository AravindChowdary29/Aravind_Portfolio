import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, GraduationCap, School, Building } from 'lucide-react'

export default function About() {
  const personalInfo = [
    {
      label: "Phone Number",
      value: "+91 89196 78462",
      icon: Phone,
      color: "text-blue-500"
    },
    {
      label: "Location",
      value: "Khammam, Telangana , India",
      icon: MapPin,
      color: "text-green-500"
    },
    {
      label: "Email",
      value: "aravindn959@gmail.com",
      icon: Mail,
      color: "text-red-500"
    },
    {
      label: "College",
      value: "KL University",
      icon: GraduationCap,
      color: "text-purple-500"
    },
    {
      label: "School",
      value: "New Vision",
      icon: School,
      color: "text-orange-500"
    },
    {
      label: "Intermediate",
      value: "Sri Chaithanya",
      icon: Building,
      color: "text-cyan-500"
    },
    {
      label: "Degree",
      value: "Bachelor of Technology",
      icon: GraduationCap,
      color: "text-indigo-500"
    },
    {
      label: "Branch",
      value: "CSE (Cyber Security & Blockchain)",
      icon: Building,
      color: "text-pink-500"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
        </motion.div>

        {/* --- MODIFIED LAYOUT: Changed from 3 columns to a 5-column grid for better balance --- */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* --- NEW: Large Profile Image Section (Left) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            {/* Make sure 'profile.jpg' is in your /public folder */}
            <img
              src="/profile.jpg"
              alt="Tummalapalli Aravind"
              className="w-full h-auto object-cover rounded-2xl shadow-xl border-4 border-primary/20"
            />
          </motion.div>

          {/* --- MODIFIED: Text & Details Section (Right) --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 flex flex-col gap-8"
          >
            {/* --- NEW: Separate Bio Frame --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card p-8"
            >
              <p className="text-muted-foreground leading-relaxed">
                Hello 👋, I am Tummalapalli Aravind, a B Tech student specializing in Cyber Security and Block Chain Technology in the Computer Science and Engineering (CSE) branch.
              </p>
            </motion.div>

            {/* --- Personal Information Grid (Moved here) --- */}
            <div className="grid md:grid-cols-2 gap-6">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  // Stagger the animation, starting after the bio card fades in
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-background/50 ${info.color}`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}