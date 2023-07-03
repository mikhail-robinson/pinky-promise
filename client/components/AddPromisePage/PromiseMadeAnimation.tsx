import { motion, AnimationControls } from 'framer-motion'

interface Props {
  controls: AnimationControls
}

function AnimationComponent(props: Props) {
  const { controls } = props

  return (
    <div className=" absolute inset-0  pointer-events-none">
      <motion.div
        initial={{ scale: 0 }}
        animate={controls}
        className="relative top-1/2 left-50 "
      >
        <img
          className="absolute z-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="explosion.gif"
          alt="confetti"
        />
        <img
          className="absolute z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="./promiseMade.svg"
          alt="promiseMadeSvg"
          aria-label="Promise made"
        />
      </motion.div>
    </div>
  )
}

export default AnimationComponent
