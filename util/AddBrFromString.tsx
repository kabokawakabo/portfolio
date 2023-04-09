import { Fragment } from "react";

type ChangeReturnToBrFromStringProps = {
    text: string;
};
export const ChangeReturnToBrFromString: React.FC<
    ChangeReturnToBrFromStringProps
> = ({ text }) => {
    const split_return = text.split("\n");

    return (
        <>
            {split_return.map((d, i) => {
                return (
                    <Fragment key={i}>
                        {d} <br />
                    </Fragment>
                );
            })}
        </>
    );
};
