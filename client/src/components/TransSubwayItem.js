import React, { Component,Fragment } from 'react';

const TransSubwayItem = ({
    board_id, board_title,board_contents,board_date,board_user_name
}) => {
    
        const {} = this.props;
        console.log("transItem => ",board_id);
        return (
            
            <Fragment>
            <tr>
            <td>{board_id}</td>
            <td> {board_title} </td>
            <td> {board_contents} </td>
            <td> {board_user_name}</td>
            <td> {board_date} </td>
            </tr>
            </Fragment>
            
        );
    
}

export default TransSubwayItem;