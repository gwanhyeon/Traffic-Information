import React, { Fragment,Component } from 'react';
// import Fragment from 'Fragment';
class BoardItem extends Component {
    state = {
        editing : false,
        board_title:'',
        board_contents:''
    }
    handleRead = () => {
      const {board_id, onRead} = this.props;
      onRead(board_id);
  }
    handleRemove = () => {
        const {board_id, onRemove} = this.props;
        onRemove(board_id);
    }
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
        // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
        // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.
    
        const { board_title, board_contents, onUpdate, board_id } = this.props;
        if(!prevState.editing && this.state.editing) {
          // editing 값이 false -> true 로 전환 될 때
          // info 의 값을 state 에 넣어준다
          this.setState({
            board_title: board_title,
            board_contents: board_contents
          })
        }
    
        if (prevState.editing && !this.state.editing) {
          // editing 값이 true -> false 로 전환 될 때
          onUpdate(board_id, {
            board_title: this.state.board_title,
            board_contents: this.state.board_contents
          });
        }
      }
    render() {
        const {board_id, board_title,board_contents,board_date,board_author} = this.props;
        const {editing} = this.state;

        if (editing) { // 수정모드
            return (
                <Fragment>
                <tr style={{fontFamily: 'sans-serif', fontSize: '1.5vw'}}>
                <td>{board_id}</td>
                <td> <input
                    value={this.state.board_title}
                    name="title"
                    placeholder="제목"
                    onChange={this.handleChange}
                  /> </td>
                <td> <input
                    value={this.state.board_contents}
                    name="contents"
                    placeholder="내용"
                    onChange={this.handleChange}
                  /> </td>
                <td> {board_author}</td>
                <td> {board_date} </td>
                <td> <button onClick={this.handleToggleEdit} className="btn btn-primary" style={{fontFamily: 'sans-serif', fontSize: '1.5vw'}}>적용</button></td>
                <td> <button onClick={this.handleRemove} className="btn btn-primary" style={{fontFamily: 'sans-serif', fontSize: '1.5vw'}}>삭제</button></td>
                
                </tr>
                </Fragment>
            );
          }
        
        return (
                <Fragment>
                <tr style={{fontFamily: 'sans-serif', fontSize: '1.5vw'}}>
                <td>{board_id}</td>
                <td onClick={this.handleRead}> {board_title} </td>
                <td> {board_contents} </td>
                <td> {board_author}</td>
                <td> {board_date} </td>
                <td> <button onClick={this.handleToggleEdit} className="btn btn-primary" style={{fontFamily: 'sans-serif', fontSize: '1.5vw'}}>수정</button></td>
                <td> <button onClick={this.handleRemove} className="btn btn-primary" style={{fontFamily: 'sans-serif', fontSize: '1.5vw'}}>삭제</button></td>
                
                </tr>
                </Fragment>
        );
    }
}

export default BoardItem;