

type MarginDivProps = {
    tRem: number
}
export const MarginDiv: React.FC<MarginDivProps> = ({
    tRem
})=>{
    const style = ({
        margin: `${tRem}rem 0 0 0`,
    })

    return (
        <div style={style} />
    )
}