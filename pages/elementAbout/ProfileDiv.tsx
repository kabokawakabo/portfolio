
import Image from 'next/image';


import mystyles from "../../styles/mystyle.module.css";
import kabokawakaboPic from "../../public/kabokawakabo.jpeg";

import { DescriptionTr } from '../util/DescriptionTr';



const ProfileImage: React.FC<{}> = ()=>{
    return (
        <Image
            src={kabokawakaboPic}
            alt="profile image" 
            width="200"
            height="200"
            />
    )
}



type ProfileTableInfoProps = ProfileDivProps
const ProfileTableInfo: React.FC<ProfileTableInfoProps> = ({
    profileData
})=>{
    return (
        <table>
            {profileData.data.map((d,i)=>{
                const [category, ans, ...rest] = Object.values(d);
                return (
                    <DescriptionTr key={i}
                        category={category}
                        ans={ans} />
                )
            })}
        </table>
    )
} 




type ProfileDivProps = {
    profileData: GasProfilesData
}
export const ProfileDiv: React.FC<ProfileDivProps> = ({
    profileData
})=>{
    return (
        <div className={mystyles.group}>
            <h1 className={mystyles.sub_title}>人物紹介</h1>
            <ProfileImage />
            <ProfileTableInfo profileData={profileData} />
        </div>
    )
}