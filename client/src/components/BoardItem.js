import React, { Fragment,Component } from 'react';
import BoardRead from './BoardRead';
// import Fragment from 'Fragment';
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
        const {board_id, board_title,board_contents,board_date,board_author} = this.props;
        const {editing, reading} = this.state;

        if(reading) {
          return (
            <Fragment>
                <tr style={{fontFamily: 'sans-serif', fontSize: '1.5vw'}}>
                <td>{board_id}</td>
                <td onClick={this.handleRead}> {board_title} </td>
                {/* <td> {board_contents} </td> */}
                <td> {board_author}</td>
                <td> {board_date} </td>
                </tr>
                <tr>
                  <td colSpan="7"> <BoardRead dataFromParent={board_id} onUpdate={this.handleUpdate} /> </td>
                </tr>
            </Fragment>
          );
        }

        return (
                <Fragment>
                <tr style={{fontFamily: 'sans-serif', fontSize: '1.5vw'}}>
                <td>{board_id}</td>
                <td onClick={this.handleRead}> {board_title} </td>
                {/* <td> {board_contents} </td> */}
                <td> {board_author}</td>
                <td> {board_date} </td>
                </tr>
                </Fragment>
        );
    }
}

export default BoardItem;