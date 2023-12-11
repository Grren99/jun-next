import Banner from "@/componet/banner"
import InsertBtn from "@/componet/pageCategory"

export default function Community(){
    return(
        <div>
            <Banner Title="Q&A" subTitle="좋은 질문과 답변으로 동료의 시간을 아껴주세요."/>
            <InsertBtn  Title="질문하기" Category={["기술", "커리어" , "기타" , "전체"]}/>
        </div>
    )
}