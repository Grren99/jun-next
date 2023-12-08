import styels from '../css/banner.module.css'

type Info = {
    Title : string;
    subTitle : string;
}


export default function Banner({Title , subTitle} : Info){

    return(
        <div className={styels.container}>
            <div>
                <span className={styels.title}>{Title}</span>
                <br />
                <span className={styels.subTitle}>{subTitle}</span>
            </div>
        </div>
    )
}