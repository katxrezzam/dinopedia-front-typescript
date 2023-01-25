import { ReactNode } from 'react'
import styles from './Picture.module.scss'

type Props  = {
  className?: string,
  children?: ReactNode
}
const Picture = ({ className, children } : Props) => {
  return(
    <div className={`${styles.picture} ${className}`}>
      {children}
    </div>
  )
}
export default Picture