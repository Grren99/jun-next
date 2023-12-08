import styels from '../css/insertBtn.module.css'
import { FaPen } from "react-icons/fa";
import { TfiAlignJustify } from "react-icons/tfi";
type Info = {
    Title : string
    Category : string[]
}

export default function InsertBtn({Title, Category} : Info){
    return(
        <div className={styels.container}>
            <div className={styels.inputBox}>
                <FaPen />
                <input className={styels.input}type="button" value={Title}/>
            </div>
            <div className={styels.categoryContainer}>
                {Category.map((cat, index) => (
                    <span key={index} className={styels.category}>{cat}</span>
                ))}
            </div>
            <div className={styels.rigthBtnContainer}>
                <input className={styels.rightBtn} type='button' value="전체" />
                
                <input className={styels.rightBtn} type='button' value="최신순"/>
            </div>
        </div>
    )
}