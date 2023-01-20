import styles from './Picture.module.scss'

type Props  = {
  className?: string
}
const Picture = ({ className } : Props) => {
  return(
    <div className={`${styles.picture} ${className}`}>
      hola
    </div>
  )
}
export default Picture