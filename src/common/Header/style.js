import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div `
    z-index:1;
    height:58px;
    border-bottom: 1px solid #f0f0f0;
    position:relative;
`
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100px;
    height:58px;
    display:block;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav = styled.div `
    width:945px;
    height:100%;
    margin:0 auto;
`
export const NavItem = styled.div `
    line-height:58px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        border-radius:15px;
        text-align:center;
        line-height:30px;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:10px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &.slide-enter{
        width:160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
    &::placeholder {
        color:#999;
    }
    &.focused{
        width:240px;
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:58px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color: #787878;
`
export const SearchInfoSwitch = styled.div`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin {
        display:#333;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition: all .2s ease-in;
        transform-origin:center center;
    }
    &:hover{
        color:black;
    }
`
export const SearchInfoList = styled.div`
    over-flow:hidden;
`
export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    line-height:20px;
    padding:0 5px;
    margin-right:10px;
    margin-bottom:15px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
`
export const Addition = styled.div `
    position:absolute;
    top:0;
    right:0;
    height:58px;
`
export const Button = styled.div `
    float:right;
    margin-top:10px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ea6f5a;
    font-size:15px;
    &.reg {
        color:#ea6f5a;
    }
    &.writing {
        color:#fff;
        background:#ea6f5a;
    }
`