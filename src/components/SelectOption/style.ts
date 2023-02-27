import styled from "styled-components";
type SelectedProps = {
    selected: boolean
}
export const Container = styled.div<SelectedProps>`
    margin-top: 20px;
    border: 2px solid ${props => props.selected ? '#25CD89' : '#16195C'};
    border-radius: 20px;
    padding: 20px 20px;
    cursor: pointer;
   h1{
    font-size: 20px;
        color: white;
    }
    p{
        font-size: 15px;
    }
    :hover{
        border:1px solid #496459;
    }
`