import { motion, AnimationControls } from 'framer-motion'

interface Props {
  broken: AnimationControls
}

function PromiseBroken(props: Props) {
  const { broken } = props

  return (
    <div className="absolute inset-0  pointer-events-none">
      <motion.div initial={{ scale: 0 }} animate={broken} className="relative">
        <img
          className="absolute z-1 top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1"
          src="/promiseBrokenAnimation.gif"
          alt="promise"
          aria-label="Promise"
        />
      </motion.div>
    </div>
  )
}

export default PromiseBroken
