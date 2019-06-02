import React, { Component,Fragment } from 'react';

const TransSubwayItem = ({
    board_id, board_title,board_contents,board_date,board_user_name
}) => {
    
        console.log("transItem => ",board_id);
        return (
            
            <Fragment>
            <tr>
            <td style={{color:'black'}}>{board_id}</td>
            <td style={{color:'black'}}> {board_title} </td>
            <td style={{color:'black'}}> {board_contents} </td>
            <td style={{color:'black'}}> {board_user_name}</td>
            <td style={{color:'black'}}> {board_date} </td>
            </tr>
            </Fragment>
            
        );
    
}

export default TransSubwayItem;