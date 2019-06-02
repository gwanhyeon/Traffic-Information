import React, { Component } from 'react';
import Board from './Board';
import axios from 'axios';
import BoardItem from './BoardItem';
import { loginUser } from '../actions/authentication';
import { connect } from 'react-redux';
import '../css/Board.css';


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

                <div className="listStyle">
                <form>
                    <div className="edittitle">
                        <p>수정하기</p>
                        <span>내용을 수정합니다.</span>
                    </div>
                <div className="formspace">
                <h4 className="formh4">제목</h4>

                {/* 글 제목 수정 */}
                <input
                    value={this.state.board_title}
                    className="form-control" 
                    style = {{width: '100%'}}
                    name="board_title"
                    placeholder="제목"
                    onChange={this.handleChange}
                    style={{maxWidth:'1000px', fontSize:'1rem'}}
                  />

                </div>
                <h4 className="formh4">내용</h4>

                {/* 글 내용 수정 */}
                <input
                    value={this.state.board_contents}
                    className="form-control"
                    style = {{width: '100%', height: '300px'}}
                    name="board_contents"
                    placeholder="내용"
                    onChange={this.handleChange}
                    style={{maxWidth:'1000px', height:'300px', fontSize:'1rem'}}
                  />

                <button onClick={this.handleToggleEdit} className="btn btn-primary" style={{float: 'right',  fontSize: '1rem', margin:'30px 100px'}}>적용</button>

               
                </form> 
                </div> 
            );
          }
          // 수정 아닐때
        return(

            <form className="read">
                <h4 id="readh4" style={{margin:'0'}}>내용</h4>
                <p name="board_contents" className="form-control" id="readContents">

                {/* 글 내용 */}
                {this.state.board_contents}
                </p>
                <div className="btnClass" style={{float:'right'}}>
                <button onClick={this.handleToggleEdit} className="btn btn-primary" style={{margin:'0px 10px',  fontSize: '1rem'}}>수정</button>
                <button onClick={this.handleDelete} className="btn btn-primary" style={{  fontSize: '1rem'}}> 삭제 </button>
                </div>
            </form>
        )
    // 글쓴이 != 로그인 유저
    } else if(auth.isAuthenticated) {
        return(

            <div>
            <form className="read">
                <h4 id="readh4"style={{margin:'0'}}>내용</h4>
                <p name="board_contents" className="form-control" id="readContents">

                {/* 글 내용 */}
                {this.state.board_contents}
                </p>
            </form>
            </div>
        )
    // 서비스 이용 불가 (로그인 X)
    } else {
        return(

            <div className="read">
                <p id="noread">로그인 후 서비스 이용 가능합니다.</p>
            </div>
            
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