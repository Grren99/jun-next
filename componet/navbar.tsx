'use client'

import styels from '../css/navbar.module.css'
import { usePathname } from 'next/navigation'
import  {MdLogout, MdNotifications, MdOutlineChat, MdPublic, MdSearch} from 'react-icons/md';
export default function NavBar(){
    
    const pathname = usePathname();
    const title = pathname.split("/").pop()
    let newTitle;
    switch(title){
        case "questions" : 
        newTitle = "질문" 
        break;
        case "knowledge" :
        newTitle = "지식"
        break;
        case "community " :
        newTitle = "커뮤니티"
        break;
        case "events" :
        newTitle = "이벤트"
        break;
        case "jobs" :
        newTitle = "일거리"
        break;
        case "notice" :
        newTitle = "공지사항"
        break;
    }
    return(
        <div className={styels.container}>
            <div className={styels.title}>{newTitle} 게시판</div>
            <div className={styels.menu}>
                <div className={styels.search}>
                    <MdSearch />
                    <input type="text" placeholder='Search...' className={styels.input}/>
                </div>
                <div className={styels.icons}>
                    <MdLogout size={20}/>
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
            
        </div>
    )
}