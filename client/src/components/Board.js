import React, { Component } from 'react';
import BoardItem from './BoardItem';
import {Table} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Board extends Component {

    state = {
        boards: [
            {
                board_id: 1,
                board_title: 'React Board #1',
                board_contents: 'If you intend to live then you die',
                board_user_name : 'kgh',
                board_date: new Date()
            },
            {
                board_id: 2,
                board_title: 'React Board #2',
                board_contents: 'If you intend to live then you die',
                board_user_name : 'easy',
                board_date: new Date()
            }
        ]
    }
    // state = {        
    //     board_id : '',
    //     board_title : '',
    //     board_contents : '',
    //     board_name : '',
    //     board_date : new Date(),
    // }

    handleClickChange = (e) =>{
        const {board_id,board_title,board_contents,board_name,date} = this.state;
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // 클릭 이벤트 발생시 Link!

    render() {
        
            const {boards,board_id,board_title,board_contents,board_name,date} = this.state; 
        return (
            <div>
            
            <link to='board'></link>
            <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>제목</th>
                <th>내용</th>
                <th>이름</th>
                <th>날짜</th>
              </tr>
            </thead>
            <tbody>
             
              {boards.map((board, i) => {
                console.log("key=>",i);
                
                return (
                    <BoardItem 
                    board_id={board.board_id}
                    board_title={board.board_title} 
                    board_contents={board.board_contents} 
                    board_user_name ={board.board_user_name} 
                    board_date ={board.board_date.toString()}
                    key={i}/>);
                })}
              
         
            </tbody>
          </Table>
            
            </div>
        );
    }


}

export default Board;