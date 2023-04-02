import Image from "next/image";


import styles from "../../styles/Home.module.css";
import mystyles from "../../styles/mystyle.module.css";


import { ChangeReturnToBrFromString } from "../../util/AddBrFromString";

import { LinkOrSpanFromClickUrl } from "./LinkOrSpanFromClickUrl";
import { WorkTableInfo } from "./WorkTableInfo";



type WorkImageProps = {
    imageUrl: string
    title: string
}
const WorkImage: React.FC<WorkImageProps> = ({
    imageUrl,
    title
})=>{
    return (
        <Image
            loader={()=>imageUrl}
            width="400"
            height="350"
            src="me.png"
            alt={title + "_画像"} />
    )
}



type DescriptionDivProps = {
    description: string
}
const DescriptionDiv: React.FC<DescriptionDivProps> = ({
    description
})=>{
    return (
        <div>
            <h4 className={mystyles.work_description_title}>説明:</h4>
            <p className={mystyles.no_margin}>
                <ChangeReturnToBrFromString text={description} />
            </p>
        </div>
    )
}




type WorkCardProps = {
    workData: WorkData
}
const WorkCard: React.FC<WorkCardProps> = ({
    workData
})=>{
    const click_url = workData.URL;
    const image_url = workData.imageURL;
    const work_name = workData.title;
    const description = workData.description;

    return (
        <LinkOrSpanFromClickUrl
            clickUrl={click_url}
            title={work_name}
        >
            <WorkImage
                imageUrl={image_url}
                title={work_name} />
            <WorkTableInfo workData={workData} />
            <DescriptionDiv description={description} />
        </LinkOrSpanFromClickUrl>
    )
}





type WorkCardDivProps = {
    worksData: GasWorksData
}
export const WorkCardDiv: React.FC<WorkCardDivProps> = ({
    worksData
})=>{
    return (
        <div className={styles.grid}>
            {worksData.data.map((d: WorkData, i)=>{
                return (<WorkCard key={i} workData={d} />)
            })}
        </div>
    )
}