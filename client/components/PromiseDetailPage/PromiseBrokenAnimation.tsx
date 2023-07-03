import { motion, AnimationControls } from 'framer-motion'

interface Props {
  controls: AnimationControls
}

function PromiseBroken(props: Props) {
  const { controls } = props

  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        animate={controls}
        className="relative top-1/2 left-50 "
      >
        <img
          className="absolute z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="./promiseBroken.svg"
          alt="promiseBrokenSvg"
          aria-label="Promise broken"
        />
      </motion.div>
    </div>
  )
}

export default PromiseBroken

// /home/learner/workspace/pinky-promise/public/promiseBroken.svg
