import styled from 'styled-components';

export const LoginWrapper =styled.div`
    z-index:0;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:58px;
    background:#eee;
`
export const LoginBox = styled.div`
    width:400px;
    height:500px;
    margin: 80px auto;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    padding-top:20px;
`
export const Input = styled.input`
    display:block;
    width:300px;
    height:50px;
    line-height:50px;
    margin:20px auto;
    padding:0 10px;
    color:#777;
`
export const Button = styled.div`
    width:300px;
    height:50px;
    background:#187cb7;
    line-height:50px;
    border-radius:15px;
    color:#fff;
    text-align:center;
    margin:20px auto;
    cursor:pointer;
`