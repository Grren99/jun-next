'use client'

import styles from '../css/sider.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Sider(){

    const menuItems = [
            {
                title : "Q&A",
                link : "/home/questions"
            },
            {
                title : "지식",
                link : "/home/knowledge"
            },
            {
                title : "커뮤니티",
                link : "/home/community"
            },
            {
                title : "이벤트",
                link : "/home/events"
            },
            {
                title : "JOBS",
                link : "/home/jobs"
            },            
            {
                title : "공지사항",
                link : "/home/notice"
            },
    ]
    const pathname = usePathname();
    console.log(pathname)
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.user}>
                    <Image className={styles.userImage} src="/developer.png" alt="" width="50" height="50"></Image>
                    <div className={styles.userDetail}>
                        <span className={styles.username}>강코</span>
                        <span className={styles.userTitle}>사이트 관리자</span>
                    </div>
                </div>
                <ul className={styles.list}>
                    {menuItems.map(cat => (
                        <li className={`${styles.cat} & ${pathname === cat.link && styles.active}`} key={cat.title}>
                            <Link href={cat.link}>
                                {cat.title}
                                </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}