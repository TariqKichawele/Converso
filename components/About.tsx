'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    title: "Personalized Learning",
    description: "Your AI companion adapts to your learning style and pace, creating a truly personalized educational experience.",
    icon: "/icons/personalize.svg"
  },
  {
    title: "Natural Conversations",
    description: "Learn through natural, voice-based conversations that make education feel more engaging and less formal.",
    icon: "/icons/chat.svg"
  },
  {
    title: "Multiple Subjects",
    description: "Choose from a variety of subjects and topics, each with its own specialized AI companion.",
    icon: "/icons/subjects.svg"
  },
  {
    title: "Progress Tracking",
    description: "Track your learning journey with detailed analytics and session history.",
    icon: "/icons/progress.svg"
  }
]

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Our AI Companions?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re revolutionizing education by making learning more engaging, personalized, and accessible through AI-powered conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-4xl border border-border"
            >
              <div className="w-16 h-16 mb-6 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 