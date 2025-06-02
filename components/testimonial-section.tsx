import { Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Dr. Daniel",
    company: "RAM Trucking Group LLC",
    website: "https://ramtruckingroup.com", 
    text: "Algonix delivered far beyond our expectations. They understood our vision from day one and translated it into a seamless digital product that our users love.",
    avatar: "/avatars/jane.jpg",
  },
  // {
  //   name: "Sandra",
  //   company: "Memory Pictures",
  //   website: "https://memorypicture.com", 
  //   text: "We were struggling to find a tech partner who truly cared about our growth—until we met Algonix. They treated our project like their own and consistently went the extra mile.",
  //   avatar: "/avatars/john.jpg",
  // },
  {
    name: "Sid",
    company: "Eaglytics Co",
    website: "https://eaglytics-co.com/", 
    text: "The team at Algonix brought clarity and structure to our chaotic startup phase. Their technical guidance and hands-on approach helped us launch faster and smarter.",
    avatar: "/avatars/emily.jpg",
  },
]

const bgGradients = [
  "from-purple-700/40 via-cyan-500/30 to-transparent",
  "from-pink-600/40 via-yellow-400/30 to-transparent",
  "from-cyan-600/40 via-purple-400/30 to-transparent",
]

export default function TestimonialSection() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-40 pointer-events-none z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle at 30% 30%, #a78bfa 0%, #06b6d4 100%)" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-30 pointer-events-none z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle at 70% 70%, #f472b6 0%, #facc15 100%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white flex items-center justify-center gap-3">
          <motion.span
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Sparkles className="text-cyan-400 drop-shadow-glow" size={36} />
          </motion.span>
          What Our Clients Say
          <motion.span
            initial={{ scale: 0.8, rotate: 10 }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
          >
            <Sparkles className="text-purple-400 drop-shadow-glow" size={36} />
          </motion.span>
        </h2>
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <div className="relative w-full min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -3 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, y: -40, scale: 0.95, rotate: 3 }}
                transition={{ duration: 0.6, type: "spring" }}
                className={`bg-gradient-to-br ${bgGradients[index % bgGradients.length]} rounded-xl p-8 border border-slate-800 shadow-2xl flex flex-col items-center text-center transition-all duration-300 relative`}
              >
                {/* Sparkle effect */}
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                >
                  <Sparkles className="text-cyan-300 drop-shadow-glow" size={32} />
                </motion.div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <motion.span
                      key={idx}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                        filter: [
                          "drop-shadow(0 0 4px #fde68a)",
                          "drop-shadow(0 0 8px #facc15)",
                          "drop-shadow(0 0 4px #fde68a)",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: idx * 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      <Star size={20} className="text-yellow-400 fill-yellow-400" />
                    </motion.span>
                  ))}
                </div>
                <motion.p
                  className="text-slate-100 mb-6 italic text-lg font-semibold"
                  initial={{ scale: 0.95, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  "{testimonials[index].text}"
                </motion.p>
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* <motion.img
                    src={testimonials[index].avatar}
                    alt={testimonials[index].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400 shadow-lg"
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  /> */}
                  <div className="text-left">
                    <div className="font-bold text-white text-base drop-shadow-glow">{testimonials[index].name}</div>
<div className="text-xs text-cyan-200">
                        <a
                          href={testimonials[index].website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-cyan-300 transition-colors"
                        >
                          {testimonials[index].company}
                        </a>
                      </div>                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <motion.button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-purple-700 text-white rounded-full p-2 transition-colors shadow-xl"
              style={{ transform: "translateY(-50%)" }}
              whileTap={{ scale: 0.85, rotate: -20 }}
              whileHover={{ scale: 1.1, backgroundColor: "#a78bfa" }}
            >
              <ChevronLeft size={28} />
            </motion.button>
            <motion.button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-cyan-700 text-white rounded-full p-2 transition-colors shadow-xl"
              style={{ transform: "translateY(-50%)" }}
              whileTap={{ scale: 0.85, rotate: 20 }}
              whileHover={{ scale: 1.1, backgroundColor: "#06b6d4" }}
            >
              <ChevronRight size={28} />
            </motion.button>
          </div>
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <motion.span
                key={i}
                className={`w-3 h-3 rounded-full border-2 border-cyan-400 transition-all duration-300 ${
                  i === index ? "bg-cyan-400 shadow-[0_0_8px_2px_#06b6d4]" : "bg-slate-800"
                }`}
                animate={i === index ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{ repeat: i === index ? Infinity : 0, duration: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}