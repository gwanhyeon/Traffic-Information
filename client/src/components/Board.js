import React, { Component } from 'react';
import BoardItem from './BoardItem';
import {Table} from 'react-bootstrap'
import BoardForm from './BoardForm';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { loginUser } from '../actions/authentication';
import { connect } from 'react-redux';



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
    async_list(){
        this.lookupInterval = setInterval(() => axios.get('user/board_list')
        .then(res=> {
            this.setState({
                boards : res.data
            });
        })
        ,1000);
    }
    componentDidMount = () => {
        this.async_list();
       
    }
    componentWillUnmount(){
         clearInterval(this.lookupInterval)
    }

    handleClickChange = (e) =>{
        const {board_id,board_title,board_contents,board_author,date} = this.state;
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // 새로고침
    handlePrint = (e) => {
        e.preventDefault();
        axios.get('user/board_list')
        .then(res=> {
            this.setState({
                boards : res.data
            });
        });
    }
    // 글쓰기 컴포넌트 변경
    handleChange = (e) => {
        this.props.history.push('/BoardForm');
    }
    

    render() {
        // <Route render={props => <BoardForm onCreate={this.handleCreate}/>}></Route>
        const {boards} = this.state; 
        const {auth} = this.props;

        console.log("auth가 잘 돌아가는가",auth);
        
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
                                // board_contents={board.board_contents} 
                                board_author ={board.board_author} 
                                board_date ={formatDate(board.board_date)}
                                // onRemove={this.handleRemove}
                                onRead={this.handleRead}
                                key={i}/>
                            );
                    }
                }
                ).reverse()//게시글 역순으로 출력
              }
            </tbody>
        }

        if(auth.isAuthenticated) {
            return (
                <div>
                <link to='board'></link>
                <Table responsive>
                <thead>
                  <tr style={{marginBottom: '2px', fontFamily: 'sans-serif', fontSize: '1.5vw'}}>
                    <th>no.</th>
                    <th>제목</th>
                    <th>이름</th>
                    <th>날짜</th>
                  </tr>
                </thead>
                {check}
              </Table>
                <button onClick={this.handleChange} className="btn btn-primary" style={{float: 'left', fontFamily: 'sans-serif', fontSize: '1.5vw'}}>글쓰기</button>
                <button onClick={this.handlePrint} className="btn btn-primary" style={{float: 'left', fontFamily: 'sans-serif', fontSize: '1.5vw'}}>새로고침</button>
                </div>
            );
        } else {
            return (
                <div>
                <link to='board'></link>
                <Table responsive>
                <thead>
                  <tr style={{marginBottom: '2px', fontFamily: 'sans-serif', fontSize: '1.5vw'}}>
                    <th>no.</th>
                    <th>제목</th>
                    <th>이름</th>
                    <th>날짜</th>
                  </tr>
                </thead>
                {check}
              </Table>
              <button onClick={this.handlePrint} className="btn btn-primary" style={{float: 'left', fontFamily: 'sans-serif', fontSize: '1.5vw'}}>새로고침</button>
              </div>
              )
        }
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

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Board)
// export default Board;