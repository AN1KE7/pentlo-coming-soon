import { motion } from 'framer-motion'
import { Card, CardContent } from './components/ui/card'
import './index.css'

function App() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center p-4 sm:p-8 overflow-hidden bg-gradient-to-br from-white via-surface to-white">
      {/* Full-screen background glow container */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pentlo-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pentlo-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pentlo-green/3 rounded-full blur-3xl" />
      </div>

      {/* Main Card Container */}
      <Card className="relative z-10 w-full max-w-2xl px-6 py-12 sm:px-12 sm:py-16 flex flex-col items-center text-center">
        <CardContent className="flex flex-col items-center gap-8 p-0">
          
          {/* SVG Container with Glow */}
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
            {/* Rainbow Glow Layer */}
            <div className="pentlo-glow absolute inset-0 opacity-60" />
            
            {/* Glass Highlight */}
            <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl scale-110" />
            
            {/* Pentlo Builder SVG */}
            <img
              src="/pentlo-builder.svg"
              alt="Pentlo Builder - Construction worker building a colorful pentagon"
              className="relative z-10 w-72 sm:w-80 md:w-[420px] lg:w-[460px] h-auto drop-shadow-lg"
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

        </CardContent>
      </Card>
    </main>
  )
}

export default App
