import React, { Component } from 'react';
import Board from './Board';

class BoradForm extends Component {
    state = {
        board_title : '',
        board_contents : '',
        board_user_name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            board_title: '',
            board_contents: '',
            board_user_name: ''
        })
    
    }
    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="제목"
                    value={this.state.board_title}
                    onChange={this.handleChange}
                    name="board_title"
                />
                <input
                    placeholder="내용"
                    value={this.state.board_contents}
                    onChange={this.handleChange}
                    name="board_contents"
                />
                <input
                    placeholder="유저명"
                    value={this.state.board_user_name}
                    onChange={this.handleChange}
                    name="board_user_name"
                />
                <button type="submit">글쓰기</button>
            </form>

        )
    }
}
export default BoradForm;