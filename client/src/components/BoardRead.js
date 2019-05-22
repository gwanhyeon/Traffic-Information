import React, { Component } from 'react';
import Board from './Board';
import axios from 'axios';
import BoardItem from './BoardItem';
class BoradRead extends Component {

    
    // 클릭시 findOne() 가져오기
    componentDidMount = () => {
        // console.log("this.props" ,this.props);

        // axios.get('user/board_read/'+board_id)
        // .then(res=> {
        //     this.setState({
        //         board_id : res.data[0].board_id,
        //         board_title : res.data[0].board_title,
        //         board_contents : res.data[0].board_contents,
        //         board_data : res.data[0].board_data,
        //         _id : res.data[0]._id
        //     })
        //     console.log("state를 봐보자", this.state);
        // });
        // console.log("state를 한번 더 봐보자", this.state);
    }
    // 삭제
    handleRemove = (id) => {
        // const {boards} = this.state;
        // this.setState({
        //     boards: boards.filter(boards => boards.board_id !== id)
        // })
        // {boards.map((board, i) => {
        //         if(board.board_id > id){
        //             this.setState({
        //                 board_id: board.board_id--
        //             })
        //         }
        //     })}
        // this.id--
    }

    // 수정
    handleUpdate = (id, data) => {
        // const {boards} = this.state;
        // this.setState({
        //     boards: boards.map(
        //         info => id === info.board_id
        //         ? {...info, ...data}
        //         : info
        //     )
        // })
    }

    handleBack = (e) => {
        this.props.history.push('/board');
    }

    render () {
        return(
            <form style={{margin: 'auto', width: '50%', marginTop: '50px'}}>
                <h1 className="text-success" style={{marginTop: '40px', fontFamily: 'monospace', fontSize: '3vw'}}>게시글 자세히보기</h1>
                <hr/>
                <h4 style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: '1.5vw'}}>title</h4>
                <p
                    // placeholder="제목"
                    name="board_title"
                    className="form-control"
                    style = {{width: '100%'}}
                >
                제목
                {/* {this.state.board_title} */}
                </p>
                <p/>
                <h4 style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: '1.5vw'}}>content</h4>
                <p
                    // placeholder="내용"
                    name="board_contents"
                    className="form-control"
                    style = {{width: '100%', height: '300px'}}
                >
                제목
                {/* {this.state.board_contents} */}
                </p>
                <hr/>
                <button onClick={this.handleUpdate} className="btn btn-primary" style={{float: 'left', fontFamily: 'monospace', fontSize: '1.5vw'}}>수정</button>
                <button onClick={this.handleRemove} className="btn btn-primary" style={{float: 'left', fontFamily: 'monospace', fontSize: '1.5vw'}}>삭제</button>
                <button onClick={this.handleBack} className="btn btn-primary" style={{float: 'right', fontFamily: 'monospace', fontSize: '1.5vw'}}>Back</button>
            </form>
        )
    }
}
export default BoradRead;