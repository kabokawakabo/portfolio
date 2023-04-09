import { DescriptionTr } from "../../util/DescriptionTr";

const hasJapaneseKeyData = (workData: WorkData) => {
    /// objのkeyに日本語を入れている場合、table表示をするデータと決めている

    return Object.entries(workData).filter((d) => {
        // keyが日本語含むもののみ取り出す
        const match = d[0].match(/\w+/g);

        return match === null || match[0].length !== d[0].length;
    });
};

type WorkTableInfoProps = {
    workData: WorkData;
};
export const WorkTableInfo: React.FC<WorkTableInfoProps> = ({ workData }) => {
    const start_time = workData.start;
    const end_time = workData.end;

    const rest_data = hasJapaneseKeyData(workData);

    return (
        <table>
            {rest_data.map((d, i) => {
                const [category, ans] = d;
                return <DescriptionTr key={i} category={category} ans={ans} />;
            })}
            <DescriptionTr
                category="触った期間"
                ans={`${start_time} 〜 ${end_time}`}
            />
        </table>
    );
};
