import React, { Fragment,Component } from 'react';
import BoardRead from './BoardRead';
// import Fragment from 'Fragment';
import '../css/Board.css';


class BoardItem extends Component {
    state = {
        editing : false,
        board_title:'',
        board_contents:''
    }
    handleRead = () => {
      const { reading } = this.state;
      this.setState({ reading : !reading });
    }


    render() {
        const {board_id, board_title,board_date,board_author} = this.props;
        const {reading} = this.state;

        if(reading) {
          return (
            <Fragment>
                <tr>
                <td id="th-style">{board_id}</td>
                <td onClick={this.handleRead} id="th-style-title" > {board_title} </td>
                {/* <td> {board_contents} </td> */}
                <td id="th-style" > {board_author}</td>
                <td id="th-style" > {board_date} </td>
                </tr>
                <tr>
                  <td colSpan="7" id="margin0"> <BoardRead dataFromParent={board_id} onUpdate={this.handleUpdate} /> </td>
                </tr>
            </Fragment>
          );
        }

        return (
          <Fragment>
          <tr>
          <td id="th-style" >{board_id}</td>
          <td onClick={this.handleRead} id="th-style-title" > {board_title} </td>
          {/* <td> {board_contents} </td> */}
          <td id="th-style"> {board_author}</td>
          <td id="th-style" > {board_date} </td>
          </tr>
          </Fragment>
        );
    }
}

export default BoardItem;