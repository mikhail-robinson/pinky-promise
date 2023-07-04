import { motion, AnimationControls } from 'framer-motion'

interface Props {
  broken: AnimationControls
}

function PromiseBroken(props: Props) {
  const { broken } = props

  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        animate={broken}
        className="relative top-1/2 left-50 "
      >
        <img
          className="absolute z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/promiseBroken.svg"
          alt="promise"
          aria-label="Promise"
        />
      </motion.div>
    </div>
  )
}

export default PromiseBroken
