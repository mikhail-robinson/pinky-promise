import { motion, AnimationControls } from 'framer-motion'

interface Props {
  kept: AnimationControls
}

function PromiseKept(props: Props) {
  const { kept } = props

  return (
    <div className="absolute inset-0  pointer-events-none">
      <motion.div
        initial={{ scale: 0 }}
        animate={kept}
        className="relative top-1/2 left-50 "
      >
        <img
          className="absolute z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/promiseKeptAnimation.gif"
          alt="promise"
          aria-label="Promise"
        />
      </motion.div>
    </div>
  )
}

export default PromiseKept
