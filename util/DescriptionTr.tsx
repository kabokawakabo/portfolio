import mystyles from "../styles/mystyle.module.css";


type DescriptionTrProps = {
    category: string
    ans: string
}
export const DescriptionTr: React.FC<DescriptionTrProps> = ({
    category,
    ans
} )=>{
    return (
        <tr className={mystyles.tr}>
            <td className={mystyles.description_category}>{category}</td>
            <td>{ans}</td>
        </tr>
    )
}
