import { motion } from "framer-motion";

export default function AnimatedGraph() {
  return (
    <div className="animated-graph">
      <div className="graph-glow" />

      <svg
        className="graph-svg"
        viewBox="0 0 1000 420"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="fluxGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="20%" stopColor="#22d3ee" />
            <stop offset="65%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0 300
             C80 285 100 325 175 270
             S280 145 355 220
             S450 335 525 235
             S635 95 710 175
             S820 275 1000 90"
          fill="none"
          stroke="url(#fluxGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 1,
          }}
          transition={{
            duration: 2.5,
            ease: "easeOut",
          }}
        />

        <motion.path
          d="M0 345
             C120 315 180 350 250 305
             S390 250 460 295
             S560 350 640 260
             S790 200 1000 240"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.18"
          strokeWidth="1"
          animate={{
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M0 250
             C100 230 150 275 230 225
             S360 115 440 190
             S550 285 625 175
             S770 100 1000 160"
          fill="none"
          stroke="#8b5cf6"
          strokeOpacity="0.12"
          strokeWidth="1"
          animate={{
            x: [20, -20, 20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      <motion.div
        className="graph-node node-one"
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="graph-node node-two"
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 0.8,
        }}
      />

      <motion.div
        className="graph-node node-three"
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1.5,
        }}
      />

      <div className="graph-stat stat-one">
        <span>ESTADO</span>
        <strong>ONLINE</strong>
      </div>

      <div className="graph-stat stat-two">
        <span>ACTIVIDAD</span>
        <strong>98.4%</strong>
      </div>
    </div>
  );
}