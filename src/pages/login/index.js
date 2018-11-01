import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox,Input,Button } from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
    render(){
        const { loginStatus } =this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={ (input) => { this.account=input}}></Input>
                        <Input placeholder='密码' type='password' innerRef={(input) => {this.password=input}}></Input>
                        <Button onClick={ () => {this.props.handleLogin(this.account,this.password)}}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login','login'])
});
const mapDispatchToProps = (dispatch) => ({
    handleLogin(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
    }
})

export default connect (mapStateToProps,mapDispatchToProps)(Login);