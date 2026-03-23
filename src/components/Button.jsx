import { motion } from 'framer-motion'

export default function Button({ children, variant = 'fire', href, onClick, className = '', icon: Icon }) {
  const cls = variant === 'fire' ? 'btn-fire' : variant === 'mint' ? 'btn-mint' : 'btn-outline-fire'
  const content = <><span className="flex items-center gap-2">{Icon && <Icon size={15} />}{children}</span></>
  if (href) return <motion.a href={href} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className={`${cls} ${className}`}>{content}</motion.a>
  return <motion.button onClick={onClick} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className={`${cls} ${className}`}>{content}</motion.button>
}
