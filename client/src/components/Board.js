import React, { Component } from 'react';
import BoardItem from './BoardItem';
import {Table} from 'react-bootstrap'
import BoardForm from './BoardForm';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { loginUser } from '../actions/authentication';
import { updateCurrPage, updateStartEndPage} from "../actions/pagenation"
import { connect } from 'react-redux';
import '../css/Board.css';



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
        // ,
        // pages : {
        //     page: 1,
        //     start :0,
        //     end : 4
        // }
    }

    // handleChangeIndexUp = () => {
    //     const {page,start,end} = this.state.pages;
    //     this.setState({
    //         page: page + 1,
    //         start : start + 4,
    //         end : end +4
    //     });
    // }

    // handleChangeIndexDown = () => {
    //     const {page,start,end}= this.state.pages;
    //     if (start === 0){
    //         return 0;
    //     }
    
    //     this.setState({
    //         page : page - 1,
    //         start : start -4,
    //         end : end-4

    //     })
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
        const {auth,pagenation} = this.props;
        // # 페이지 네이션 !
        const per = 10;
        const total = this.state.boards.length;
        const total_current = Math.ceil(total / per);
        const array = [];
        let j = 0;
        let end;
        pagenation.current = total_current;
        console.log("boards", boards.length);
        for(let i=0; i<total_current; i++) {
            var data = new Array();
            console.log("과연 j는",j)
            for(j=j; j<end; j++){
            data.push(boards[j]);
            }
            array.push(data);
        }
        console.log("잉",array)
        const target = array.slice(pagenation.start, pagenation.end);
        console.log("taaaaaaarget", target);
        console.log("페이지 네이션 몇개 나올까?", total_current);
        console.log("auth가 잘 돌아가는가",auth);
        console.log("pagenation =>" , pagenation)
        
    
        
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
                <div className="listStyle">
                <div className="title">
                    <p>자유게시판</p>
                    <span>한국교통대학교 의왕캠퍼스 통학생들의 자유로운 이야기 공간입니다.</span>
                </div>
                <link to='board'></link>
                <Table responsive >
                <thead>
                  <tr>
                    <th id="th-style">no.</th>
                    <th id="th-style">제목</th>
                    <th id="th-style">이름</th>
                    <th id="th-style">날짜</th>
                  </tr>
                </thead>
                {check}
              </Table>
                <div className="btnClass">
                <button onClick={this.handleChange} className="btn btn-primary" id="btnSubmit" style={{float:"right"}}>글쓰기</button>
                <button onClick={this.handlePrint} className="btn btn-primary" id="btnRefresh">새로고침</button>
                </div>
                </div>
            );
        } else {
            return (
                <div className="listStyle">
                <div className="title">
                    <p>자유게시판</p>
                    <span>한국교통대학교 의왕캠퍼스 통학생들의 자유로운 이야기 공간입니다.</span>
                </div>
                <link to='board'></link>
                <Table responsive>
                <thead>
                    <tr>
                    <th id="th-style">no.</th>
                    <th id="th-style">제목</th>
                    <th id="th-style">이름</th>
                    <th id="th-style">날짜</th>
                  </tr>
                </thead>
                {check}
              </Table>
              <div className="btnClass">
              <button onClick={this.handlePrint} className="btn btn-primary" id="btnRefresh">새로고침</button>
              </div>

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
    errors: state.errors,
    pagenation : state.pagenation,
})

export default connect(mapStateToProps, { loginUser,updateCurrPage, updateStartEndPage })(Board)
// export default Board;