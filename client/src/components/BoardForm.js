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
        // this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            board_title: '',
            board_contents: '',
            board_user_name: ''
        })
        this.props.history.push('/board');
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit} style={{margin: 'auto', width: '500px', marginTop: '50px'}}>
                <h1 className="text-success" style={{marginTop: '40px', fontFamily: 'monospace'}}>Posting</h1>
                <hr/>
                <h4 style={{marginBottom: '2px', fontFamily: 'monospace'}}>title</h4>
                <textarea
                    // placeholder="제목"
                    value={this.state.board_title}
                    onChange={this.handleChange}
                    name="board_title"
                    className="form-control"
                    style = {{width: '500px'}}
                />
                <p/>
                <h4 style={{marginBottom: '2px', fontFamily: 'monospace'}}>content</h4>
                <textarea
                    // placeholder="내용"
                    value={this.state.board_contents}
                    onChange={this.handleChange}
                    name="board_contents"
                    className="form-control"
                    style = {{width: '500px', height: '300px'}}
                />
                <hr/>
                {/* 유저명 <input
                    // placeholder="유저명"
                    value={this.state.board_user_name}
                    onChange={this.handleChange}
                    name="board_user_name"
                    style = {{width: '454px'}}
                />
                <p/> */}
                <button type="submit" className="btn btn-primary" style={{float: 'right', fontFamily: 'monospace', fontSize: '15px'}}>ok</button>
            </form>

        )
    }
}
export default BoradForm;