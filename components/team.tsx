'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: "Andrea Faith Alimorong",
    role: "Cloud Engineer",
    image: "team/dev2.jpg?height=400&width=400",
    bio: "Specializing in cloud infrastructure and distributed systems",
    social: {
      github: 'https://github.com/andreafaith',
      linkedin: 'https://www.linkedin.com/in/andreafaithalimorong/',
      twitter: 'https://x.com/wearedafiph'
    }
  },
  {
    name: "Java Jay Bartolome",
    role: "Software Engineer",
    image: "team/dev1.jpg?height=400&width=400",
    bio: "Full-stack developer with expertise in blockchain technology",
    social: {
      github: 'https://github.com/TadashiJei',
      linkedin: 'https://www.linkedin.com/in/java-jay-bartolome/',
      twitter: 'https://x.com/wearedafiph'
    }
  },
  {
    name: "Jean Carlo San juan",
    role: "Software Engineer",
    image: "/team/dev3.jpg?height=400&width=400",
    bio: "Smart contract specialist and DeFi protocol developer",
    social: {
      github: 'https://github.com/jeancarlo-schmitz',
      linkedin: 'https://www.linkedin.com/in/jean-carlo-san-juan-a52093244/',
      twitter: 'https://x.com/wearedafiph',
    }
  }
]

export default function Team() {
  return (
    <section className="py-24 bg-black/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
            Meet Our Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate individuals working together to bridge the gap between traditional agriculture and decentralized finance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border-green-900/50 backdrop-blur-sm hover:border-green-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="aspect-square rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-green-900/20 to-black">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.bio}</p>
                  <div className="flex gap-4 justify-center">
                    <a href={member.social.github} className="text-gray-400 hover:text-green-400 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-green-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-green-400 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

