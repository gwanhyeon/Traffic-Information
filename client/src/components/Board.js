import React, { Component } from 'react';
import BoardItem from './BoardItem';
import {Table} from 'react-bootstrap'
import BoardForm from './BoardForm';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Link} from 'react-router-dom';


class Board extends Component {
    id = 3
    state = {
        boards: [
            {
                board_id: 1,
                board_title: 'React Board #1',
                board_contents: 'If you intend to live then you die',
                board_user_name : 'kgh',
                board_date: formatDate(new Date())
            },
            {
                board_id: 2,
                board_title: 'React Board #2',
                board_contents: 'If you intend to live then you die',
                board_user_name : 'easy',
                board_date: formatDate(new Date())
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

    handleCreate = (data) => {
        const {boards} = this.state;
        this.setState({
            boards: boards.concat({board_id: this.id++, board_date: formatDate(new Date()), ...data})
        })
    }
    handleRemove = (id) => {
        const {boards} = this.state;
        this.setState({
            boards: boards.filter(boards => boards.board_id !== id)
        })
    }
    handleUpdate = (id, data) => {
        const {boards} = this.state;
        this.setState({
            boards: boards.map(
                info => id === info.board_id
                ? {...info, ...data}
                : info
            )
        })
    }
    // 클릭 이벤트 발생시 Link!

    render() {
        // <Route render={props => <BoardForm onCreate={this.handleCreate}/>}></Route>
            const {boards,board_id,board_title,board_contents,board_name,date} = this.state; 
        return (

            <div>
            <BoardForm 
                onCreate={this.handleCreate}
            />
            
            <link to='board'></link>
            <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>제목</th>
                <th>내용</th>
                <th>이름</th>
                <th>날짜</th>
                <th>수정</th>
                <th>삭제</th>
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
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                    key={i}/>);
                })}
              
                {/* <button>
                    
                    <Link to='/BoardForm' component = {BoardForm} onLoadedData={this.handleCreate}>글쓰기</Link>
                </button> */}
            </tbody>
          </Table>
            
            </div>
        );
    }


}
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export default Board;