import { motion } from "framer-motion"
import { Car } from "lucide-react"

export default function BouncingCar() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -80, 0] }} // Increased bounce height (-80)
        transition={{
          duration: 0.8, // Speed of one bounce
          repeat: Infinity, // Infinite loop
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <Car className="h-20 w-20 text-primary" />
      </motion.div>
    </div>

  )
}
