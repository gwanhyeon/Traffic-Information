import React, { Component,Fragment } from 'react';

const TransUiwangBusItem = ({bus_state,
    bus_location1,
    bus_location2,
    bus_plate1,
    bus_plate2 ,
    bus_time1 ,
    bus_time2 }) => {
        return (
            
            <Fragment>
            <tr>
            <td>{bus_state}</td>
            <td> {bus_location1} </td>
            <td> {bus_plate1}</td>
            <td> {bus_time1}</td>
            <td> {bus_location2} </td>
            <td> {bus_plate2}</td>
            <td> {bus_time2}</td>



            </tr>
            </Fragment>
            
        );
        
        // const {bus_id, bus_title,bus_contents,bus_date,bus_user_name} = this.props;
        // console.log("transItem => ",bus_id);
        
    
}

export default TransUiwangBusItem;