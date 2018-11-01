import styled from 'styled-components';

export const DetailWrapper = styled.div`
    overflow:hidden;
    width:620px;
    margin:0 auto;
    padding-bottom:100px;
`
export const Header = styled.div`
    margin: 50px 0 20px 0;
    line-height:44px;
    font-size:34px;
    color:#333;
    font-weight:bold;
`
export const Content = styled.div`
    color:#2f2f2f;
    img {
        width:100%;
    }
    p {
        text-indent:2em;
        margin: 0 0 30px;
        display: block;
        line-height:25px;
        // margin-block-start: 1em;
        // margin-block-end: 1em;
        // margin-inline-start: 0px;
        // margin-inline-end: 0px;
        font-weight: 400;
        font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    }
`