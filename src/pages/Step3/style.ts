import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    p{
        color: #b1b3f4;
    }
    button{
        margin-top: 30px;
        width: max-content;
        padding: 10px 20px;
        border-radius: 10px;
        background-color:#26cc8a;
        color: white;
        outline: none;
        border: 1px solid #26cc8a;
        cursor: pointer;
    }
`
export const Title = styled.div`
   border-bottom:1px solid #b1b3f4;
   h1{
    padding: 30px 0px;
        color: white;
    }
    p{
        padding-bottom: 35px;
        color: #b1b3f4;
    }
`
export const Label = styled.label`
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    color: white;
    input{
        outline: none;
        margin-top: 5px;
        padding: 15px;
        border: 2px solid  #26cc8a;
        border-radius: 10px;
        background-color: transparent;
        color: white;
    }

`
export const Buttons = styled.div`
    display: flex;
    button{
        margin-right: 10px;
        margin-top: 30px;
        width: max-content;
        padding: 20px 40px;
        border-radius: 30px;
        background-color:#26cc8a;
        color: white;
        outline: none;
        border: 1px solid #26cc8a;
        cursor: pointer;
    }
    button:nth-child(1){
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
        background-color: transparent;
        border: transparent;
    }
`