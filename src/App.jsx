import { motion } from 'framer-motion'
import './index.css'

function App() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center p-4 sm:p-8 overflow-hidden">
      
      {/* Full-screen Rainbow Glow - covers entire viewport */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none flex items-center justify-center">
        <div className="pentlo-glow w-[150vmax] h-[150vmax] opacity-50" />
      </div>

      {/* Content - directly on rainbow glow */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8">
        
        {/* SVG Container with floating animation */}
        <motion.div
          className="relative"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {/* Pentlo Builder SVG */}
          <img
            src="/pentlo-builder.svg"
            alt="Pentlo Builder - Construction worker building a colorful pentagon"
            className="relative z-10 w-72 sm:w-80 md:w-[420px] lg:w-[460px] h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-4 max-w-lg">
          {/* Coming Soon Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Coming Soon
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-text-secondary font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="font-semibold text-text-primary">Pentlo</span> is being built — the all-in-one coordination platform for the modern world.
          </motion.p>

          {/* Subtle accent line */}
          <motion.div
            className="w-16 h-1 rounded-full bg-gradient-to-r from-pentlo-purple via-pentlo-blue to-pentlo-green mt-2"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.9,
              ease: "easeOut",
            }}
          />
        </div>

      </div>
    </main>
  )
}

export default App
