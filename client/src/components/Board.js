import React, { Fragment,Component } from 'react';
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
        ],
        currentPage: 1,
        boardsPerPage: 10
    
    }
    handleClick = (event) =>{
        this.setState({
          currentPage: Number(event.target.id)
        });
      }


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


        // ##### 페이지네이션 사용하기
        const { currentPage, boardsPerPage } = this.state;
         // Logic for displaying current todos
        const indexOfLastBoards = currentPage * boardsPerPage;
        const indexOfFirstBoards = indexOfLastBoards - boardsPerPage;
        const currentBoards = boards.slice(indexOfFirstBoards, indexOfLastBoards);

        const {id} = this;
        let renderBoards = null;
        if(id >= 0){
        
        renderBoards = <tbody>{currentBoards.map((board, i) => {
            return(
            <BoardItem
            board_id={board.board_id}
            board_title={board.board_title} 
            board_contents={board.board_contents} 
            board_author ={board.board_author} 
            board_date ={formatDate(board.board_date)}
            onRemove={this.handleRemove}
            onRead={this.handleRead}
            key={i}/>
            );
        }).sort()}
        </tbody>};
           // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(boards.length / boardsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                
                <li className="page-item" ><a className="page-link" key={number}
                id={number}
                onClick={this.handleClick}>{number}</a></li>
            
            );
          });
        // // ##### 페이지네이션 사용하기
        // let check = null;
        // if(id >= 0){
        //     check = <tbody>
        //       {boards.map((board, i) => {
        //             if(i>=0){
        //             console.log("key=>",i);
                    
        //                      return (
        //                         <BoardItem
        //                         board_id={board.board_id}
        //                         board_title={board.board_title} 
        //                         // board_contents={board.board_contents} 
        //                         board_author ={board.board_author} 
        //                         board_date ={formatDate(board.board_date)}
        //                         // onRemove={this.handleRemove}
        //                         onRead={this.handleRead}
        //                         key={i}/>
        //                     );
        //             }
        //         }
        //         ).reverse()//게시글 역순으로 출력
        //       }
        //     </tbody>
        // }
    
        if(auth.isAuthenticated) {
            return (
                <Fragment>
                <div className="listStyle">
                    <div className="title">
                        <p>자유게시판</p>
                        <span>한국교통대학교 의왕캠퍼스 학색들의 자유로운 이야기 공간입니다.</span>
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
            
                    {renderBoards}
                </Table>

                <div className="btnClass">
               <ul className="pagination text-center" style={{display:'table',marginRight:'auto',marginLeft:'auto'}} >
                    {renderPageNumbers}
                </ul>
                <button onClick={this.handleChange} className="btn btn-primary" id="btnSubmit" style={{float:"right"}}>글쓰기</button>
                </div>
                </div>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
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
            
                    {renderBoards}
                </Table>

                <div className="btnClass">

               <ul className="pagination text-center" style={{display:'table',marginRight:'auto',marginLeft:'auto'}} >
                    {renderPageNumbers}
                </ul>

                </div>
                </div>
                </Fragment>
            );
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
