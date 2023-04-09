import mystyles from "../../styles/mystyle.module.css";

import { ChangeReturnToBrFromString } from "../../util/AddBrFromString";

type HistoryGroupProps = {
    title: string;
    description: string;
};
const HistoryGroup: React.FC<HistoryGroupProps> = ({ title, description }) => {
    return (
        <div className={mystyles.group}>
            <h2 className={mystyles.sub_title}>{title}</h2>
            <p className={mystyles.description}>
                <ChangeReturnToBrFromString text={description} />
            </p>
        </div>
    );
};

type HistoryDivProps = {
    historiesData: GasHistoriesData;
};
export const HistoryDiv: React.FC<HistoryDivProps> = ({ historiesData }) => {
    return (
        <div>
            {historiesData.data.map((d, i) => {
                const [title, description] = Object.values(d);
                return (
                    <HistoryGroup
                        key={i}
                        title={title}
                        description={description}
                    />
                );
            })}
        </div>
    );
};
