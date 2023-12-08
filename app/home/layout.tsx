
import Sider from '@/componet/sider'
import NavBar from '@/componet/navbar'
import styles from '../../css/home.module.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sider />
        </div>
        <div className={styles.content}>
            <NavBar />
            {children}
        </div>
    </div>
  )
}
