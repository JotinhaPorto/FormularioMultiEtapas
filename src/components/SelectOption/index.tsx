import * as C from './style'
type Props = {
    title: string;
    subtitle: string;
    selected: boolean;
    onclick: () => void
}
export const SelectOption = ({ title, subtitle, selected, onclick }: Props) => {
    return (
        <C.Container selected={selected} onClick={onclick}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </C.Container>
    )
}