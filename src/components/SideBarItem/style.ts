import styled from "styled-components";
type ActiveProps = {
    active: boolean;
}
export const Container = styled.div`
   margin: 30px 0px;
    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`
export const Title = styled.div`
flex: 1;
margin-right: 20px;
    h1{
        margin-bottom: 5px;
        text-align: right;
        color: white;
        font-size: 15px;
    }
    p{
        text-align: right;
        font-size: 13px;
        color: #B8B8D4;
    }
`
export const Icon = styled.div<ActiveProps>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#494A7C'};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Pointer = styled.div<ActiveProps>`
    width: 12px;
    height: 12px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#25CD89' : '#02044A'} ;
`