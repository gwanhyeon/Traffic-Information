import React, { Component } from 'react';
import Board from './Board';
import axios from 'axios';
import BoardItem from './BoardItem';
import { loginUser } from '../actions/authentication';
import { connect } from 'react-redux';


class BoradRead extends Component {
    state = {
        board_id : '',
        board_title:'',
        board_contents:''
    }
    data_store = null;

    // 목록에서 findOne() 가져오기
    componentDidMount = () => {
        console.log("this.props" ,this.props.dataFromParent);
        this.data_store = axios.get('user/board_read/'+this.props.dataFromParent)
        .then(res=> {
            this.data_store = res.data;
            this.setState({
                board_id : res.data[0].board_id,
                board_title : res.data[0].board_title,
                board_contents : res.data[0].board_contents
            })
            return res;
        });
    }
    // 삭제
    handleDelete = () => {
        console.log("state알아보기", this.state);
        axios.delete('user/board_delete/'+ this.state.board_id)
        .then(res => {
            console.log(res.data);
        });
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    componentDidUpdate(prevProps, prevState, body) {
        const { board_title, board_contents, board_id } = this.props;
        if(!prevState.editing && this.state.editing) {

          this.setState({
            board_title: board_title,
            board_contents: board_contents
          })
        }
        // 수정하기
        if (prevState.editing && !this.state.editing) {
            body = this.state;
            axios.put('user/board_edit/'+this.state.board_id, body)
            .then(res => {
                console.log(res.data);
            })
            
        }
    }

    render () {
        const { editing } = this.state;
        const {auth} = this.props;

        console.log("auth가 잘 돌아가는가",auth);

        if(auth.isAuthenticated) {
            if (editing) { // 수정모드
            return (
                <form style={{margin: 'auto', width: '50%', marginTop: '50px'}}>
                <h3 className="text-success" style={{marginTop: '10px', fontFamily: 'monospace', fontSize: '2vw'}}>수정하기</h3>
                <hr/>
                <h4 style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: '1.5vw'}}>title</h4>

                <input
                    value={this.state.board_title}
                    className="form-control" 
                    style = {{width: '100%'}}
                    name="board_title"
                    placeholder="제목"
                    onChange={this.handleChange}
                  />
                <h4 style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: '1.5vw'}}>content</h4>
                <input
                    value={this.state.board_contents}
                    className="form-control"
                    style = {{width: '100%', height: '300px'}}
                    name="board_contents"
                    placeholder="내용"
                    onChange={this.handleChange}
                  />
                <hr/>
                <button onClick={this.handleToggleEdit} className="btn btn-primary" style={{float: 'left', fontFamily: 'monospace', fontSize: '1.5vw'}}>적용</button>
               
                </form>  
            );
          }
        return(
            <form style={{margin: 'auto', width: '50%', marginTop: '50px'}}>
                <h3 className="text-success" style={{marginTop: '10px', fontFamily: 'monospace', fontSize: '2vw'}}>자세히보기</h3>
                <hr/>
                <h4 style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: '1.5vw'}}>title</h4>
                <p  name="board_title"  className="form-control" style = {{width: '100%'}}>
                {this.state.board_title}
                </p>
                <p/>
                <h4 style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: '1.5vw'}}>content</h4>
                <p
                    // placeholder="내용"
                    name="board_contents"
                    className="form-control"
                    style = {{width: '100%', height: '300px'}}
                >
                {this.state.board_contents}
                </p>
                <hr/>
                <button onClick={this.handleToggleEdit} className="btn btn-primary" style={{float: 'left', fontFamily: 'monospace', fontSize: '1.5vw'}}>수정</button>
                <button onClick={this.handleDelete} className="btn btn-primary" style={{float: 'left', fontFamily: 'monospace', fontSize: '1.5vw'}}> 삭제 </button>
            </form>
        )
    } else {
        return(
            <h3 className="text-success" style={{marginTop: '10px', fontFamily: 'monospace', fontSize: '2vw'}}> 로그인 후 서비스 이용 가능합니다. </h3>
        )
        }
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(BoradRead)
// export default BoradRead;