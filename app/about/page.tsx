"use client"

import { CheckCircle, Users, Code, Award } from "lucide-react"
import ContactCTA from "@/components/contact-cta"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

// CountUp component for animating numbers
function CountUp({ value }: { value: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      let startValue = 0
      const endValue = Number.parseInt(value.replace(/\D/g, ""))
      const duration = 2000
      const increment = Math.ceil(endValue / (duration / 16))

      const timer = setInterval(() => {
        startValue += increment
        if (startValue > endValue) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          // Add the "+" back if it exists in the original value
          setDisplayValue(value.includes("+") ? startValue + "+" : startValue.toString())
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-4xl font-bold mb-2">
      {displayValue}
    </div>
  )
}

export default function AboutPage() {
  const teamRef = useRef(null)
  const valuesRef = useRef(null)
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 })
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 })

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "12", label: "Team Members" },
    { icon: <Code className="h-6 w-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Award className="h-6 w-6" />, value: "95", label: "Client Satisfaction" },
  ]

  const teamMembers = [
    { name: "Alex Johnson", role: "Founder & CEO" },
    { name: "Sarah Chen", role: "CTO" },
    { name: "Miguel Rodriguez", role: "Lead Developer" },
    { name: "Priya Sharma", role: "UX/UI Designer" },
    { name: "David Kim", role: "AI Specialist" },
    { name: "Olivia Wilson", role: "Project Manager" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full backdrop-blur-sm border border-purple-500/20 mb-4">
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Our Story
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Algonix Technologies</h1>
          <p className="text-slate-300 text-lg">
            A passionate team of tech enthusiasts building innovative solutions for businesses of all sizes.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-xl blur-xl opacity-50"></div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-lg ${
                        i === 4
                          ? "bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center"
                          : "bg-gradient-to-br from-slate-800 to-slate-700"
                      } ${
                        i === 4
                          ? "col-span-1 row-span-1"
                          : i % 3 === 0
                            ? "col-span-1 row-span-2"
                            : "col-span-1 row-span-1"
                      }`}
                    >
                      {i === 4 && <span className="text-2xl font-bold">A</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Our Journey</h2>
            <p className="text-slate-300">
              Founded in 2020, Algonix Technologies began as a small team of developers with a shared vision: to make
              cutting-edge technology accessible to businesses of all sizes. What started as a three-person operation
              has now grown into a dynamic team of passionate tech specialists.
            </p>
            <p className="text-slate-300">
              We believe that technology should empower businesses, not complicate them. Our approach combines technical
              expertise with a deep understanding of business needs to deliver solutions that drive real results.
            </p>

            <div className="space-y-4 mt-6">
              {[
                "Small team with big capabilities",
                "Personalized approach to every project",
                "Transparent communication throughout the process",
                "Commitment to delivering high-quality solutions on time",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-400/20 flex items-center justify-center mx-auto mb-4 text-cyan-400"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  {stat.icon}
                </motion.div>
                <CountUp value={stat.value} />
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-slate-300">The talented individuals who bring your ideas to life.</p>
          </div>

          <motion.div
            ref={teamRef}
            variants={containerVariants}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden group"
              >
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-400/30 flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-slate-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-slate-300">The principles that guide our work and relationships.</p>
          </div>

          <motion.div
            ref={valuesRef}
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Innovation",
                description: "We constantly explore new technologies and approaches to solve complex problems.",
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients, treating their challenges as our own.",
              },
              {
                title: "Quality",
                description: "We never compromise on the quality of our work, no matter the project size.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6"
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-400/20 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {index + 1}
                  </span>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  )
}
