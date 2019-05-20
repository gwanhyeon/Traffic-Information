import React, { Component } from 'react';
import BoardItem from './BoardItem';
import {Table} from 'react-bootstrap'
import BoardForm from './BoardForm';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Board extends Component {
    id = 1
    state = {
        boards: [
            {
                _id: 0,
                board_title: '',
                board_contents: '',
                board_author : '',
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
    
    componentDidMount = () => {
        axios.get('user/board_list')
        .then(res=> {
            this.setState({
                boards : res.data
            });
        });
    }

    handleClickChange = (e) =>{
        const {board_id,board_title,board_contents,board_author,date} = this.state;
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlePrint = (e) => {
        e.preventDefault();
        axios.get('user/board_list')
        .then(res=> {
            this.setState({
                boards : res.data
            });
        });
    }

    // handleCreate = (data) => {
    //     const {boards} = this.state;
    //     console.log(data);
    //         this.setState({
    //             boards: boards.concat({board_id: this.id++, board_date: formatDate(new Date()), ...data})
    //         })
        
    // }

    // 클릭 이벤트 발생시 Link!
    handleChange = (e) => {
        this.props.history.push('/BoardForm');
    }

    handleRead = () => {
        this.props.history.push('/BoardRead');
    }

    render() {
        // <Route render={props => <BoardForm onCreate={this.handleCreate}/>}></Route>

        const {boards} = this.state; 
        const {id} = this;
        let check = null;
        if(id >= 0){
            check = <tbody>
              {boards.map((board, i) => {
                    if(i>=0){
                    console.log("key=>",i);
                    
                             return (
                                <BoardItem
                                board_id={board.board_id}
                                board_title={board.board_title} 
                                board_contents={board.board_contents} 
                                board_author ={board.board_author} 
                                board_date ={board.board_date.toString()}
                                onRemove={this.handleRemove}
                                onUpdate={this.handleUpdate}
                                onRead={this.handleRead}
                                key={i}/>
                            );
                    }
                }
                ).reverse()//게시글 역순으로 출력
              }
            </tbody>
        }

        return (

            <div>
                <p></p>
            {/* <BoardForm 
                onCreate={this.handleCreate}
            /> */}
            
            <link to='board'></link>
            <Table responsive>
            <thead>
              <tr style={{marginBottom: '2px', fontFamily: 'sans-serif', fontSize: '1.5vw'}}>
                <th>no.</th>
                <th>제목</th>
                <th>내용</th>
                <th>이름</th>
                <th>날짜</th>
                <th>수정</th>
                <th>삭제</th>
              </tr>
            </thead>
            {check}
          </Table>
          
            {/* <Link className="nav-link" to="/BoradForm"><button>글쓰기</button></Link> */}
            <button onClick={this.handleChange} className="btn btn-primary" style={{float: 'left', fontFamily: 'sans-serif', fontSize: '1.5vw'}}>글쓰기</button>
            <button onClick={this.handlePrint} className="btn btn-primary" style={{float: 'left', fontFamily: 'sans-serif', fontSize: '1.5vw'}}>로드</button>
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