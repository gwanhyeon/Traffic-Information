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
        board_contents:'',
        board_author: ''
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
                board_contents : res.data[0].board_contents,
                board_author: res.data[0].board_author
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
    // 수정하기 변경
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }
    // 내용 변경
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    // 수정하여 저장 업데이트
    componentDidUpdate(prevProps, prevState, body) {
        const { board_title, board_contents, board_id } = this.props;
        if(!prevState.editing && this.state.editing) {
          this.setState({
            board_title: board_title,
            board_contents: board_contents
          })
        }
        // 수정하여 보내기 (server, db)
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

        console.log("auth가 잘 돌아가는가",auth.user.user_name);
        console.log("보드 리드의 state를 봐보자", this.state.board_author);

        // 글쓴이 = 로그인 유저
        if(auth.user.user_name == this.state.board_author) {
            // 수정할때
            if (editing) {
            return (
                <form style={{margin: 'auto', width: '50%', marginTop: '50px'}}>
                <h3 className="" style={{marginTop: '10px',  fontSize: '2rem'}}>수정하기</h3>
                <hr/>
                <h4 style={{marginBottom: '2px',  fontSize: '1.5rem'}}>title</h4>
                {/* 글 제목 수정 */}
                <input
                    value={this.state.board_title}
                    className="form-control" 
                    style = {{width: '100%'}}
                    name="board_title"
                    placeholder="제목"
                    onChange={this.handleChange}
                  />
                <h4 style={{marginBottom: '2px',  fontSize: '1.5rem'}}>content</h4>
                {/* 글 내용 수정 */}
                <input
                    value={this.state.board_contents}
                    className="form-control"
                    style = {{width: '100%', height: '300px'}}
                    name="board_contents"
                    placeholder="내용"
                    onChange={this.handleChange}
                  />
                <hr/>
                <button onClick={this.handleToggleEdit} className="btn btn-primary" style={{float: 'left',  fontSize: '1.5rem'}}>적용</button>
               
                </form>  
            );
          }
          // 수정 아닐때
        return(
            <form style={{margin: 'auto', width: '50%', marginTop: '50px'}}>
                <h4 style={{marginBottom: '2px',  fontSize: '1.5rem'}}>title</h4>
                <p  name="board_title"  className="form-control" style = {{width: '100%'}}>
                {/* 글 제목 */}
                {this.state.board_title}
                </p>
                <p/>
                <h4 style={{marginBottom: '2px',  fontSize: '1.5rem'}}>content</h4>
                <p name="board_contents" className="form-control" style = {{width: '100%', height: '300px'}}>
                {/* 글 내용 */}
                {this.state.board_contents}
                </p>
                <hr/>
                <button onClick={this.handleToggleEdit} className="btn btn-primary" style={{float: 'left',  fontSize: '1.5rem'}}>수정</button>
                <button onClick={this.handleDelete} className="btn btn-primary" style={{float: 'left',  fontSize: '1.5rem'}}> 삭제 </button>
            </form>
        )
    // 글쓴이 != 로그인 유저
    } else if(auth.isAuthenticated) {
        return(
            <form style={{margin: 'auto', width: '50%', marginTop: '50px'}}>
                <h4 style={{marginBottom: '2px',  fontSize: '1.5rem'}}>title</h4>
                <p  name="board_title"  className="form-control" style = {{width: '100%'}}>
                {/* 글 제목 */}
                {this.state.board_title}
                </p>
                <p/>
                <h4 style={{marginBottom: '2px',  fontSize: '1.5rem'}}>content</h4>
                <p name="board_contents" className="form-control"style = {{width: '100%', height: '300px'}} >
                {/* 글 내용 */}
                {this.state.board_contents}
                </p>
                <hr/>
            </form>
        )
    // 서비스 이용 불가 (로그인 X)
    } else {
        return(
            <h3 className="" style={{marginTop: '10px',  fontSize: '1.5rem'}}> 로그인 후 서비스 이용 가능합니다. </h3>
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