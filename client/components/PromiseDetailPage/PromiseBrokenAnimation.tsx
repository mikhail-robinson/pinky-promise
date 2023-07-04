import { motion, AnimationControls } from 'framer-motion'

interface Props {
  brokenHand: AnimationControls
  brokenPinky: AnimationControls
}

function PromiseBroken(props: Props) {
  const { brokenHand, brokenPinky } = props

  return (
    <div className="relative w-48 h-48 border-solid border-white border-4 mx-auto">
      <motion.div initial={{ scale: 0 }} animate={brokenHand}>
        <img
          className="absolute z-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid border-white border-4"
          src="/brokenHand.svg"
          alt="promise"
          aria-label="Promise"
        />
      </motion.div>
      <motion.div initial={{ scale: 0 }} animate={brokenPinky}>
        <img
          className="absolute top-10 transform -translate-x-1/2 -translate-y-1/2 
          border-solid border-white border-4"
          src="/brokenPinky.svg"
          alt="promise"
          aria-label="Promise"
        />
      </motion.div>
    </div>
  )
}

export default PromiseBroken
