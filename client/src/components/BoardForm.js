import React, { Component } from 'react';
import axios from 'axios';
import { loginUser } from '../actions/authentication';
import { connect } from 'react-redux';
import '../css/Board.css';

class BoradForm extends Component {
    
    state = {
        board_title : '',
        board_contents : '',
        board_author: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) => {
        let board_id = null;
        const {board_title, board_contents} = this.state;

        // 페이지 리로딩 방지
        e.preventDefault();

        axios.get('user/board_list')
        .then(res=>{
            board_id = res.data.length+1;
            const board = {
                board_id : board_id,
                board_title : board_title,
                board_contents : board_contents,
                board_author : this.props.auth.user.user_name
            }
            console.log(" 어떤 값이 들어가는지 봐보자 ", board);
            return axios.post('/user/BoardForm', board)
        });

        // 상태 초기화
        this.setState({
            board_title: '',
            board_contents: '',
            board_author: ''
        })
        
        this.props.history.push('/board');



    }

    render () {
        return(

            <div className="listStyle">
            <form onSubmit={this.handleSubmit} className="formStyle">
                <div className="formtitle">
                    <h3>글쓰기</h3>
                    <span>자유롭게 의견을 남겨주세요.</span>
                </div>
                <div className="formspace">
                <h4 className="formh4">제목</h4>
                <textarea
                    // placeholder="제목"
                    value={this.state.board_title}
                    onChange={this.handleChange}
                    required name="board_title"
                    className="form-control"
                    id="formContents"
                    style = {{maxWidth:'1000px', fontSize:'1rem'}}
                />
                </div>
                <h4 className="formh4">내용</h4>
                <textarea
                    // placeholder="내용"
                    value={this.state.board_contents}
                    onChange={this.handleChange}
                    required name="board_contents"
                    className="form-control"

                    id="formContents"
                    style = {{maxWidth:'1000px', height: '300px', fontSize:'1rem'}}

                />
                {/* 유저명 <input
                    // placeholder="유저명"
                    value={this.state.board_author}
                    onChange={this.handleChange}
                    name="board_author"
                    style = {{width: '454px'}}
                />
                <p/> */}
                <button type="submit" className="btn btn-primary" style={{float: 'right',  fontSize: '1rem', margin:'30px'}}>확인</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(BoradForm)
//export default BoradForm;