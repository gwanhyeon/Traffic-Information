import React, { Component } from 'react';
import Board from './Board';
import axios from 'axios';
import { loginUser } from '../actions/authentication';
import { connect } from 'react-redux';

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
        const {auth} = this.props;
        let board_id = null;
        const {board_title, board_contents, board_author} = this.state;

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
            <form onSubmit={this.handleSubmit} style={{margin: 'auto', width: '50%'}}>
                <h1 className="" style={{  fontSize: '2.5rem'}}>Posting</h1>
                <hr/>
                <h4 style={{marginBottom: '2px',  fontSize: "1.5rem"}}>title</h4>
                <textarea
                    // placeholder="제목"
                    value={this.state.board_title}
                    onChange={this.handleChange}
                    required name="board_title"
                    className="form-control"
                    style = {{width: '100%', height: 'auto'}}
                />
                <p/>
                <h4 style={{marginBottom: '2px',  fontSize: "1.5rem"}}>content</h4>
                <textarea
                    // placeholder="내용"
                    value={this.state.board_contents}
                    onChange={this.handleChange}
                    required name="board_contents"
                    className="form-control"
                    
                    style = {{width: '100%', height: '300px'}}
                />
                <hr/>
                {/* 유저명 <input
                    // placeholder="유저명"
                    value={this.state.board_author}
                    onChange={this.handleChange}
                    name="board_author"
                    style = {{width: '454px'}}
                />
                <p/> */}
                <button type="submit" className="btn btn-primary" style={{float: 'right',  fontSize: '1.5rem'}}>ok</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(BoradForm)
//export default BoradForm;