import React,{ PureComponent } from 'react';
import { DetailWrapper,Header,Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
    render(){
        // console.log(this.props.match.params)
        return (
            <div>
                <DetailWrapper>
                    <Header>{this.props.title}</Header>
                    <Content>
                        <img src={this.props.imgUrl} alt=''/>
                        {/* {this.props.content} */}
                        <div dangerouslySetInnerHTML={{__html: this.props.content}}></div> 
                    </Content>
                </DetailWrapper>
            </div>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content']),
    imgUrl: state.getIn(['detail','imgUrl'])
});
const mapDispatchToPorpos = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapStateToProps,mapDispatchToPorpos)(withRouter(Detail));